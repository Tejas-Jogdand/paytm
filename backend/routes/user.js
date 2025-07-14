import dotenv from 'dotenv'
dotenv.config()
import express from 'express'; // Import the express module
const router = express.Router(); // Initialize an Express Router object
import { User, Account } from '../db.js'
import authMiddleware from '../middleware.js'
import jwt from 'jsonwebtoken'
import zod from 'zod'

const signupBody = zod.object({
    username: zod.string().email(),
    firstName: zod.string(),
    lastName: zod.string(),
    password: zod.string().min(6)
})

router.post('/signup', async (req, res) => {
    const input = signupBody.safeParse(req.body);
    if (!input.success) {
        return res.status(411).json({
            message: "Incorrect Inputs, Password must be of 6 length"
        })
    }

    const existingUser = await User.findOne({
        username: input.data.username
    })
    // console.log(existingUser);
    if (existingUser) {
        return res.status(411).json({
            message: "Email ID already taken"
        })
    }

    // console.log(input.data);

    const newUser = await User.create({
        username: input.data.username,
        firstName: input.data.firstName,
        lastName: input.data.lastName,
        password: input.data.password,
    })

    const userID = newUser._id;

    await Account.create({
        userID: userID,
        balance: Math.floor(1 + Math.random() * 99999)
    })

    const token = jwt.sign({
        userId: userID
    }, process.env.JWT_PASS)

    res.json({
        message: "User created successfully",
        token: token
    })
});

const signinBody = zod.object({
    username: zod.string().email(),
    password: zod.string()
})

router.post('/signin', async (req, res) => {
    const input = signinBody.safeParse(req.body);
    if (!input.success) {
        return res.status(411).json({
            message: "Invalid credentials"
        })
    }

    const user = await User.findOne({
        username: input.data.username,
        password: input.data.password
    })

    // console.log(user)

    if (!user) {
        return res.status(411).json({
            message: "Error While logging in"
        })
    }

    const token = jwt.sign({
        userId: user._id
    }, process.env.JWT_PASS)

    res.status(200).json({
        token: token
    })
})

const updateBody = zod.object({
    password: zod.string().min(6).optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional()
})

router.put('/', authMiddleware, async (req, res) => {
    const input = updateBody.safeParse(req.body);
    if (!input.success) {
        return res.status(411).json({
            message: "Error while updating information"
        })
    }
    // console.log(input.data)
    // console.log(req.userId)
    await User.updateOne({
        _id: req.userId
    }, input.data)

    res.status(200).json({
        message: "Updated successfully"
    })
})

router.get('/me', authMiddleware, async (req, res) => {
    try {
        const user = await User.findById(req.userId);
        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }
        
        res.status(200).json({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        });
    } catch (error) {
        res.status(500).json({
            message: "Error fetching user information"
        });
    }
});

router.get('/bulk', async (req, res) => {
    const filter = req.query.filter || "";
    
    //$options: 'i' make case-insensitive
    const users = await User.find({
        $or: [
            { firstName: { $regex: filter, $options: 'i' } },
            { lastName: { $regex: filter, $options: 'i' } }
        ]
    });

    res.status(200).json({
        users: (await users).map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    })
})

export default router;