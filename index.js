// cài thư viện express nodemon prisma @prisma/client mysql2 dotenv graphql express-graphql
// npm i express nodemon prisma @prisma/client mysql2 dotenv graphql express-graphql
import express from 'express';

const app = express();

let data = "test"
let check = "abc"


app.listen(8081, () => {
    console.log("BE starting with port 8081")
})
