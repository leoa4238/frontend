//함수에서 사용
//타입추론이 불가능하다

import { type } from "os";

let add:(a:number, b?:number) =>number;

add = (a:number, b?:number):number =>{
  if(b === undefined){b = 0}
  return a+b;
}

add(10,20);
add(100)
// add('안녕', 100);
// add(100);

//함수 사용 결과가 값이 아닌 경우는 무슨 타입일까?? -->void 타입

function f1(a:number|string):void{
  console.log('안녕!');
}

add = function(num1:number):number{
    if(num1 > 10){
      return 10;
    }
    if(num1 > 5){
      return 5;
    }
    return 0 ;
}

//미리 타입 선언하기
interface MyStudentType{ //interface라는 것은 한마디로 틀을 만들고 있다이다
  name:string;
  age:number;
  isStudent:boolean;
  address?:string;
}

let s1:MyStudentType;

s1 = {
  name:'안성현',
  age:10,
  isStudent:true
}

// type 키워드 이용하기
//기존 타입을 내가 부르고 싶은대로 부르고 싶을 때(별칭을 만들고 싶을때)

type MyType = string;

let var1:MyType;
var1 = '10';

type MyStudentType2 = {
  name:string;
  age:number;
  isStudent:boolean;
  address?: string;
}

let var2:MyStudentType2;
var2 = {
  name:'안녕',
  age:10,
  isStudent:true
}

export{}

