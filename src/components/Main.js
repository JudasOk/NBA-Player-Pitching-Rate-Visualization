import React from 'react';
import nba from 'nba';
import Profile from './Profile'
import DataViewContainer from './DataViewContainer'
import SearchBar from './SearchBar'

import { DEFAULT_PLAYER_INFO } from '../constants';

class Main extends React.Component {
    // state = {
    //     playerId: nba.findPlayer('Stephen Curry').playerId,
    //     playerInfo: {
    //         DEFAULT_PLAYER_INFO,
    //     },
    // }
    state = {
        // playerId: nba.findPlayer('Stephen Curry').playerId,
        playerInfo: DEFAULT_PLAYER_INFO,
    }
    handleSelectPlayer = (playerName) => {
        this.loadPlayerInfo(playerName);
    }

    loadPlayerInfo = (playerName) => {
        nba.stats.playerInfo({ PlayerID: nba.findPlayer(playerName).playerId }).then((info) => {
            const playerInfo = Object.assign(info.commonPlayerInfo[0], info.playerHeadlineStats[0]);
            this.setState({ playerInfo });
        });
    }
    componentDidMount() {
        this.loadPlayerInfo(this.state.playerInfo.fullName);
    }

    render() {
        return (
            <div className="main">
                <SearchBar handleSelectPlayer={this.handleSelectPlayer}/>
                <div className="player">
                    <Profile playerInfo={this.state.playerInfo} />
                    {/*<DataViewContainer playerId={this.state.playerId}/>*/}
                    <DataViewContainer playerId={this.state.playerInfo.playerId}/>
                </div>
            </div>

        );
    }
}
export default Main;