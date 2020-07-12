import React from "react";
import { connect } from "react-redux";
import Nav from "./Nav";

let mapStateToProps = (state) => {
    return {
        navigation: state.navigation
    };
};

export default connect(mapStateToProps, {})(Nav);
