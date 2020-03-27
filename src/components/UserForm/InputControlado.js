import React, { Component } from 'react'

export default class InputControlado extends Component {
    state = {
      text: '',
      color: '#E8E8E8'
    }
  
    actualizarTexto = (event) =>{
     const text = event.target.value
     let color = 'green'
  
     if(text.trim() === '')
      color = '#E8E8E8'
  
      if (text.trim() !== '' && text.length < 5) {
        color = 'red'
      }
  
      this.setState({text,color})
      // Propagando datos al padre
      this.props.onChange(this.props.name, text)
    }
    render () {
      const styles = {
        borderColor: `${this.state.color}`,
      }
      return (
        <div className={this.props.divClassName}>
          <input
            type={this.props.type}
            value={this.state.text}
            onChange={this.actualizarTexto}
            style={styles}
            placeholder={this.props.placeholder}
            className={this.props.className}
            required={typeof this.props.required === 'undefined' ? false : true}
            />
        </div>
      )
    }
  }
