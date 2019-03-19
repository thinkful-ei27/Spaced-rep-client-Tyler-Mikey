import React from 'react';
import {connect} from 'react-redux';
import {setAnswer, evaluateAnswer, resetAnswerStatus} from '../actions/index'
import {API_BASE_URL} from '../config'
export class Card extends React.Component {

	evaluateAnswer = (word) => {
		if (word.toLowerCase() === this.props.word.englishWord.toLowerCase()){
			return true;
		}
		else{
			return false;
		}
	}

	handleChange = (e) => {
			this.props.dispatch(setAnswer(e.target.value))
	}

	handleClick = () => {
		this.evaluateAnswer(this.props.answer) === true ? this.props.dispatch(evaluateAnswer('true')) :
		this.props.dispatch(evaluateAnswer('false'))
		console.log(this.props)
	}

	handleNext = (germanWord, bool) => {
		console.log(this.props.correct)
		return fetch(`${API_BASE_URL}/learn`, {
            method: 'POST',
            body: JSON.stringify(germanWord, bool),
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${this.props.authToken}`
            }
				})
				.then(res => {
					if (!res.ok) {
							if (
									res.headers.has('content-type') &&
									res.headers
											.get('content-type')
											.startsWith('application/json')
							) {
									// It's a nice JSON error returned by us, so decode it
									return res.json().then(err => Promise.reject(err));
							}
							// It's a less informative error returned by express
							return Promise.reject({
									code: res.status,
									message: res.statusText
							});
					}
					return;
			})
	}
	componentDidMount(){
		this.props.dispatch(resetAnswerStatus())
	}

	render() {
		let feedback;
		if(this.props.correct === 'true'){
			feedback = 'You got it Right!'
		} else if(this.props.correct === 'false'){
			feedback = `Wrong! The answer is ${this.props.word.englishWord}`
		};
		let next;
		if(this.props.correct){
			next = <button onClick = {this.handleNext(this.props.word.germanWord, this.props.correct)}>Next Question</button>
		}
		return(
			<div className="card">
				<p>{feedback}</p>
				<h2>{this.props.word.germanWord}</h2>
				<div className="line" style={{backgroundColor: this.props.bgc}}></div>
				<p className='card-text'></p>
				<input type='text'
				placeholder='answer'
				onChange={this.handleChange}></input>
        <button onClick={this.handleClick}>Submit answer</button>
				{next}
			</div>
		)
	}
}


const mapStateToProps = state => ({
	answer: state.main.answer, 
	feedback: state.main.feedback,
	word: state.main.currentWord,
	correct: state.main.correct
});

export default connect(mapStateToProps)(Card);