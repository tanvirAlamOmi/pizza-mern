import mongoose from 'mongoose';

const mongoURL = process.env.MONGO_CONNECTION;

const connectDb =async () => {
    mongoose.connect('mongodb+srv://lazarus:2441139@dhar-chai.fg0kz.mongodb.net/pitta_pizza');
    
    const db = mongoose.connection;
    
    db.on('connected', () => {
        console.log("DB connection successfull");
    });
    
    db.on('error', () => {
        console.log("DB connection failed");
    });
}


export default connectDb;