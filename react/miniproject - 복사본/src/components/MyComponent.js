import React from 'react'
import propTypes from 'prop-types'

const MyComponent=({name,favoriteNumber,children})=>{

  return (
    <div>안녕하세요! 제 이름은 {name}입니다<br/>
    children 값은 {children}<br/>
    제가 제일 좋아하는 번호는 {favoriteNumber} 입니다
    </div>
  )
}
MyComponent.defaultProps={
  name: '기본이름'
};


MyComponent.propTypes = { //string 형태만 이름에 출력되게끔 만들어 주었다
  name:propTypes.string,  //props가 propTypes에서 지정한 형태와 일치해야하게끔 만들어줬다
  favoriteNumber:propTypes.number.isRequired,
}


export default MyComponent