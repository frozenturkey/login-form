import React, {Component} from 'react';
import Facebook from './facebook.png'
import Google from  './Google.png'
import Twitter from './twitter.png'


class Social extends Component {
    render() {
        return (
            <div className="social-box">
                <ul>
                    <img src={Facebook} alt="facebook"/>
                    <img src={Twitter} alt="twitter"/>
                    <img src={Google} alt="google"/>
                </ul>
            </div>
        );
    }
}

export default Social;