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