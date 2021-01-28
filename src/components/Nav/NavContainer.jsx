import { connect } from "react-redux";
import Nav from "./Nav";
import { openNav, closeNav } from "../Redux/nav-reducer";
import { getIsNavOpen } from "../Redux/nav-selectors";

let mapStateToProps = (state) => {
    return {
        isNavOpen: getIsNavOpen(state),
    };
};

export default connect(mapStateToProps, {openNav, closeNav})(Nav);
