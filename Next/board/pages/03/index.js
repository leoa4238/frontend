import axios from "axios";

const AxiosPage = ()=>{


    const onButtonClick = ()=>{
        let res = axios.get('https://koreanjson.com/users').
        then((resp)=>resp.data).
        then((a)=>{console.log(a)});
        console.log(res);
    }
    const onAxiosAwait = async () =>{
    try{
      let res = await axios.get('https://koreanjson.com/users');
      let data = res.data;
    }catch(err){
      console.log('오류발생');
    }
    }

    const onFetchClick = ()=>{
        let res = fetch('https://koreanjson.com/users')
        .then((resp)=>resp.json()).then((a)=>console.log(a)).catch((err)=>{console.log(err)});
        console.log(res); //동시에 실행이 되기 때문에, 사용하지 않는다
    }
    //await
    const onFetchAwait = async () =>{ //함수가 비동기 함수여야 await를 쓸수 있다 async를 붙여준다
      let res = await fetch('https://koreanjson.com/users');
     let temp =  await res.json();

    }
    


    return(
        <>
            <h1>AxiosPage</h1>
            <button onClick={onButtonClick}>axios를 통한 get요청</button>
            <button onClick={onFetchClick}>fetch를 통한 get 요청</button>
            <button onClick={onFetchAwait}>fetch를 통힌 get요청(await키워드)</button>
            <button onClick={onAxiosAwait}>Axios를 통힌 get요청(await키워드)</button>
        </>
    );
}

export default AxiosPage;