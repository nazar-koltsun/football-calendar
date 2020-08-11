import React from "react";
import { connect } from "react-redux";
import Matches from "./Matches";
import {setPremierLeagueEvents} from "../Redux/matches-reducer";
import * as axios from "axios";

let mapStateToProps = (state) => {
    return {
        premierLeagueEvents: state.matchesPage.premierLeagueEvents
    }
}

let headers = {
    "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
	"x-rapidapi-key": "31e92faf3bmsh3de0393b737b483p10774ejsnec45c47a093a",
	"useQueryString": true
}

class MatchesContainer extends React.Component {
    componentDidMount() {
        axios.get("https://api-football-v1.p.rapidapi.com/v2/fixtures/league/524/last/10", {headers: headers}
        
        ).then((response) => {
            console.log(response.data.api);
            this.props.setPremierLeagueEvents(response.data.api.fixtures);
            console.log(this.props);
        });
    }
    
    render() {
        return <Matches events={this.props.premierLeagueEvents} />
    }
}

export default connect(mapStateToProps, {setPremierLeagueEvents})(MatchesContainer);