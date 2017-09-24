import React, { Component } from 'react';
import logo from './target.png';
import './App.css';
import FlipCard from 'react-flipcard';

const numbers = [15, 16, 17, 18, 19, 20, 'ø'];

class App extends Component {
  constructor() {
    super();

    this.state = {
      isFlipped: false,
      playingTeam: 0,
      teams: [
        {
          name: 'Team 1',
          players: ['Thomas', 'Marine'],
          score: {}
        },

        {
          name: 'Team 2',
          players: ['John', 'David'],
          score: {}
        }
      ]
    };

    this.nextTurn = this.nextTurn.bind(this);
    this.addScore = this.addScore.bind(this);
    this.changeName = this.changeName.bind(this);
  }

  nextTurn() {
    this.setState(prevState => ({
      playingTeam: Number(!prevState.playingTeam),
      isFlipped: !prevState.isFlipped
    }));
  }

  addScore(number) {
    this.setState(prevState => {
      const currentTeam = prevState.teams[prevState.playingTeam];
      currentTeam.score[number] = currentTeam.score[number]
        ? currentTeam.score[number] + 1
        : 1;
    });
  }

  changeName(evt) {
    const newName = evt.target.value;
    this.setState(prevState => {
      const currentTeam = prevState.teams[prevState.playingTeam];
      currentTeam.name = newName;
    });
  }

  render() {
    const { teams, playingTeam } = this.state;
    const cardContent = team =>
      <div className="card-content">
        <div className="player-row">
          <input value={team.name} onChange={this.changeName} />
        </div>
        <div>
          {numbers.map(number =>
            <div key={`${playingTeam}-${number}`} className="score-row">
              <button
                className="score-btn"
                disabled={team.score[number] >= 3}
                onClick={() => this.addScore(number)}
              >
                {number}
              </button>
              <div>
                {team.score[number]}
              </div>
            </div>
          )}
        </div>
        <button className="next-turn-btn" onClick={this.nextTurn}>
          Next Turn
        </button>
      </div>;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Darts Counter</h2>
        </div>
        <div className="App-body">
          <FlipCard disabled flipped={this.state.isFlipped}>
            {cardContent(teams[0])}
            {cardContent(teams[1])}
          </FlipCard>
        </div>
      </div>
    );
  }
}

export default App;
