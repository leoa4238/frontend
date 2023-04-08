
interface Student{
  name:string;
  age:number;
  school:string;
  hobby?:string[];
}
//pick 타입, 요소|요소|요소|...>
// pick타입 기존타입에서 특정 요소만 갖고 있는 타입을 만들때 사용
type aaa =Pick<Student, 'age' | 'hobby'>;


//Omit<기존 타입,요소|요소|요소|... >
//기존 타입에서 특정 요소를 제외한 타입을 만들때
type bbb = Omit<Student, 'age'| 'hobby'>;


//Partial<기존타입>
//기존 타입의 key값들이 필수가 아닌 값으로 변경
type ccc = Partial<Student>;

//Required<기존 타입>
//모든 요소들이 필요로 하다
type ddd = Required<Student>;


//Record<타입, 기존타입>
type tmp = '철수'|'훈이';
type eee = Record<tmp,Student>
let st1:eee;
st1={
  철수:{
    name:'',
    age:10,
    school:'',
  },
  훈이:{
    name:'',
    age:10,
    school:'',
  }
}


export {}

