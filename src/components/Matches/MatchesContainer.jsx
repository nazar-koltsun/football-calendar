import React from "react";
import { connect } from "react-redux";
import Matches from "./Matches";
import {getLastMatchesData, setFilteredEventsCount} from "../Redux/matches-reducer";

let mapStateToProps = (state) => {
    return {
        premierLeagueEvents: state.matchesPage.premierLeagueEvents,
        filteredEventsCount: state.matchesPage.filteredEventsCount,
        setFilteredEventsCount: state.matchesPage.setFilteredEventsCount
    }
}

class MatchesContainer extends React.Component {
    componentDidMount() {
        this.props.getLastMatchesData(this.state.filteredEventsCount);
    }
    
    render() {
        return <Matches 
                    events={this.props.premierLeagueEvents} 
                    filteredEventsCount={this.state.filteredEventsCount}
                    setFilteredEventsCount={this.props.setFilteredEventsCount} 
                />
    }
}

export default connect(mapStateToProps, {getLastMatchesData, setFilteredEventsCount})(MatchesContainer);