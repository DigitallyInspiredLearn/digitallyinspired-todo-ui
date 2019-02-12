// import { bindActionCreators, compose } from 'redux';
// import { withRouter } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { actions } from './duck';

//
//
// const mapStateToProps = state => ({ data: state.list.data });
//
// const mapDispatchToProps = dispatch => ({
//     actions: bindActionCreators({
//         fetchList: actions.fetchList,
//         updateTitleDashboard: actions.updateTitleDashboard,
//         deleteDashboard: actions.deleteDashboard,
//         deleteTask: actions.deleteTask,
//         addTask: actions.addTask,
//         updateCheckbox: actions.updateCheckbox,
//         updateTaskName: actions.updateTaskName,
//         onBlurs: actions.onBlurs,
//     }, dispatch),
// });
//
// export default compose(
//     withRouter,
//     connect(
//         mapStateToProps,
//         mapDispatchToProps,
//     ),
// )(OneList);
