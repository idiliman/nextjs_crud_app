import mongoose from 'mongoose';
const MONGO_URI =
  'mongodb+srv://admin:Abc12345@cluster0.soub0b9.mongodb.net/?retryWrites=true&w=majority';

const connectMongo = async () => {
  try {
    const { connection } = await mongoose.connect(MONGO_URI);
    if (connection.readyState === 1) {
      console.log('Databse Connected');
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

export default connectMongo;
