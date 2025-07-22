import dotenv from 'dotenv';
dotenv.config();
import mongooes from 'mongoose';

try {
  await mongooes.connect(process.env.MONGO_URL);
} catch (e) {
  console.log('Error during connection : ', e);
}

const userSchema = new mongooes.Schema({
  username: String,
  firstName: String,
  lastName: String,
  password: String,
});

const accountSchema = new mongooes.Schema({
  userID: {
    type: mongooes.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  balance: Number,
});

export const User = mongooes.model('User', userSchema);
export const Account = mongooes.model('Account', accountSchema);
