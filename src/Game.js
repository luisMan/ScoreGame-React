import React, { Component } from 'react';
/*author luis manon*/
class Game extends Component{
	constructor(props){
		super(props);
       //valuesArray is just an array containinf the question generated randomly by the function makeNewQuestion
		const valuesArray =  this.makeNewQuestion();
        
        this.state = {
        	value1 :  valuesArray[0],
        	value2 :  valuesArray[1],
        	value3 :  valuesArray[2],
        	proposedAnswer :  valuesArray[3],
        };
	}


	//the function to make the new question 
	makeNewQuestion = () => {
		const value1 =  Math.floor(Math.random() * 100);
		const value2  =  Math.floor(Math.random() * 100);
		const value3 =  Math.floor(Math.random() * 100);
		const proposedAnswer =  Math.floor(Math.random() * 3) + (value1 + value2 + value3);
		return [value1,value2,value3,proposedAnswer];
	};
    

    //lets make another function update state to update the values 
    updateState =  newValuesArray => {
    	this.setState(currentState => ({
    		value1 : newValuesArray[0],
    		value2 : newValuesArray[1],
    		value3 : newValuesArray[2],
    		proposedAnswer :  newValuesArray[3],
    	}));
    };

    //lets create a function to handle user answer base on user input
    handleAnswer  = event => {
     const newValuesArray = this.makeNewQuestion();
     this.updateState(newValuesArray);
     const answerWasCorrect =  this.evaluateAnswer(event.target.name);
     this.props.handleAnswer(answerWasCorrect);
    };


    //the function to evaluate the user response to the mathematical question
    evaluateAnswer(userAnswer){
    	const {value1, value2, value3, proposedAnswer} = this.state;
    	const corrAnswer  =  value1 + value2 + value3;
    	return(
    		 (corrAnswer === proposedAnswer && userAnswer === 'true') ||
    		 (corrAnswer !== proposedAnswer && userAnswer === 'false')
    	);
    }

    //if the state of this object changes base on user input then the render function will update asynchronomously 
    //if the props of the component changes then also the render method will be call as well

	render(){
		const { value1, value2, value3, proposedAnswer } = this.state;
      return(
      	<div>
      	   <div className= 'equation'>
             <p className = 'text'> {`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p> 
      	   </div>
      	   <button onClick={this.handleAnswer} name="true">
      	   true
      	   </button>
      	   <button name="false" onClick={this.handleAnswer}>
      	   false
      	   </button>
      	</div>

      	);
	}
}


export default Game;