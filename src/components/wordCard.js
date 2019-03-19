import React from 'react';
import {connect} from 'react-redux';
import {setAnswer} from '../actions/index'

export class Card extends React.Component {
	handleChange = (e) => {
		console.log(this.props)
			this.props.dispatch(setAnswer(e.target.value))
	}

	handleClick = () => {
		this.props.dispatch(setAnswer('Correct'));
	}
	
	render() {
		return(
			<div className="card">
				<p>{this.props.answer}</p>
				<h2>{this.props.word}</h2>
				<div className="line" style={{backgroundColor: this.props.bgc}}></div>
				<p className='card-text'></p>
				<input type='text'
				placeholder='user answer'
				onChange={this.handleChange}></input>
        <button onClick={this.handleClick}>Submit answer</button>
			</div>
		)
	}
}


const mapStateToProps = state => ({
	answer: state.main.answer, 
	feedback: state.main.feedback,
	word: state.main.currentWord
});

export default connect(mapStateToProps)(Card);