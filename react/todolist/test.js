// console.log('안녕')
//구조화 된 데이터

//1.객체
const myBook = {
  title:'안성현의 대모험',
  pages: 205,
  price : 1000,
  color : 'blue'
};

// console.log(myBook);
// console.log(myBook.title);

// const title = myBook.title;
// const price = myBook.price;
// const pages = myBook.pages;

//객체속에 들어 있는 여러개의 값은 객체 속 key값과 동일한 이름의 변수에다가 한번에 대입할 수 있다
//그리고 변수는 중괄호로 묶어줘야한다
const {title, pages, price} = myBook;
console.log(title);
console.log(pages);
console.log(price);


show(myBook); //myBook



function show({title, pages, price}){ //myBook안에 객체를 불러내고 있다 파라미터에
console.log(`책제목은 ${title} 입니다`)
console.log(`페이지수는 ${pages} 입니다`)
console.log(`가격은 ${price}원 입니다`)
}

//배열을 비구조화하여 변수에 한번에 대입하기
//배열은 변수들을 []로 묶어서 한 번에 대입할 수 있으며,
//순서가 제한된다
const names = ['홍길동', '김철수', '박영희'];
//3개의 값을 변수에다가 담아주고 싶다
const [a,b,c] = names; //변수이름을 마음대로 할 수 있다
console.log(a);
console.log(b);
console.log(c);



const personInfo=['홍길동', 10, 30.8] //배열에다가 사람의 인적사항을 담아놓았다

let [v1, v2, v3] =  after10(personInfo); //personInfo는 a,b,c에 대입된다

//v1 ??
//v2 ??
//v3 ??

console.log(v1)
console.log(v2)
console.log(v3)


function after10([a,b,c]){
  let res =[a,b+10,c+20];
  return res;
}

console.log('===============논리 연산 맥락평가==================');
console.log('안녕' && 7);
console.log(1 && '반가워');

console.log('============day05 map() 함수를 통해서 반복되는 컴포넌트 한번에 넣어주기')

let ar = [1,3,5,7];
console.log(ar);
//기존에 있던 값을
res = ar.map((v)=>{return v + 10}) //map함수는 인자값에 익명함수를 넘겨줘야한다
console.log(res);

res = ar.map((v)=>{return `<li>${v}번재 항목입니다</li>`});
console.log(res);

ar=[
  {name:'안성현', age:10},
  {name:'김철수', age:20}
]

res = ar.map((v)=> `<li class = ${v.name}>${v.age}</li>`)
console.log(res);


//day07 얕은복사와 깊은 복사
//자주 사용되는 number, str, boolean,... 깊은 복사
//배열, 사용자가만든 객체들은 얕은 복사가 된다
//얕은 복사 : 동일한 객체 자체가 새롭게 만들어지는 것이 아니라
//같은 객체의 위치(주소)만 저장이 된다
console.log('======day07========')
ar1 = [10, 20, 30];
ar2=ar1;
ar2.push(50)
console.log(ar1);

//깊은복사: 동일한 모양의 객체를 만들어서 대입하는 방식
//방식1.
ar1 = [10, 20, 30] //1. 3칸짜리 배열의 위치를 알고 있다
ar2 = ar1.map(value=>value) //기존에 있던 배열의 값으로부터 새롭게 만들때 만든  map함수 소괄호 안쪽에 익명함수를 넘겨줘야한다 만들어진배열을 ar2에 저장해줘
ar2.push(50);
console.log(ar1);

//방식2
//연산자 사용결과는 해당 배열 속 들어있는 값들
//spread operator : ... 를 쓰면 깊은 복사를 할 수 있다 
//말그대로 펼지다이다

ar1 = [10, 20, 30] //각 배열을 펼쳐줘
// ...ar1 --> 10, 20, 30 각각 요소 세개를 의미한다
console.log(...ar1);
ar2=[...ar1, 50]; //알아서 똑같은 배열을 만들 수 있다 주소를 가져오는 것이 아니라 즉 ar2= [10, 20, 30, 50]을 나타낸것이다

console.log(ar1)
console.log(ar2)

//방식3 concat() 함수
//기존에 있던 배열에 다른 배열을 붙여서 새로운 배열을 반환한다
ar1 = [10,20,30] //a00이라는 함수를 생성한다
ar2 = ar1.concat(50); //오른쪽부터 ar1배열에서 concat이라는 함수를 썼다. 기존에 들어있는 배열에 매개변수에 들어가있는 값을 넣어준다

console.log(ar1);
console.log(ar2);


//배열이 아닌 일반적인 객체

//얕은 복사가 일어나고 있다. s1과 s2는 같은 주소를 가르키고 있다
s1 = {id :1, name: '김철수', grade:'A'};
s2 = s1;

s2.name = '박영희'
console.log(s1)

//map 함수 불가
s1 = {id :1, name: '김철수', grade:'A'};
console.log({...s1}); //객체 안에 중괄호를 써줘야한다
s2 = {...s1, age: 15, id:20} //요소가 추가되거나 존재하는 객체는 값을 바꿔 줄 수도 있다

s2.name= '박영희';
console.log(s1)
console.log(s2)

tmp = {id:1, age:20, id: 50};
console.log(tmp);

    //배열을 깊은 복사하여 삭제
    //filter 함수
    // ar = ['안성현', '김철수', '홍길동']
    // //ar2인데, ['김철수', '홍길동']
    // ar2 = [];
    // for(let a of ar1){
    //   if(a !== '안성현'){
    //     ar2.push(a)
    //   }
    // }

    // console.log(ar1);
    // console.log(ar2);

    //배열 속 특정 조건에 부합한 요소가 들어있는 새로운 배열을 반환하는 함수
  //  filter()
  ar1 = ['안성현', '홍길동', '김철수'];
  ar2 = ar1.filter(value=>{return value !== '안성현'}); //return이 트루가 되는 경우에 요소를 추가해줍니다
  
  console.log(ar1);
  console.log(ar2);