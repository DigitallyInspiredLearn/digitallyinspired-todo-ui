import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as styled from './HeaderToolbar.styled';
import { InputLabel } from '../../../components/dropDown/DropDown.styled';
import Search from '../../../components/search/Search';
import { DropDownMaterial } from '../../../components/dropDown/DropDownMaterial';
import MultiSelect from '../../dashboard/multiSelect/MultiSelect';
import * as styledHeaderToolbar from "../../dashboard/headerToolbar/HeaderToolbar.styled";

class HeaderToolbar extends Component {
    constructor(props) {
        super(props);
        this.state = {

            visibleFilters: false,
        };
    }

    render() {
        return (
            <styled.Head style={{ width: '30%' }}>
                <styled.SearchContent
                    style={{ height: '25px', position: 'relative' }}
                    onClick={() => this.setState({ visibleFilters: !visibleFilters })}
                >
                    <Search
                        onChange={this.handleChange}
                        value={search}
                        style={{
                            width: '98%',
                        }}
                        placeholder="Search dashboard"
                    />
                    // <styled.inputDiv>
                    //     <styled.searchToDo
                    //         type="text"
                    //         placeholder="Search to-do"
                    //         onChange={e => actions.changeSearch({
                    //             idDashboard: match.params.id,
                    //             search: e.target.value,
                    //         })}
                    //     />
                    //     <Search style={{ paddingTop: '0px', fontSize: '40px', color: 'rgba(0, 0, 0, 0.54)' }} />
                    //     <styledHeaderToolbar.ToggleButtonGroup
                    //         style={{
                    //             backgroundColor: 'white',
                    //             boxShadow: '0 0  4px 0  rgba(0,0,0,0.2)',
                    //             borderBottom: '1px solid grey',
                    //             margin: '6px 0 4px 8px',
                    //             borderRadius: '4px',
                    //         }}
                    //         value={alignment}
                    //         onChange={this.handleFormat}
                    //     >
                    //         <styledHeaderToolbar.ToggleButton
                    //             style={{
                    //                 color: 'black',
                    //                 height: '52px',
                    //                 display: 'flex',
                    //                 alignSelf: 'center',
                    //                 borderRight: '1px solid lightgrey',
                    //             }}
                    //             onClick={() => actions.selectDoneAction({ done, idList: match.params.id })}
                    //             value="done"
                    //         >
                    {/*            done*/}
                    {/*        </styledHeaderToolbar.ToggleButton>*/}
                    {/*        <styledHeaderToolbar.ToggleButton*/}
                    {/*            style={{*/}
                    {/*                color: 'black',*/}
                    {/*                height: '52px',*/}
                    {/*                display: 'flex',*/}
                    {/*                alignSelf: 'center',*/}
                    {/*            }}*/}
                    {/*            onClick={() => actions.selectedNotDoneAction({*/}
                    {/*                notDone,*/}
                    {/*                idList: match.params.id,*/}
                    {/*            })}*/}
                    {/*            value="notDone"*/}
                    {/*        >*/}
                    {/*            not done*/}
                    {/*        </styledHeaderToolbar.ToggleButton>*/}
                    {/*    </styledHeaderToolbar.ToggleButtonGroup>*/}
                    {/*</styled.inputDiv>*/}
                </styled.SearchContent>
            </styled.Head>
        );
    }
}

HeaderToolbar.propTypes = {
    children: PropTypes.node.isRequired,
};

export default HeaderToolbar;