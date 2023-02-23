import React from 'react'

function MapPage() {
 let ar=['안성현','김철수','홍길동']
 
 let components = ar.map((value)=><li>{value}</li>)

  return (
    <ul>
      {components}
    </ul>
  )
}

export default MapPage