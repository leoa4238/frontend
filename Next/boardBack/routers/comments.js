import express from "express"
import { getConnection } from "../db.js";

const comments = express.Router();

//Localhost:3001/comments에서 get요청 --> 전체 댓글 목록에서 get 요청
//localhost:3001/comments?postId=1 --> postId가 1인 게시글에 작성된 댓글 목록
//localhost:3001/comments?userId=1 --> userId가 1인 작성자가 작성한 댓글 목록

comments.get('/', async (req, res) => {
  //  req.query에 들어있는 postId 번쨰 방에 들어있는 게시글 정보 가져오기
  let sql = `select * from tbl_comments`
  if (req.query.postId) {
    sql = `select * from tbl_comments 
    where postId=${req.query.postId}
    order by createdAt asc`
  }
  try {
    let conn = await getConnection();
    let [rows, fields] = await conn.query(sql);
    res.json(rows)
  } catch (err) {
    res.status(500).end();
  }
});
//localhost:3001/comments 포스트 요청~
//새롭게 댓글 추가가 된다
comments.post('/', async (req, res) => {
  let sql = 'insert into tbl_comments set ?';
  try {
    let conn = await getConnection();
    let [rows, fields] = await conn.query(sql, req.body);
    console.log('rows:', rows, 'fields:', fields);
    let [rows2, fields2] = await conn.query('select * from tbl_comments where id=?', rows.insertId)

    console.log(rows2);

    res.json(rows2[0]);
  } catch (err) {
    console.log(err);
    res.status(500).end();
  }

});

//localhost:3001/commnets/5 --> 5번 id를 가진 댓글 조회
comments.get('/:commentId', async (req, res) => {
  let sql = 'select * from tbl_comments where id=?'
  try {
    let conn = await getConnection();
    let [rows, fields] = await conn.query(sql, req.params.commentId);

    res.json(rows[0]);
  } catch (err) {
    res.status(500).end();
  }
})


//Localhost:3001/comments/5, delete 요청 --> 5번 id 댓글 삭제
comments.delete('/:commentId', async (req, res)=>{
  try{
      let conn = await getConnection();
      let [rows, fields] = await conn.query('delete from tbl_comments where id=?', req.params.commentId);
      res.json(rows);
    }catch(err){
      res.status(500).end();
  }
})

export default comments;