
const TypescriptPage = ()=>{

  // //만일 특정변수에 들어갈 수 있는 타입이 명시적으로 선언되어있지 않으면 최초로 대입된 값을 기반으로 타입을 추론한다
  // let a= "안성현"; //a라는 변수에는 string타입만 들어갈 수 있어!
  // a = 10; //a에는 number타입 안됨

  let b:string;
  b ='안성현';
  // b = null;   //null 타입이있다
  // b = undefined; //undefined 타입이 잇다
  // b = 10;

  // let c:number = 10;
  // c='안녕';

  //선언시 대입되는 값이 없다면 any타입으로 추론하고, any는 어떤 타입이든 상관없다.
  let d;
  d = '안성현';
  d = 10;

  let e = undefined; //최초로 null이나 undefined를 대입해도 any타입으로 추론한다 
  e = '김길동'

  // 두가지 이상의 타입이 대입될 수 있는 변수라면?
// | 연산자로 사용한다 (or쓸때 쓰는거 한개만 쓰면 된다)
let f:string|null ='안성현';
f = null;


//객체
let myObj:{ name:string, age:number|undefined, school?:string } = { //myObj는 객체 타입이야
  name:'안성현',
  age : 10
}

// myObj.name = 50;
// myObj.school = '역삼초등학교';
// myObj = 10;
myObj={
  name:'대모험',
  age:50,
  school:'역삼초등학교'
}

//배열
//배열속의 요소까지 고려해야한다
//요소의 타입[]
// number[] | string[] --> number 타입 혹은 string요소 배열 타입만 대입가능
// (number[] | string)[] --> number 타입 혹은 string요소 배열 타입만 대입가능
let ar:(number|string)[] = [10,20,30]; //소괄호로 감싸줘서 생각해야해

ar = ['안녕', 10, 20]

let ar2:[string, boolean]
ar2=['안녕', true]
ar2[0].toUpperCase(); //타입을 알려줬기 때문에 자동완성을 쓸수 있다.

  return(
    <h2>타입스크립트!!</h2>

  )
}



export default TypescriptPage;
