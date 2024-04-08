// Packages..
// 1.express
// 2.dotenv
// 3.nodemon
// 4.mysql
// 5.jsonwebtoken
// 6.bcrypt




require('dotenv').config();
const express = require('express');
const app = express();
const userRouter = require('./api/auth/useRouter');

app.use(express.json());

app.use("/api/users",userRouter);

app.listen(process.env.APP_PORT,()=>{
    console.log("App is Running on PORT:",process.env.APP_PORT);
})
