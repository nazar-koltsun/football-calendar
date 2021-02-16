import React from 'react';
import { connect } from 'react-redux';
import News from './News/News';
import { getIsNavOpen } from '../Redux/nav-selectors';
import { getNews, getIsFetching } from '../Redux/home-selectors';
import { closeNav } from '../Redux/nav-reducer';
import { getNewsData } from '../Redux/home-reducer';
import Loader from '../common/Loader';

let mapStateToProps = (state) => {
    return {
        isNavOpen: getIsNavOpen(state),
        news: getNews(state),
        isFetching: getIsFetching(state)
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
        return <News news={this.props.news} isFetching={this.props.isFetching} />
    }
}

export default connect(mapStateToProps, {
    closeNav,
    getNewsData
})(HomeContainer);
