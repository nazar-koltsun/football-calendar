import React from 'react';
import { connect } from 'react-redux';
import News from './News/News';
import { getIsNavOpen } from '../Redux/nav-selectors';
import { getNews } from '../Redux/home-selectors';
import { closeNav } from '../Redux/nav-reducer';
import { getNewsData } from '../Redux/home-reducer';

let mapStateToProps = (state) => {
    return {
        isNavOpen: getIsNavOpen(state),
        news: getNews(state),
    };
};

class HomeContainer extends React.Component {
    refreshHomePage() {
        this.props.isNavOpen && this.props.closeNav();
        this.props.getNewsData();
    }

    componentDidMount() {
        this.refreshHomePage();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state != prevState) {
            this.refreshHomePage();
        }
    }
    
    render() {
        return (
            <News news={this.props.news} />
        );
    }
}

export default connect(mapStateToProps, {
    closeNav,
    getNewsData
})(HomeContainer);
