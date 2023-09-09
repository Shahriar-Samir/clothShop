import React from "react"



export default function Header(prop){
    
    const [nav, state] = React.useState("")

    function show_nav(){
        state("show_nav")
    }
    function remove_nav(){
        state("remove_nav")
    }


    return(
        <>
        <nav className={"bg-dark position-fixed "+nav}>

        <i class="fa-solid fa-xmark position-absolute top-0 end-0 x_mark" onClick={remove_nav}></i>

        <ul className="list-unstyled p-0 fs-6 m-auto mt-4">

            <li>
                <a href="#">SHOP</a>
                <i class="fa-solid fa-shop"></i>
                </li>


            <li><a href="#">Clothing</a><i class="fa-solid fa-shirt"></i></li>
            <li><a href="#">Shoes</a><i class="fa-solid fa-shoe-prints"></i></li>
            <li><a href="#">Accessories</a><i class="fa-solid fa-headphones"></i></li>
            <li><a href="#">Sportswear</a><i class="fa-regular fa-futbol"></i></li>
            <li><a href="#">Brand</a><i class="fa-solid fa-copyright"></i></li>


        </ul>
        </nav>


        <header className="d-flex align-items-center justify-content-around bg-dark top-0 w-100">

         <i class="fa-solid fa-bars" onClick={show_nav}></i> 

           <h1>Cloth Shop <i class="fa-solid fa-shirt"></i></h1>
           
    
            
           
            <i class="fa-solid fa-cart-shopping s_cart position-relative">  
            
            <p className="cart_count m-0 position-absolute">{prop.count}</p>
            
            </i>
          
      
     
        
        </header>
        </>
    )
}