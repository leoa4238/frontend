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
  let conn = null;
  try {
    conn = await getConnection();
    let [rows, fields] = await conn.query(sql);
    
    res.json(rows);

  } catch (err) {
    res.status(500).end();
  }finally{
    if(conn!==null) conn.release();
  }
});
//localhost:3001/comments 포스트 요청~
//새롭게 댓글 추가가 된다
comments.post('/', async (req, res) => {
  let sql = 'insert into tbl_comments set ?';
  let conn = null;

  try {
    conn = await getConnection();
    let [rows, fields] = await conn.query(sql, req.body);
    console.log('rows:', rows, 'fields:', fields);
    let [rows2, fields2] = await conn.query('select * from tbl_comments where id=?', rows.insertId)

    console.log(rows2);

    res.json(rows2[0]);
  } catch (err) {
    console.log(err);
    res.status(500).end();
  }finally{
    if( conn!== null) conn.release();
  }

});

//localhost:3001/commnets/5 --> 5번 id를 가진 댓글 조회
comments.get('/:commentId', async (req, res) => {
  let sql = 'select * from tbl_comments where id=?'
  let conn = null
  try {
    conn = await getConnection();
    let [rows, fields] = await conn.query(sql, req.params.commentId);

    res.json(rows[0]);
  } catch (err) {
    res.status(500).end();
  }finally{
    if(conn !== null) conn. release();
  }
})


//Localhost:3001/comments/5, delete 요청 --> 5번 id 댓글 삭제
comments.delete('/:commentId', async (req, res)=>{
  let conn = nnull;
  
  try{
      conn = await getConnection();
      let [rows, fields] = await conn.query('delete from tbl_comments where id=?', req.params.commentId);
      res.json(rows);
    }catch(err){
      res.status(500).end();
  }finally{
    if(conn !== null) conn.release();
  }
})


comments.put('/:commentId', async(req, res)=>{
  let conn = null;

  try{
    //request.body에는 {content:'수정할 내용'} 이 문자열로 들어있다
    // --> ? 자리에 들어갈 때는 content = '수정할 내용'으로 컬럼=값으로 들어간다.
    conn = await getConnection();
    let[result, fields] = await conn.query
    ('update tbl_comments set ?, updatedAt = now() where id = ?', 
    [req.body, req.params.commentId]
    );
    if(result.affectedRows === 0){
      res.status(404).end({message: '댓글 아이디를 찾을 수 없어요'});
      return;
    }
    
    console.log(result);
    //추가된 댓글 객체를 응답으로 보내주기
    let [rows] = await conn.query('select * from tbl_comments where id=?', req.params.commentId); 
    //rows는 배열이고, 그 배열 속에 0번째 방에 쿼리 실행 결과(수정한 댓글의 데이터, 객체)가 있다
    res.status(201).json(rows[0]);
  }catch(err){
    console.log(res);
    res.status(500).end();
  }finally{
    if(conn !== null) conn.release();
  }
});

export default comments;