// 주소가 localhost:3001/boards 로 시작하는 애들은 여기서 api 관리
import express, { query } from "express";
import { getConnection } from "../db.js";

const router = express.Router(); // 라우터 관리

 //Localhost:3001/boards/1
router.get('/', async (req, res) => {
    //특정  user가 작성한 게시글 목록 가져오기

    console.log(req.query.userId);
    try {

        let conn = await getConnection();
        let sql = req.query.userId ? `select * from tbl_posts where userId = ${req.query.userId}`: `select * from tbl_posts;`;
        let [rows, field] = await conn.query(sql)
        conn.release();
        
        let boardsRes = {
            message: req.query.userId? `${req.query.userId}번 작성자의 게시글 조회 성공!`: '전체 게시글 조회 성공',
            data: rows
        }
        res.status(200).json(boardsRes);
    }catch(err) {
        console.log('서버내부오류', err);
        res.status(500).end();
    }
    });

    //post요청 Localhost :3001/boards    
    router.post('/', async(req,res)=>{
        try{
            console.log('바디 안에는 무엇이?', req.body);
            let conn = await getConnection()
            let sql = `insert into tbl_posts
            (pTitle, pContent, userId)
            values
            ('${req.body.title}','${req.body.content}',${req.body.userId});
            `;
            
            let a = await conn.query(sql);
            //insert 쿼리 실행 결과로는 insert된 행에 대한 여러 정보들이 들어 있다.
            conn.release();
            res.json({message:'새롭게 추가성공!', newId:a[0].insertId});

        }catch(err){
            console.log(err)
            res.status(500).end();
        }
    });

router.get('/new', (req, res) => {
    res.send('/new 응답!');
})
//put 요청 localhost:3001/boards/1 -->1번 게시글 수정
router.put('/:boardsNum',async(req,res)=>{
    try{
        let sql = `
        update tbl_posts
        set pTitle = '${req.body.title}',  pContent = '${req.body.content}', updatedAt =now()
        where pId = ${req.params.boardsNum};
        `;

        let conn = await getConnection();
        let a = await conn.query(sql);
        conn.release();
        res.json({message:`${req.params.boardsNum}수정완료`, target: `${req.params.boardsNum}`});
    }catch{
        res.status(500).end();
    }
})

//get 요청 localhost:3001/boards/1
router.get('/:boardNum', async(req, res) => {
    // router parameter로 전달한 값은 
    // req 객체 속 params 객체 속 변수명에 들어있다

    try{
        let conn = await getConnection();
        let sql = `select * from tbl_posts where pId = ${req.params.boardNum}`;
     let [rows, field] = await conn.query(sql);
     conn.release();//커넥션 반납

     let boardDetailRes = {
        message: `${req.params.boardNum}번 게시글 조회 성공!`,
        fetch_board:rows[0]
     }
     res.status(200).json(boardDetailRes);
    }catch(err){
        console.log(err);
        res.status(500).end();
    }

   });

// /boards?userId=10
// ? 는 주소가 아니기에 ? 앞까지의 주소 에 가서 req.query.변수명 으로 값을 받아와야한다!
// router.get('/?userId=10', (req, res)=>{
//     res.send(`요청완료!!`);
// });



export default router;