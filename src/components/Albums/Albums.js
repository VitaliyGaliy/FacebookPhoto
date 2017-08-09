import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Col, Row, Grid } from 'react-bootstrap'
import * as fbActions from '../../actions/fbActions'
import AlbumsPhoto from './AlbumsPhoto'
// import * as paginationActions from '../../actions/paginationActions'
//import classnames from 'classnames'

// const propTypes = {
//   currentPage: PropTypes.number,
//   todosPerPage: PropTypes.number,
//   pageNumbers: PropTypes.array,
//   activeButton: PropTypes.string,
//   getAdvtsInLS: PropTypes.func,
//   setPagination: PropTypes.func
// }

class Albums extends Component {
  state ={
    albums: []
  }

  componentDidMount() {
    this.getInfo()
  }

  getInfo(){
    window.FB.api(`/me/albums?fields=id,name,cover_photo,count,created_time,message,read_insights&
      access_token=${this.props.facebook.token}`, (response) => {
      this.setState({
        albums: response.data
      })
    });
  }

  render() {
    const albums = this.state.albums
    const token = this.props.token
    console.log('token', token);


    return (
     <main>
       <Grid fluid>
           <h1>
            Albums app.
           </h1>
       </Grid>
       <Grid>
         <Row>
           <Col xs={12}>
             <div id='status'>
                {
                  albums.map( a => (
                    <div className='albumsPhoto' key={a.id}>
                      <AlbumsPhoto
                        token={token}
                        cover={a.cover_photo.id}
                        id={a.id}
                        />
                    </div>
                  ))
                }
             </div>
           </Col>
         </Row>
       </Grid>
     </main>
   );
  }
}

const mapStateToProps = (state) => {
  return {
    facebook: state.facebook,
    token: state.facebook.token
    }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(fbActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Albums)
