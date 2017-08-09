import React, { Component, PropTypes } from 'react'
// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Col, Row, Grid } from 'react-bootstrap'
import { Link } from 'react-router';
// import * as adAction from '../../actions/adAction'
// import * as paginationActions from '../../actions/paginationActions'
//import classnames from 'classnames'

const propTypes = {
  currentPage: PropTypes.number,
  todosPerPage: PropTypes.number,
  pageNumbers: PropTypes.array,
  activeButton: PropTypes.string,
  getAdvtsInLS: PropTypes.func,
  setPagination: PropTypes.func
}

class Facebook extends Component {


  render() {


    return (
     <main>
       <Grid fluid>
           <h1>
             Welcome to Facebook albums app.
           </h1>
           <h3>
             Please authirize to have an access.
           </h3>
       </Grid>
       <Grid>
         <Row>
           <Col xs={12}>
             <div id='status'></div>
           <Link to='/Albums'>Albums</Link>
           </Col>
         </Row>
       </Grid>

     </main>
   );
  }
}

// const mapStateToProps = (state) => {
//   return {
//
//   }
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators({...adAction, ...paginationActions}, dispatch)
//   }
// }

Facebook.propTypes = propTypes

export default connect(null, null)(Facebook) //eslint-disable-line no-unused-vars
