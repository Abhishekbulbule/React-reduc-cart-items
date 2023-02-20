import Home from "../Components/Home";
import {connect} from 'react-redux';
import { addtoCart, removetoCart } from "../Services/Actions/Action";

const mapstateToProps = state=>({
    data:state.cardItems
})
const mapDispatchToProps = dispatch=>({
    addtoCartHandler:data=>dispatch(addtoCart(data)),
    removetoCartHandler:data=>dispatch(removetoCart(data))
})


export default connect(mapstateToProps,mapDispatchToProps)(Home);