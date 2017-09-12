import React, { Component } from 'react';
import logo from './target.png';
import './App.css';

const buttons = [15, 16, 17, 18, 19, 20, 'ø'];

class App extends Component {
  constructor() {
    super();

    this.state = {
      playingTeam: 0,
      teams: [
        {
          players: ['Thomas', 'Marine'],
          score: {
            15: 3,
            16: 2
          }
        },

        {
          players: ['John', 'David'],

          score: {
            15: 3,
            16: 3,
            17: 0
          }
        }
      ]
    };

    this.nextTurn = this.nextTurn.bind(this);
    this.addScore = this.addScore.bind(this);
  }

  nextTurn() {
    this.setState((prevState) => ({
      playingTeam: Number(!prevState.playingTeam)
    }))
  }

  addScore(number) {
    this.setState((prevState) => {
      const currentTeam = prevState.teams[prevState.playingTeam];
      currentTeam.score[number] = currentTeam.score[number] ? currentTeam.score[number] + 1 : 1;
    })
  }

  render() {
    const { teams, playingTeam } = this.state;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Darts Counter</h2>
        </div>
        <p className="App-intro">
          <div className="player-row">
            {teams.map((team) =>
              <span className={teams[playingTeam] === team ? 'playing' : ''}>
                {team.players.join(' & ')}
              </span>
            )}
          </div>
          {buttons.map(button =>
            <div>
              <button onClick={() => this.addScore(button)}>
                {button}
              </button>
            </div>
          )}
        </p>
        <button onClick={this.nextTurn}>Next Turn</button>
      </div>
    );
  }
}

export default App;
