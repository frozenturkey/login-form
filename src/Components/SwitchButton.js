import React, {Component} from 'react';
import Input from "./Input";
class SwitchButton extends Component {
    render() {
        return (
            <div>
                <div className="btn-box">
                    <div id="btn"/>
                    <button type="button" className="toggle-btn" onClick={()=> this.loginSwitch()}>Log In</button>
                    <button type="button" className="toggle-btn" onClick={()=> this.registerSwitch()}>Register</button>
                    <div/>
                </div>
            </div>
        );
    }
}

export default SwitchButton;