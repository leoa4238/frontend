// 서버에서 사용하는 파일..
// import 방식을 사용하려면 package.json으로 가서 type 방식을 따로 설정해야한다!
// ES 모듈 방식(import , export)
import express from "express";
import morgan from "morgan";
import router from "./routers/boards.js";
import mysql from 'mysql2/promise.js';
import { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_USER } from "./env.js";


// CommonJS 방식
// const express = require("express");

// app 에는 우리가 사용할 Express 객체가 들어있다.
// Express 객체 속에는 api 제작에 도움을 주는 여러 함수들이 만들어져 있다!
const app = express();
app.set("port", 3001); // 서버 프로그램의 포트번호 설정하기

// 해당 포트번호에서 서버를 실행시켜줘(요청을 들어줘)
// 3001번 포트에서 발생하는 요청은 모두 app.js 로 전달이 된다!
app.listen(app.get("port"), () => console.log(`${app.get("port")}번 포트에서 실행중 입니다!`));

// 미들웨어
// 요청과 응답 사이를 거쳐서 실행되는 함수들 
// boards get요청! --> 미들웨어 ,,,,,--> 게시글 목록 데이터 응답!
// users get 요청! --> 미들웨어 --> 유저 목록 데이터 응답!
// express js 는 요청과 응답 사이에 미들웨어 추가가 자유롭고 쉽다!
// 
// 대표적인 미들웨어 중 하나 morgan 라이브러리 
// morgan 라이브러리를 app 의 미들웨어로 추가하기
// use()
// morgan() 
//  'dev' : 개발할 때 ( 시간, 경로, 요청메소드 ) 
//  'combined' : 배포할 때 ( 사용자 정보 포함하여 )
// 'tiny' 'common' 'short'
app.use(morgan('dev'));

// body-parser 
// express 4.16.0 버전 부터 기본 내장
// 어떠한 데이터를 허용할지 req로 받은 데이터를 어떠한 방식으로 해석할지를 설정
app.use(express.json()); // 데이터 형식으로 json 
// 적용 설정값 
// extended : true --> {a : '배상엽'}
// extended : flase --> [Object: null prototype] {a : '배상엽'} 
app.use(express.urlencoded( {extended:false}));

app.use('/boards', router);

// db 연결을 위한 connection pool 만들기
const pool = mysql.createPool({
    host:DB_HOST,
    user:DB_USER,
    password:DB_PASSWORD,
    database:DB_DATABASE,
    waitForConnections:true,
    port:DB_PORT
});



// get 요청 받아보기
// app.get('/',async (req, res)=>{
//     console.log('get요청 진행중!');
//     let conn = await pool.getConnection(async (err, conn)=>{return conn});
//     let [rows, field] = await conn.query('select * from tbl_posts');

//     console.log('get요청 종료');
//     res.send(rows);
// });

// app.get("/boards", (req, res) => {
//   // req 변수에는 프론트에서 사용자가 요청한 요청 정보들이 담겨있는 Request 객체가 들어있다
//   // res 변수에는 응답으로 전달할때 사용할 수 있는 여러가지 함수들이 들어있는 Response 객체가 들어있다
//   res.send({ name: "배상엽", age: 10 });
// });

