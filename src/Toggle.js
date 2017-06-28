/**
 * Created by mephisto on 6/27/17.
 */
import React, {Component} from 'react';

class Toggle extends Component{
    constructor(props){
        super(props);
        this.state = {
            toggleOn : true
        };
        this.handleClick = this.handleClick.bind(this)

    }

    handleClick(){
        this.setState({
            toggleOn: !this.state.toggleOn
        })
    }

    render(){
        if(this.state.toggleOn){
            var isToggleOn = 'On'
        }else{
            var isToggleOn = 'Off'
        }

        return(
            <button onClick={this.handleClick}>
                {isToggleOn}
            </button>
        )
    }
}

export default Toggle;