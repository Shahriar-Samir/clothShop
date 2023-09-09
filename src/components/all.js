import React from "react";

import Header from "./header";
import Main from "./main";


export default function All(){
    const [count , amount] = React.useState(0)
 


    function add(){
          amount(count+1)
        }

        function remove(){
          count ? amount(count-1) : amount(0)
          }

    return(

        <>

          <Header count={count}/>
          <Main add={add}
          remove={remove} 
          />

        </>

    )
}