import React from "react"






export default function Item(props){
  let [count , amount] = React.useState(0)
  let [price , sum] = React.useState(props.price)

  function add(){
     price = props.price
     count++
     amount(count)
     props.add()
     sum(price*count)
  }

  function remove(){
    price = props.price
      if(count === 0){
        amount(0)

      }
      else{
        count--
        amount(count)
        props.remove()
        if(count===0){
          sum(props.price)
        }

        else{sum(price*count)}
      
      
      }
    }

    return(
      
    
  
     <div class="item">
      <img src={props.img}/>
      <div className="ps-3 pe-3 mt-2 pb-1 pb-xl-2">
      <h2>{props.name}</h2>
       <p>{props.des}</p>

       <div className="d-flex align-items-center justify-content-between">
       <h2 className="m-0">$ {price}</h2>
       <div className="d-flex align-items-center ">
       <i class="fa-solid fa-plus fs-6" onClick={add}></i>
       <p className="m-0 ms-2 me-2 fs-5">{count}</p>
       <i class="fa-solid fa-minus fs-6" onClick={remove}></i>
       </div>
       </div>
      </div>
     </div>
    )
}


