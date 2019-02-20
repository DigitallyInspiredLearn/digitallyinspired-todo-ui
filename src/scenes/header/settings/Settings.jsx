import React, {Component} from 'react';
import './style.css';
import './styleForComp.css';
import down from '../../../image/caret-down.svg';
import up from '../../../image/caret-arrow-up.svg';
import MediaQuery from 'react-responsive';

class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab1: down,
            tab2: down,
            tab3: down,
            tab4: down,
        };
    }

    render() {
        const {visible} = this.props;
        const {
            tab1, tab2, tab3, tab4,
        } = this.state;
        return (
            <div style={{display: visible ? 'flex' : 'none'}}>
                <div id="fon" style={{backgroundColor: 'gainsboro', opacity: 0.98, zIndex: 1000}}/>
                <div id="settingsWindow">
                    <MediaQuery maxWidth={600}>
                        <nav id="tabContainer">
                            <div>

                                <div className="tab">
                                    <h2>Profile</h2>
                                    <img
                                        src={tab1}
                                        className="up-down"
                                        onClick={() => this.setState({tab1: tab1 === down ? up : down})}
                                    />
                                </div>
                                <div className="content" style={{display: tab1 === up ? 'flex' : 'none'}}>
                                    <div>Profile</div>
                                    <div>Usentame</div>
                                    <div>Usentame</div>
                                    <div>Usentame</div>
                                    <div>Usentame</div>
                                </div>
                            </div>
                            <div>
                                <div className="tab">
                                    <h2>Theme</h2>
                                    <img
                                        src={tab2}
                                        className="up-down"
                                        onClick={() => this.setState({tab2: tab2 === down ? up : down})}
                                    />
                                </div>
                                <div className="content" style={{display: tab2 === up ? 'flex' : 'none'}}>
                                    <div>Theme</div>
                                    <div>Usentame</div>
                                    <div>Usentame</div>
                                    <div>Usentame</div>
                                    <div>Usentame</div>
                                </div>
                            </div>
                            <div>
                                <div className="tab">
                                    <h2>Subscribes </h2>
                                    <img
                                        src={tab3}
                                        className="up-down"
                                        onClick={() => this.setState({tab3: tab3 === down ? up : down})}
                                    />
                                </div>
                                <div className="content" style={{display: tab3 === up ? 'flex' : 'none'}}>
                                    <div>Subscribes</div>
                                    <div>Usentame</div>
                                    <div>Usentame</div>
                                    <div>Usentame</div>
                                    <div>Usentame</div>
                                    <div>Usentame</div>
                                    <div>Usentame</div>
                                    <div>Usentame</div>
                                    <div>Usentame</div>
                                    <div>Usentame</div>
                                    <div>Usentame</div>
                                    <div>Usentame</div>
                                    <div>Usentame</div>
                                    <div>Usentame</div>
                                    <div>Usentame</div>
                                    <div>Usentame</div>
                                    <div>Usentame</div>
                                    <div>Usentame</div>
                                    <div>Usentame</div>
                                    <div>Usentame</div>
                                    <div>Usentame</div>
                                    <div>Usentame</div>
                                    <div>Usentame</div>
                                    <div>Usentame</div>
                                    <div>Usentame</div>
                                </div>
                            </div>
                            <div>
                                <div className="tab">
                                    <h2>Followers</h2>
                                    <img
                                        src={tab4}
                                        className="up-down"
                                        onClick={() => this.setState({tab4: tab4 === down ? up : down})}
                                    />
                                </div>
                                <div className="content" style={{display: tab4 === up ? 'flex' : 'none'}}>
                                    <div>Followers</div>
                                    <div>Usentame</div>
                                    <div>Usentame</div>
                                    <div>Usentame</div>
                                    <div>Usentame</div>
                                </div>
                            </div>
                        </nav>
                    </MediaQuery>
                    <MediaQuery minWidth={600}>
                        <div id="settingsWindowForComp">
                            <nav id="tabContainerComp">
                                <ul>
                                    <li>Profile</li>
                                    <li>Theme</li>
                                    <li>Subscribes</li>
                                    <li>Followers</li>
                                </ul>
                            </nav>
                            <main>
                                <div>Profile</div>
                                <div>Theme</div>
                                <div>Subscribes</div>
                                <div>Followers</div>
                            </main>
                        </div>

                    </MediaQuery>
                </div>
            </div>

        );
    }
}

export default Settings;
