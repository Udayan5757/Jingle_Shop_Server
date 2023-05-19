const express = require("express");
const mongoose = require("mongoose");
const adminRouter = require("./routes/admin");
const authRouter = require('./routes/auth');
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");
const PORT = process.env.PORT || 3000;
const app = express();
const DB = "mongodb+srv://Udayan:DragonBallMongoDb@cluster0.5n0dpxb.mongodb.net/?retryWrites=true&w=majority";

app.use(express.json());
app.use(authRouter);
app.use(adminRouter);
app.use(productRouter);
app.use(userRouter);
//connections
mongoose.connect(DB)
.then(()=>{
    console.log("connection successful");
}).catch((e)=>{
    console.log(e);
});

app.listen(PORT, "0.0.0.0",() => {
    console.log(`connected at port ${PORT}`);
});
