import React from 'react'

function MapPage() {
 let ar=['안성현','김철수','홍길동'] //배열이 있다

 let id = 0;
 
 let components = ar.map((value)=><li key={id++}>{value}</li>)//id를 넣어주고 id를 1씩 증가 시켜줘 id++

 console.log(components)
  return (
    <ul>
       {components} {/*<li>안성현</li>,<li>김철수</li>,<li>홍길동</li> */}
    </ul>
  )
}

export default MapPage