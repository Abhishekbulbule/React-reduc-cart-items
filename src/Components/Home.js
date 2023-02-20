import React from "react";
import '../index.css';
function Home(props){
    console.warn("home", props.data.length ,props.data);
    return (
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src=""></img>
                </div>
                <div className="text-wrapper item">
                    <span className="Name">I-Phone</span><br></br>
                    <span className="Price"> Price: $1000</span>
                </div>
                <div className="btn-wrapper item">
                    <button className="add" onClick={()=>
                         props.addtoCartHandler({price:1000, name:'Iphone 11'})
                    }>Add to Cart</button>
                    <button className="remove" onClick={()=>
                        props.removetoCartHandler()
                    }>Remove to cart</button>
                </div>
            </div>
    )
}

export default Home;