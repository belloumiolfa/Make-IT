import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

const connectDB = async () => {
   try {
      const conn = await mongoose.connect(process.env.MONGODB_URL, {
         userUnifiedTopology: true,
         useNewUrlParser: true,
         userCreateIndex: true,
      });
      console.log(
         `-- MongoDB connected : ${conn.connection.host}--`.cyan.underline
      );
   } catch (error) {
      console.log('Error mongodb', error.red.underline.bold);
      process.exit(1);
   }
};
export default connectDB;
