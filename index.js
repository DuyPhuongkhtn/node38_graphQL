// cài thư viện express nodemon prisma @prisma/client mysql2 dotenv graphql express-graphql
// npm i express nodemon prisma @prisma/client mysql2 dotenv graphql express-graphql
import express from 'express';

const app = express();

let data = "test"
let testCommit = "testCommit"
let test2 = "test2"
let test3 = "test3"

app.listen(8081, () => {
    console.log("BE starting with port 8081")
})
