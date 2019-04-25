import React from 'react';
import logo from './logo.svg';
import './App.css';

import Game from './Game.js';
import Score from './Score.js';
/*author luis manon*/
class App extends React.Component{
  //lets declare a state variable to work with the website state
  constructor(props){
    super(props);
    this.state = {
     correctAnswer: 0,
     numQuestion: 0
    };
  }

  //lets handle user input for the game
  handleAnswer(answersCorrect){
    if(answersCorrect){
      this.setState(currState => ({
        correctAnswer: currState.correctAnswer + 1
      }));
    }
    this.setState(currState => ({
      numQuestion: currState.numQuestion + 1
    }));
  }


  render(){
    return(
     <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
         <Game handleAnswer={this.handleAnswer.bind(this)} />
         <Score numCorrect={this.state.correctAnswer} numQuestions={this.state.numQuestion} />
        </div>
      </header>
    </div>
      )
  }
}



export default App;
