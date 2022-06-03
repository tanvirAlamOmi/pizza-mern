import mongoose from 'mongoose';

const mongoURL = process.env.MONGO_CONNECTION;

const connectDb =async () => {
    mongoose.connect(mongoURL);
    
    const db = mongoose.connection;
    
    db.on('connected', () => {
        console.log("DB connection successfull");
    });
    
    db.on('error', () => {
        console.log("DB connection failed");
    });
}


export default connectDb;