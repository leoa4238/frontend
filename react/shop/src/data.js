
let data = [
  {
    id : 0,
    title : "White and Black",
    content : "Born in France",
    price : 120000
  },

  {
    id : 1,
    title : "Red Knit",
    content : "Born in Seoul",
    price : 110000
  },

  {
    id : 2,
    title : "Grey Yordan",
    content : "Born in the States",
    price : 130000
  }
] 

let Colmd=()=>{
  return( 
  <div className='col-md-4'>
  <img src='https://codingapple1.github.io/shop/shoes1.jpg' width='80%'/>
   <h4>제품명</h4>
   <p>상세내용</p>
   </div>
   )
}

let Colmd2 =()=>{
  return(
    <div className='col-md-4'>
          <img src='https://codingapple1.github.io/shop/shoes2.jpg' width='80%'/>
            <h4>제품명</h4>
            <p>상세내용</p>
            </div>
  )
}
let Colmd3 =()=>{
  return(
    <div className='col-md-4'>
          <img src='https://codingapple1.github.io/shop/shoes3.jpg' width='80%'/>
            <h4>제품명</h4>
            <p>상세내용</p>
          </div>
  )
}

export default data;