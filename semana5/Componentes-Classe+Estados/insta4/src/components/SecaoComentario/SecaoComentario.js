import React, {Component} from 'react'
import './SecaoComentario.css'


export class SecaoComentario extends Component {
	state = {
		valorInputComentario: ''
	}

	onChangeComentario = (event) => {
		console.log(event.target.value)
	this.setState({valorInputComentario: event.target.value})
	}

	render() {
		return <div className={'comment-container'}>
			<input
				className={'input-comentario'}
				value={'Comentário'}
				value={this.state.valorInputComentario}
				onChange={this.onChangeComentario}
			/>
			<button onClick={this.props.aoEnviar}>Enviar</button>
		</div>
	}
}
