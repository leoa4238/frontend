import mysql from "mysql2/promise"
import dotenv from "dotenv"

//dotenv 라이브러리 설정 함수
//객체로 설정을 해주며, 인자를 비워두면 기본설정 적용
// 만약 환경변수 설정을 .env.Local 에다 저장을 했다면
//config({path:'.env.Local'})
dotenv.config();

// console.log('process.env:', process.env);

// db 연결을 위한 connection pool 만들기
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  waitForConnections: true,
  port: process.env.DB_PORT
});

const getConnection = async () => {
  return await pool.getConnection((err, conn) => {
    if (err) {
      throw Error;
    }
    return conn;
  })
}


export default pool;
export { getConnection };