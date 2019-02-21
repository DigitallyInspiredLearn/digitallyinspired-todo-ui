import React, { Component } from 'react';
// import Tabs, { Pane } from './Tabs';
import './css/style.css';
import './css/styleForComp.css';
import MediaQuery from 'react-responsive';
import down from '../../../image/caret-down.svg';
import up from '../../../image/caret-arrow-up.svg';
import FollowUser from './followUser/FollowUserContainer';

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
        const { visible } = this.props;
        const {
            tab1, tab2, tab3, tab4,
        } = this.state;

        return (
            <div style={{ display: visible ? 'flex' : 'none' }}>
                <div id="fon" style={{ backgroundColor: 'whitesmoke', opacity: 0.98, zIndex: 1000 }} />
                <div id="settingsWindow">
                    <MediaQuery maxWidth={649}>
                        <nav id="tabContainer">
                            <div>
                                <div className="tab">
                                    <h2>Profile</h2>
                                    <img
                                        src={tab1}
                                        className="up-down"
                                        onClick={() => this.setState({ tab1: tab1 === down ? up : down })}
                                    />
                                </div>
                                <div className="content" style={{ display: tab1 === up ? 'flex' : 'none' }}>
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
                                        onClick={() => this.setState({ tab2: tab2 === down ? up : down })}
                                    />
                                </div>
                                <div className="content" style={{ display: tab2 === up ? 'flex' : 'none' }}>
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
                                        onClick={() => this.setState({ tab3: tab3 === down ? up : down })}
                                    />
                                </div>
                                <div className="content" style={{ display: tab3 === up ? 'flex' : 'none' }}>
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
                                        onClick={() => this.setState({ tab4: tab4 === down ? up : down })}
                                    />
                                </div>
                                <div className="content" style={{ display: tab4 === up ? 'flex' : 'none' }}>
                                    <div>Followers</div>
                                    <div>Usentame</div>
                                    <div>Usentame</div>
                                    <div>Usentame</div>
                                    <div>Usentame</div>
                                </div>
                            </div>
                        </nav>
                    </MediaQuery>
                    <MediaQuery minWidth={650}>
                        <div id="settingsWindowForComp">
                            <nav id="tabContainerComp">
                                <label>
                                    <input
                                        type="radio"
                                        // onClick={() => this.setState({ checked1: !checked1 })}
                                        // checked={checked1}
                                    />Profile
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        // onClick={() => this.setState({ tab2: tab2 === down ? up : down })}
                                    />Theme
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        // onClick={() => this.setState({ tab3: tab3 === down ? up : down })}
                                    />Subscribes
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        // onClick={() => this.setState({ tab4: tab4 === down ? up : down })}
                                    />Followers
                                </label>
                            </nav>
                            <main>
                                <FollowUser/>
                            </main>
                        </div>
                    </MediaQuery>
                </div>
            </div>

        );
    }
}

export default Settings;


{ /* <div> */ }
{ /* <Tabs selected={0}> */ }
{ /* <Pane label="Tab 1"> */ }
{ /* <div>This is my tab 1 contents!</div> */ }
{ /* </Pane> */ }
{ /* <Pane label="Tab 2"> */ }
{ /* <div>This is my tab 2 contents!</div> */ }
{ /* </Pane> */ }
{ /* <Pane label="Tab 3"> */ }
{ /* <div>This is my tab 3 contents!</div> */ }
{ /* </Pane> */ }
{ /* </Tabs> */ }
{ /* </div> */ }
