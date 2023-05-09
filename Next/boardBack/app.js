// 서버에서 사용하는 파일..
// import 방식을 사용하려면 package.json으로 가서 type 방식을 따로 설정해야한다!
// ES 모듈 방식(import , export)
import express from "express";
import morgan from "morgan";
import router from "./routers/boards.js";
import pool, { getConnection } from "./db.js";
//cors
import cors from "cors";
import comments from "./routers/comments.js";

// CommonJS 방식
// const express = require("express");

// app 에는 우리가 사용할 Express 객체가 들어있다.
// Express 객체 속에는 api 제작에 도움을 주는 여러 함수들이 만들어져 있다!
const app = express();
app.set("port", 3001); // 서버 프로그램의 포트번호 설정하기

// 해당 포트번호에서 서버를 실행시켜줘(요청을 들어줘)
// 3001번 포트에서 발생하는 요청은 모두 app.js 로 전달이 된다!
app.listen(app.get("port"), () => console.log(`${app.get("port")}번 포트에서 실행중 입니다!`));

app.use(cors());
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
app.use(express.urlencoded({ extended: false }));

app.use('/boards', router);
app.use('/comments', comments);





//Localhost:3001/test get 요청하게 된다면

//Localhost:3001/test get 요청하게 된다면
// res.status(상태코드)
//res.send : 응답으로 문자열의 결과를 볼때 쓰는 것이다.(content타입을 알아서 판단)
//res.json() : 응답으로 json 형식으로 바꾸어 보내줌 -> 객체로 알아서 바꿔줌 content-type : application/JSON으로 고정
//res.render() :응답으로 html 코드형식을 제공
//res.end() : 응답으로 보낼 데이터가 없을 때 응답 종료



app.get('/test', async (req, res) => {
    let testResponse = {
        message: '사용자 목록 가져오기 성공!'

    };
    try {

        let connection = await getConnection()
        let [rows, field] = await connection.query('select * from tbl_users');
        connection.release();
        testResponse.data = rows
        res.status(200).json(testResponse); //객체에서 status를 201로 설정하고 응답완료보내줘!
    } catch (err) {
        console.log('서버 내부 오류 발생!', err)
        res.status(500).end(); //서버 내부적인 오류
    }
});


//동적 쿼리 작성
app.get('/users/:uId', async (req, res) => {
    console.log('users/:uId get 요청 발생!');
    console.log(req.params);
    let usersRes = {
        message: '유저 정상적으로 받아옴!'
    };

    try {

        let connection = await pool.getConnection()
        let query = `select * from tbl_users where uId = ${req.params.uId}`
        let [rows, field] = await connection.query(query);
        if (rows.length == 0) {
            usersRes.message = '유저 조회 실패'
        }
        usersRes.data = rows;
        res.status(200).json(usersRes);
    } catch (err) {
        console.log('서버자체 오류 발생', err);
        res.status(500).end();
    }
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

app.get('/tmp/users', async (req, res) => {
    try {
        let sql = 'select * from tbl_users where uName=? or uName=?;'
        let conn = await getConnection();
        let [rows, field] = await conn.query(sql, ['이정도', '홍길동']);
        conn.release();
        res.status(200).json(rows);

    } catch (error) {
        res.status(500).end();
    }
});

// 다중쿼리 테스트
app.get('/tmp/:uId', async (req, res) => {

    try {
        let sql = 'select * from tbl_users where uId = ?;'
        let conn = await getConnection();
        let [rows, fiedl] = await conn.query(sql, req.params.uId);

        conn.release();
        res.status(200).json(rows);
    } catch (err) {
        console.log(err);
        res.status(500).end();
    }
});



app.post('/tmp/users', async (req, res) => {
    try {
        let insertValue = [
            '김팬텀',
            'yyy1120',
            'azjh1120@gmail.com',
            '010-2222-2222',
            'https://www.naver.com',
            null,
            '서울특별시',
            '수성구',
            '신매동 145',
            '08832',
            '20230412',
            '20230412'
        ];
        let conn = await getConnection()
        let sql = `
        insert into tbl_users 
        (uName, userName, email, uPhone, uWebsite, uProvince, uCity, uDistrict, uStreet, uZipcode, createdAt, updatedAt)
        values 
        (?);
        `;

        let [rows, fields] = await conn.query(sql, [insertValue])
        conn.release();
        res.status(201).json(rows);
    } catch (err) {
        console.log(err);
        res.status(500).end();
    }

})

//insert 같은 경우에는 여러개의 인자를 객체로 전달
app.post('/tmp/boards', async (req, res) => {
    try {
        // let insertValue = [req.body.pTitle, req.body.pContent, req.body.userId];
        let sql = `insert into tbl_posts
        set ?;`;

        let conn = await getConnection();
        let [rows, field] = await conn.query(sql,req.body);
        conn.release();
        res.status(201).json(rows);
    } catch (err) {
        console.log(err)
        res.status(500).end();
    }

})