import React from 'react';
import { connect } from 'react-redux';
import Matches from './Matches';
import Loader from '../common/Loader';
import {
    getPremierLeagueEvents,
    getFilteredEventsCount,
    getIsFetching,
} from '../Redux/matches-selectors';
import {
    getMatchesData,
    setFilteredEventsCount,
} from '../Redux/matches-reducer';

let mapStateToProps = (state) => {
    return {
        premierLeagueEvents: getPremierLeagueEvents(state),
        filteredEventsCount: getFilteredEventsCount(state),
        isFetching: getIsFetching(state),
    };
};

class MatchesContainer extends React.Component {
    componentDidMount() {
        this.props.getMatchesData(this.props.filteredEventsCount);
    }

    componentDidUpdate(prevProps) {
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

export default connect(mapStateToProps, {
    getMatchesData,
    setFilteredEventsCount,
})(MatchesContainer);
