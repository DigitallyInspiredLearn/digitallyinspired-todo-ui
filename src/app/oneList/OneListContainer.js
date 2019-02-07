// import {bindActionCreators, compose} from "redux";
// import {actions} from "./duck";
// import {withRouter} from "react-router-dom";
// import {connect} from "react-redux";
// import {OneList} from "./OneList";
//
//
// const mapStateToProps = (state) => ({data: state.list.data});
//
// const mapDispatchToProps = (dispatch) => ({
//     actions: bindActionCreators({
//         fetchList: actions.fetchList,
//
//     }, dispatch)
// });
//
// export default compose(
//     withRouter,
//     connect(
//         mapStateToProps,
//         mapDispatchToProps
//     )
// )(OneList)