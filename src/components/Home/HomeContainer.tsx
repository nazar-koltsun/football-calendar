import React from 'react';
import { connect } from 'react-redux';
import News from './News/News';
import { getIsNavOpen } from '../Redux/nav-selectors';
import { getNews, getIsFetching } from '../Redux/home-selectors';
import { closeNav } from '../Redux/nav-reducer';
import { getNewsData } from '../Redux/home-reducer';
import { AppStateType } from '../Redux/redux-store';

type MapStateToPropsType = {
    isNavOpen: boolean
    news: Array<any>
    isFetching: boolean
}
let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isNavOpen: getIsNavOpen(state),
        news: getNews(state),
        isFetching: getIsFetching(state)
    };
};

type MapDispatchPropsType = {
    closeNav: () => void
    getNewsData: () => void
}

type PropsType = MapStateToPropsType & MapDispatchPropsType;
class HomeContainer extends React.Component<PropsType> {
    refreshHomePage() {
        this.props.isNavOpen && this.props.closeNav();
        this.props.getNewsData();
    }

    componentDidMount() {
        this.refreshHomePage();
    }

    componentDidUpdate(prevProps: MapStateToPropsType, prevState: AppStateType) {
        if (this.state != prevState) {
            this.refreshHomePage();
        }
    }
    
    render() {
        return <News news={this.props.news} isFetching={this.props.isFetching} />
    }
}

export default connect<MapStateToPropsType, MapDispatchPropsType, null, AppStateType>(mapStateToProps, {
    closeNav,
    getNewsData
})(HomeContainer);
