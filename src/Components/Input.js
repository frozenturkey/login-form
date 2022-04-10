import React, {Component} from 'react';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {trangThai: 1}
    }

    render() {
        return (
            <div>
                <div className="btn-box">
                <div id="btn"/>
                <button type="button" className="toggle-btn" onClick={()=> this.loginSwitch()}>Log In</button>
                <button type="button" className="toggle-btn" onClick={()=> this.registerSwitch()}>Register</button>
                <div/>
            </div>
                {this.checkRender()}
            </div>
        );
    }

    renderLogin = () => (
        <div id="Login" className="input-form">
            <input type="text" className="input-field" placeholder="User ID required"/>
            <input type="password" className="input-field" placeholder="Enter Password"/>
            <input type="checkbox" name="checkbox" className="checkbox"/>
            <label htmlFor="checkbox">Remember password</label>
            <button type="submit" className="submit-btn">Login</button>
        </div>
    )

    renderRegister = () => (
        <div id="Login" className="input-form">
            <input type="text" className="input-field" placeholder="User ID required"/>
            <input type="text" className="input-field" placeholder="Email ID required"/>
            <input type="password" className="input-field" placeholder="Enter Password"/>
            <input type="checkbox" name="checkbox" className="checkbox"/>
            <label htmlFor="checkbox">I agree with the Term and Conditions</label>
            <button type="submit" className="submit-btn">Login</button>
        </div>
    )
    checkRender = () =>{
        if (this.state.trangThai === 0){
            return this.renderLogin()
        }
        else {
            return this.renderRegister()
        }
    }
    loginSwitch = () => {
        this.setState({trangThai: 0})
}
    registerSwitch = () => {
        this.setState({trangThai : 1})
}
}
export default Input;