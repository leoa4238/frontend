let 이름4 = 'kim'; //이 변수엔 string(문자) type만 들어올 수 있습니다
let 이름2 = ['kim', 'ahn']; //array자료인데 그 안에는 무조건 string array만들어가야한다
let 이름3 = { name: 'kim' }; //?를 쓴이유는 name이라는 오브젝트가 안들어와도 오류를 내지 말아주세요
//숫자와 문자열 둘다 들어가야할 경우에는? 다양한 타입이 들어가야할 상황일때
let 이름 = 'kim';
let 이름6 = '123';
//함수의 경우에는 파라미터도 변수타입 지정가능하다(매개변수안에 지정)하고 return값은 그다음으로 지정해준다
function 함수(x) {
    return x * 2;
}
// 함수('123') //이경우에는 에러가 날 수 밖에 없다 타입이 문자열이기 때문에
함수(123); //이경우에는 에러가 나지 않는다. 숫자를 집어넣었기때문이다
let john = [1, true]; //이렇게 형식을 맞춰야하는 것이다
let jo = { name: 'kim' };
let joel = { name: 'kim', age: '123', job: 'frontend' };
//class문법도 타입지정가능하다
class User {
    constructor(name) {
        this.name = name;
    }
}
//==================================================================================================
//변수에 타입지정가능 변수명:타입명
let 이름9 = 'kim';
이름9 = '123';
let 나이 = 50;
나이 = 22;
//boolean, null, undefined도 지정이 가능하다
let 결혼했니 = true; //boolean 타입으로도 지정가능
let 결혼했네 = null; //null타입으로도 지정이 가능하다
let 결혼했나 = undefined; //undefined로 지정가능
