import { configureStore, createSlice } from '@reduxjs/toolkit' //셋팅 store.js 파일생성 &코드 복붙

//Redux를 쓰는 이유는 컴포넌트간 state 공유 편해짐
            //createSlice({})함수 안 중괄호를 이용하면 됩니다
let user = createSlice({ //useState와 비슷한 역할입니다 
  name: 'user',
  initialState: {name: 'kim', age: 20}, //그래서 일부러 문자하나만 필요해도 {}안에 담기도 합니다

  //Redux의 state 변경하는법
  //-state를 수정하는 함수를 만들어라 - 원할때 그 함수 실행해달라고 store.js로 요청
  //1.state를 수정해주는 함수를 만들어라
  reducers: {
    changeName(state){//파라미터 안에 state는 기존 state이다
      state.name = 'park'  //array/object의 경우 직접 수정해도 state 변경됩니다
    },
    increase(state,action){ //함수에 파라미터를 하면 더 간편하게 할 수 있다
      state.age = state.age + action.payload; //payload를 입력해야 함수의 파라미터 자리에 입력한 것을 쓸 수 있다
    },                                       //state 변경함수를 action이라고 합니다
  }
})

//2. 오른쪽 있는 자료를 변수로 쉽게 빼기 위한 문법
export let {changeName, increase} = user.actions //만든 함수를 밖으로 빼고싶을때 


let cart = createSlice({ //useState와 비슷한 역할입니다
  name: 'cart',
  initialState:
[
  { id: 0, name: 'White and Black', count: 2 },
  { id: 2, name: 'Grey Yordan', count: 1 },
 
],reducers: {
  addCount(state,action){
              //findIndex를 사용하여 한다 findIndex((파라미터)=>{return 조건식})
    let 번호 = state.findIndex((a)=>{return a.id === action.payload })//원하는 index를 찾을 수 있게 하는 것
    state[번호].count++
  },
  addItem(state,action){ //reducers에 addItem이라는 함수를 만들어주고, 
                        //state라는 객체 안에push함수를 써서  action이라는 파라미터에 payload를 해주면 된다
    state.push(action.payload) 
  } //만든 후에는 export를 꼭해준다

}
})
export let {addCount, addItem} = cart.actions //갖다 쓰고 싶으면 export를 하면 됩니다

//등록하는 것
export default configureStore({ //셋팅 store.js 파일생성 &코드 복붙
  reducer: {
    user: user.reducer,//(작명: 만든state.reducer)를 해주어야한다
    cart: cart.reducer
  }
}) 