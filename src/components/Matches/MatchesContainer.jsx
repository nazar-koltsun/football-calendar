import React from "react";
import { connect } from "react-redux";
import Matches from "./Matches";
import {setPremierLeagueEvents} from "../Redux/matches-reducer";
import { matchesApi } from "../../api/api";

let mapStateToProps = (state) => {
    return {
        premierLeagueEvents: state.matchesPage.premierLeagueEvents
    }
}

class MatchesContainer extends React.Component {
    componentDidMount() {
        matchesApi.getLastMatches().then((response) => {
            this.props.setPremierLeagueEvents(response.data.api.fixtures);
        });
    }
    
    render() {
        return <Matches events={this.props.premierLeagueEvents} />
    }
}

export default connect(mapStateToProps, {setPremierLeagueEvents})(MatchesContainer);