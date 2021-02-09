import React from 'react';
import { connect } from 'react-redux';
import News from './News/News';
import { getIsNavOpen } from '../Redux/nav-selectors';
import { closeNav } from '../Redux/nav-reducer';

let mapStateToProps = (state) => {
    return {
        isNavOpen: getIsNavOpen(state),
    };
};

class HomeContainer extends React.Component {
    componentDidMount() {
        this.props.isNavOpen && this.props.closeNav();
    }

    render() {
        return (
            <News />
        );
    }
}

export default connect(mapStateToProps, {
    closeNav,
})(HomeContainer);
