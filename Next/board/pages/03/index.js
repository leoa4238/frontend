import axios from "axios";

const AxiosPage = ()=>{


    const onButtonClick = ()=>{
        let res = axios.get('https://koreanjson.com/users').
        then((resp)=>resp.data).
        then((a)=>{console.log(a)});
        console.log(res);
    }
    const onAxiosAwait = async()=>{
        let res = await axios.get('https://koreanjson.com/users');
        console.log(res);
        let data = res.data;
        console.log(data);

    }

    const onFetchClick = ()=>{

        let res = fetch('https://koreanjson.com/users')
        .then((resp)=>resp.json())
        .then((a)=>console.log(a))
        .catch((err)=>{console.log(err)});
        console.log(res);
    }

    const onFetchAwait = async () => {
        try{
            let res = await fetch('https://koreanjson.com/users');
            let temp = await res.json();
            
        }catch(err){
            console.log('오류발생!');
        }
    }

    return(
        <>
            <h1>AxiosPage</h1>
            <button onClick={onButtonClick}>axios를 통한 get요청</button>
            <button onClick={onFetchClick}>fetch를 통한 get 요청</button>
            <button onClick={onFetchAwait}>fetch를 통한 get 요청(await 키워드)</button>
            <button onClick={onAxiosAwait}>Axios 통한 get 요청(await 키워드)</button>
        </>
    );
}

export default AxiosPage;