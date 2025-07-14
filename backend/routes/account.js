import express from 'express'; // Import the express module
const router = express.Router(); // Initialize an Express Router object
import authMiddleware from '../middleware.js';
import { Account } from '../db.js';
import zod from 'zod'
import mongoose from 'mongoose';


router.get('/balance',authMiddleware,async (req,res)=>{
    const account = await Account.findOne({
        userID : req.userId
    })

    // console.log(account)

    res.json({
        balance: account.balance
    })
});

const transferBody = zod.object({
    to : zod.string(),
    amount: zod.number()
})

router.post('/transfer',authMiddleware, async (req, res)=>{
    const input = transferBody.safeParse(req.body);
    const session = await mongoose.startSession();

    if(!input.success){
        return res.status(411).json({
            message: "Invalid inputs"
        })
    }

    await session.startTransaction();

    const account = await Account.findOne({
        userID : req.userId
    }).session(session)

    if(account.balance <= input.data.amount){
        await session.abortTransaction();
        return res.status(400).json({
            message : "Insufficiant funds"
        })
    }

    const toAccount = await Account.findOne({
        userID: input.data.to
    }).session(session)

    if(!toAccount){
        await session.abortTransaction();
        return res.status(400).json({
            message: "Invalid account"
        })
    }

    await Account.updateOne({
        userID : req.userId
    },{
        $inc:{
            balance : -input.data.amount
        }
    }).session(session);

    await Account.updateOne({
        userID : input.data.to
    },{
        $inc:{
            balance : input.data.amount
        }
    }).session(session);

    await session.commitTransaction();
    res.json({
        message : "Transfer succesful"
    })
})

export default router;