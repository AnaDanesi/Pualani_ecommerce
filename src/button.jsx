import React,{Component} from "react";
class Button extends Component {
    render () {
        return <button id="boton">{this.props.label}</button>
    }
}
export default Button;