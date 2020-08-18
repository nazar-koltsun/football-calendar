import React from "react";
import { connect } from "react-redux";
import Matches from "./Matches";
import {getLastMatchesData} from "../Redux/matches-reducer";

let mapStateToProps = (state) => {
    return {
        premierLeagueEvents: state.matchesPage.premierLeagueEvents
    }
}

class MatchesContainer extends React.Component {
    componentDidMount() {
        this.props.getLastMatchesData();
    }
    
    render() {
        return <Matches events={this.props.premierLeagueEvents} />
    }
}

export default connect(mapStateToProps, {getLastMatchesData})(MatchesContainer);