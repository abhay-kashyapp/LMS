// import mongoose from "mongoose";

// const connectDb = async () => {
//     try {
//         await mongoose.connect(process.env.MONGODB_URL)
//         console.log("DB connected")
//     } catch (error) {
//         console.log("DB error")
//     }
// }
// export default connectDb


import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ DB connected");
  } catch (error) {
    console.error("❌ DB connection error:", error.message);
    process.exit(1); // Agar DB fail ho jaye, server ko stop kar do
  }
};

export default connectDb;
