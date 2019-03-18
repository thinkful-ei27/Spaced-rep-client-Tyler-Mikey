import React from 'react';
import {connect} from 'react-redux';


export  default class Card extends React.Component {
	render() {
		return(
			<div className="card">
				<h2>{this.props.title}</h2>
				<div className="line" style={{backgroundColor: this.props.bgc}}></div>
				<p className='card-text'>{this.props.content}</p>
        <input type='text'placeholder='user answer'></input>
        <button>Submit answer</button>
			</div>
		)
	}
}


