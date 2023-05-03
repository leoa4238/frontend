// console.log('첫번째 작업');
// //setTimeout 함수는 첫번째 인자로 실행시킬 함수를 넘겨준다
// //두번째 인자로는 지연시킬 ms를 넘겨준다
// //그 뒤의 인자는 실행시킬 함수의 인자로 넘어가는 값들을 넣어준다
// setTimeout(console.log, 1000, '안녕하세요'); //동기함수

// //setTimeout(()=>{console.log('안녕하세요')}, 1000)

// console.log('작업 완료!');

//1. 콜백함수(인자로 함수를 넘겨준다)를 이용한다
// const f1 = (a) => {
//   setTimeout(
//     () => {
//       console.log('데이터 받아오기 끝')
//       a();
//     }, 1000
//   );
// }

// const f2 = () => {
//   console.log('받아온 데이터를 출력했어요!')
// }

// f1(f2);

//콜백 지옥
//(동기 함수1이 완전히 끝난 후 동기함수 2가 완전히 끝난후 동기함수 3이 완전히 끝난후
//.....마지막으로 작업을 해야하는 task가 있을 때 
//함수를 인자로 넘겨주는 방식은 너무나도 복잡해진다 오류처리도 힘들다)


// new Date('2021-01-01');

//2. promise객체
//생성자는 함수를 인자로 넘겨줘야한다
//인자로 넘어가는 함수는 매개변수가 두개 있어야하고,
// 앞에 있는 매개변수에는 resolve 함수가, 
// 뒤에 있는 매개변수에는 reject 함수가 대입이된다
//resolve 함수를 실행하면 resolve 함수의 인자로 넘어가는 값이 전달된 데이터가 된다

//reject함수를 실행하면 
// reject함수의 인자로 넘어가는 값이 전달되며 상태는 rejected 상태가된다

//   promise 객체의 상태 3가지
//   fulfilled 요청한 데이터를 받아온상태
//   pending   요청한 데이터를 받아오고 있는 상태
//   rejected  요청한 데이터를 거절된 상태
// let a = new Promise((res, rej)=>{
//   setTimeout(()=>{
//     res(100)},5000);
  
//   rej(100);
//   // res(100); //받아오고 싶은데이터

// // }); //a라는 변수에 넣었다 생성자를 쓸때 반드시 함수를 넘겨줘야한다
// console.log(a);

// a.then((res)=>{console.log(res)}).catch((err)=>{console.log(err)}); //a의 작업이 완전히 끝나면 실행된다 then함수
// //완료 되었을때 then이 실행된다
// console.log('안성현')

// fetch() 함수는 인자로 API 경로를 해석한다
//그리고 기본적으로 get방식으로 해석한다

// let a = fetch('https://koreanjson.com/users');
// console.log(a);

// a.then((pram)=>{return pram.json()}).then((param)=>{console.log(param)
// // 모든 유저에 대한 정보는 param에 들어있으니까 
// //이를 사용하여 알맞게 뿌려주기
// //promise타입이면 then을 이어서 쓸 수 있다
//   for(let i = 0; i<param.length; i++){
//     console.log(param[i].name);
//   }
// });

// //get방식을 통해 3번 아이디를 가진 user의id 정보 출력하기
// fetch('https://koreanjson.com/users/3')
// .then((resp)=>{return resp.json()})
// .then((user)=>{console.log(user)})
// .catch((err)=>{console.log(err)});

// //가상유저
// let newUser = 
//   {
//     "id": 11,
//     "name": "이강인",
//     "username": "kanginlee",
//     "email": "kanginlee@hanmail.net",
//     "phone": "010-9311-9411",
//     "website": "https://twitter.com/@kanginlee",
//     "province": "전라북도",
//     "city": "전주시",
//     "district": "완산구",
//     "street": "풍남동3가 64-1",
//     "zipcode": "55041",
//     "createdAt": "2019-02-24T16:17:47.000Z",
//     "updatedAt": "2019-02-24T16:17:47.000Z"
// }

// fetch('https://koreanjson.com/users',{
//   method:'post',
//   body:JSON.stringify(newUser),
//   headers:{
//     'Content-Type': 'application/json' 
//   }
// }).then(resp => console.log(resp.json())).then(newUser =>{
//   console.log('우리가 추가한 user:', newUser);
// })

// ===========================================================================

let postList = [
  {page:1},
  {page:10},
  {page:16},
  {page:17},
  {page:5},
  {page:78},
  {page:46},
]

//첫번째 -1 두번째 1 자리가 바뀌고 세번째 1 자리가 바뀌고 네번째 -1
//첫번째 반복은 두번째 요소와 그 이전 요소들 크기 비교 1, 10 --> -1
//두번째 세번째 반복 :  3번째 요소와 그 이전 요소들 (2번 1번)요소 크기 비교
// 16 1 ---> 1 16 10 --> 1
//17하고 그 이전 요소들(16, 1, 10) 검사

console.log('정렬 전  postlist : ', postList)
postList.sort((a,b)=>{
  console.log('sort 안의 함수, a:',a,'b:',b)
  //a 뒤요소 b> 앞요소 --> 뒤쪽요소.page는 큰 값들이 들어있다 요소.page 오름차순 정렬
  // if(a.page > b.page) return 1;
  // if(a.page < b.page) return -1;
  // return 0;

  return a.page - b.page;


})
console.log('정렬 후  postlist : ', postList)
console.log([1, 6, 8, 2].sort())


let nameList = [
  'apple',
  'abcdefff',
  'a',
  'afeghgwetggwe',

]

nameList.sort((a,b)=>{return a.length - b.length})
console.log(nameList);

postList = [
{createdAt: '2023-04-01'},
{createdAt: '2023-03-01'},
{createdAt: '2023-07-01'},
{createdAt: '2023-04-15'},
]

postList.sort((a,b)=>{
 return new Date(a.createdAt) - new Date(b.createdAt)
})

console.log(postList)

console.log(new Date('2023-04-01') - new Date('2023-05-01'))
