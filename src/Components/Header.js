



function Header(props){
    const n = props.data.length;
    n===0 ? console.log('empty'):
    console.log("header  ",props.data[0].cardData.price*n);
    return(
        <div className="Home" >
                <h1>Cart Items</h1>
            <span className="add-to-cart">
                cart <br></br>
                {n}
            </span>
        </div>
    );
}

export default Header;