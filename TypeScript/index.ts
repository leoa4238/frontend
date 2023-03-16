let 이름4: string = 'kim'; //이 변수엔 string(문자) type만 들어올 수 있습니다
let 이름2: string[] = ['kim', 'ahn']; //array자료인데 그 안에는 무조건 string array만들어가야한다
let 이름3: { name?: string } = { name: 'kim' } //?를 쓴이유는 name이라는 오브젝트가 안들어와도 오류를 내지 말아주세요

//숫자와 문자열 둘다 들어가야할 경우에는? 다양한 타입이 들어가야할 상황일때
let 이름: string | number = 'kim'
let 이름6: string | number = '123'

//이렇게 일일이 다 정해서 가져가기 귀찮다면
type Name = string | number; //변수를 지정할때 대문자로 주로 사용한다

//함수의 경우에는 파라미터도 변수타입 지정가능하다(매개변수안에 지정)하고 return값은 그다음으로 지정해준다
function 함수(x: number): number {
  return x * 2
}

// 함수('123') //이경우에는 에러가 날 수 밖에 없다 타입이 문자열이기 때문에
함수(123) //이경우에는 에러가 나지 않는다. 숫자를 집어넣었기때문이다


// array에 쓸수 있는 tuple타입
type Member = [number, boolean]; //무조건 Member타입의 첫번째는 number, 두번째에는 boolean타입이 들어가야한다
let john:Member = [1, true] //이렇게 형식을 맞춰야하는 것이다

//object 자료에서는?
type Member2 = {
  name : string
}
let jo : Member2 = {name:'kim'}

//object에 타입지정해야할 속성이 너무 많으면?
type Member3 = {
  //글자로된 모든 object 속성의 타입은 string이라는 말
  [key :string] : string,
}
let joel : Member3 = {name:'kim', age: '123', job: 'frontend'}

//class문법도 타입지정가능하다
class User{
  name:string;
  constructor(name:string){
  this.name = name;
  }
}
//==================================================================================================

//변수에 타입지정가능 변수명:타입명
let 이름9 :string = 'kim';
이름9 = '123';

let 나이:number = 50;
나이 = 22


//boolean, null, undefined도 지정이 가능하다
let 결혼했니:boolean = true; //boolean 타입으로도 지정가능
let 결혼했네:null = null; //null타입으로도 지정이 가능하다
let 결혼했나 :undefined = undefined; //undefined로 지정가능

//array나 object 자료들도

let 회원들 :string[] = ['kim', 'park'] //문자만 담기 array만 사용가능
let 회원들2 :number[] = [1, 2] //숫자만 담긴 array만 사용가능
let 회원들3 :{member1 : 'kim', member2: 'park'} ={member1 : 'kim', member2: 'park'}