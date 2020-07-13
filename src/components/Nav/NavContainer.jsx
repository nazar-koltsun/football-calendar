import { connect } from "react-redux";
import Nav from "./Nav";
import { openNav, closeNav } from "../Redux/nav-reducer";

let mapStateToProps = (state) => {
    return {
        navigation: state.navigation,
    };
};

export default connect(mapStateToProps, {openNav, closeNav})(Nav);
