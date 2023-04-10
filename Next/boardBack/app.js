//서버에서 사용하는 파일
// const express = require("express");
//여기 안에 있는 파일에 함수 갯수 모두 불러온다
//근데 한개만 사용하고 싶다고 한다면 불필요한 자원이 낭비가 되는 것이다.
//import 방식을 사용하려면 package.json으로 가서 type 방식을 따로 설정해야한다
//es 모듈 방식(import , export)하는 방식

import express from "express";
import morgan from "morgan";
import router from "./routers/boards.js";

// commonJS 방식
//const express = require("express");

//app에는 우리가 사용할 express 객체가 들어있다
//Express 객체 속에는 api 제작에 도움을 주는 여러 함수들이 만들어져 있다.
const app = express();
app.set('port', 3001); //서버 프로그램의 포트번호 설정

//해당 포트번호에서 서버를 실행시키자
//3001번 포트에서 발생하는 요청은 모두 app.js로 전달이 된다
app.listen(app.get('port'),()=>{console.log(`${app.get('port')}번 포트번호를 보여주세요`)})//(포트번호, 실행시킬 함수)

//미들웨어
//요청과 응답 사이를 거쳐서 실행되는 함수들 
// boards get 요청 --> 미들웨어,,, -> 게시글 목록 데이터 응답!
// morgan 라이브러리 --> 미들웨어 --> 유저 목록 뎅터 응답
//express.js는 요청과 응답 사이에 미들웨어 추가가 자유롭고 쉽다

//대표적인 미들웨어 중 하나 morgan 라이브러리
//morgan 라이브러리를 app의 미들웨어로 추가하기
// use()
// morgan()
// 'dev' : (시간 ,경로 ,요청메소드 )
//'combined': 주로 배포할때 많이 사용한다
//'tiny','common', 'short'
app.use(morgan('dev')) 

// body-paser
//express 4.16.0 버전부터 기본내장
//어떠한 데이터를 허용할지 req로 받은 데이터를 어떠한 방식으로 해석할지를 설정
app.use(express.json()); //데이터형식 json으로

//적용 설정값
//extended : true --> {a:'안성현'}
//extended : false --> [object: null prototype] {a: 안성현}
app.use(express.urlencoded({extended:false})); //객체를 넘겨줘야 한다
app.use('/boards', router)


//get요청을 받아보기
app.get('/',(req,res)=>{ //홈페이지에 나오는것은 /를 써서 가져올 수 있다.
  res.send('hello world')
})
// app.get('/boards', (req,res)=>{
//   //req변수에는 프론트에서 사용자가 요청한 요청 정보들이 담겨 있는 Request 객체가 담겨 있다
//   //res 변수에는 응답으로 전달할 때 사용할 수 있는 여러가지 함수들이 들어있는 response 객체가 들어있다.
// res.send({name:'안성현', age: 10});
// });





