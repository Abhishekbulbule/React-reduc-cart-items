import Header from "../Components/Header";
import {connect} from 'react-redux';

const mapstateToProps = state =>({
    data:state.cardItems
})
const mapDispatchToProps = dispatch=>({
})


export default connect(mapstateToProps,mapDispatchToProps)(Header);