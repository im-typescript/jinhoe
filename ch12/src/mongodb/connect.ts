//@ts-nocheck
import { MongoClient } from 'mongodb'

export const connect = (mongoUrl: string = 'mongodb://localhost:27017') => 
  MongoClient.connect(mongoUrl, {useNewUrlParser: true, useUnifiedTopology: true})




// import { MongoClient } from "mongodb";
// import { mongo, Mongoose } from "mongoose"


// export const connect = (mongoUrl: string = 'mongodb://localhost:27017'): Promise<any> =>
//     new Promise(async (resolve, reject) => {
//         const mongoose = require('mongoose');
//         mongoose.connect(mongoUrl, (error, data: any) => { // :Error 타입에러 
//             error ? reject(error) : resolve(data)
//         })
// }) 


// // 4. 연결 실패
// connection.on('error', function(){
//     console.log('Connection Failed!');
// });
// // 5. 연결 성공
// connection.once('open', function() {
//     console.log('Connected!');
// });

// export const connect = () => {

//     mongoose.connect(mongoUrl);
//     return mongoose.connection;
// }

// export const connect = (mongoUrl: string = 'mongodb+srv://jinhoekim:fp2skvos@cluster0.yn04hef.mongodb.net/test') => 
// Mongoose.connect(mongoUrl)

//https://www.mongodb.com/compatibility/using-typescript-with-mongodb-tutorial
//npm install dotenv
// .env 파일 추가