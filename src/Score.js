import React from 'react';
/*author luis manon*/
//this function is going to be made stateless function since we don't need any state to be bounded to other component
//this function will serve only to render 
const Score =  props => {
	return (
      <p className="text">
       Your Score:  {props.numCorrect}/{props.numQuestions}
      </p>
	);
};

export default Score;