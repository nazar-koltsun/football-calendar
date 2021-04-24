import React from 'react';
import { connect } from 'react-redux';
import Matches from './Matches';
import Loader from '../common/Loader/Loader';
import {
    getPremierLeagueEvents,
    getFilteredEventsCount,
    getIsFetching,
} from '../Redux/matches-selectors';
import {
    getMatchesData,
    setFilteredEventsCount,
} from '../Redux/matches-reducer';
import { AppStateType } from '../Redux/redux-store';

import { getIsNavOpen } from '../Redux/nav-selectors';
import { closeNav } from '../Redux/nav-reducer';

type MapStateToPropsType = {
    isNavOpen: boolean
    premierLeagueEvents: Array<any>
    filteredEventsCount: string
    isFetching: boolean
}

type MapDispatchPropsType = {
    closeNav: () => void
    getMatchesData: (filteredEventsCount: string) => void
    setFilteredEventsCount: (eventsCount: number) => void
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isNavOpen: getIsNavOpen(state),
        premierLeagueEvents: getPremierLeagueEvents(state),
        filteredEventsCount: getFilteredEventsCount(state),
        isFetching: getIsFetching(state),
    };
};

type PropsType = MapStateToPropsType & MapDispatchPropsType;
class MatchesContainer extends React.Component<PropsType> {
    componentDidMount() {
        console.log(this.props);
        
        this.props.getMatchesData(this.props.filteredEventsCount);
        this.props.isNavOpen && this.props.closeNav();
    }

    componentDidUpdate(prevProps: any) {
        if (prevProps.filteredEventsCount !== this.props.filteredEventsCount) {
            this.props.getMatchesData(this.props.filteredEventsCount);
        }
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Loader /> : null}
                <Matches
                    events={this.props.premierLeagueEvents}
                    filteredEventsCount={this.props.filteredEventsCount}
                    setFilteredEventsCount={this.props.setFilteredEventsCount}
                />
            </>
        );
    }
}

export default
    connect<MapStateToPropsType, MapDispatchPropsType, null, AppStateType>(mapStateToProps, {closeNav, getMatchesData,setFilteredEventsCount})
(MatchesContainer);
