import React from "react"
import Item from "./item"






export default function Main(props){

    return(
    <main class="w-70 m-auto mt-5 d-flex flex-wrap justify-content-center">
       
       <Item
        add = {props.add}
        remove = {props.remove}
        count ={props.count}
        img="./pics/casual shirt.jpeg"
        name="Casual Shirt"
        des="Men casual shirts for all ages."
        price={10}
        />
        <Item
          add = {props.add}
        remove = {props.remove}
        count ={props.count}
        img="./pics/t-shirt.jpg"
        name="T-Shirt"
        des="Men T-shirts for all ages."
       price={5}
        />
    
        <Item
          add = {props.add}
        remove = {props.remove}
        count ={props.count}
        img="./pics/formal.jpg"
        name="Formal Shirt"
        des="Men formal shirts. For official event."
        price={15}
        />
    
        <Item
          add = {props.add}
        remove = {props.remove}
        count ={props.count}
        img="./pics/suit.jpg"
        name="Black Suit"
        des="Men black suits with formal shirt."
        price={40}
        />
        
    </main>
    )
}