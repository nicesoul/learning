import React, {Component} from 'react';
import {ThemeContext} from './App';

export default class Counter extends Component {
    constructor(props){
        super(props)

        this.state = {
            count: props.choopa,        
        }
    }
    render(){
        return (
            <ThemeContext.Consumer>
                {style => (
                      <div>
                      <button style={style} onClick={()=> this.changeChoopa(-1)}>-</button>
                      <span>{this.state.count}</span>
                      <button onClick={()=> this.changeChoopa(1)}>+</button>
                  </div>
                )}
      
            </ThemeContext.Consumer>
            
        )
    }
    changeChoopa(amount){
        // this.setState({ count: this.state.count + amount})

        this.setState(prevState => {
            return {count: prevState.count + amount}
        })
    }
}