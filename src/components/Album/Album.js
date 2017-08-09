import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Col, Row, Grid } from 'react-bootstrap'
import * as fbActions from '../../actions/fbActions'
import DropzoneComponent from 'react-dropzone-component'
import Photos from './Photos'
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

class Album extends Component {
  state ={
    photos: []
  }

  componentDidMount() {
    this.getInfo()
  }

  getInfo(){
    window.FB.api(`/${this.props.id}/photos?
      access_token=${this.props.facebook.token}`, (response) => {
        console.log('response', response);
      this.setState({
        photos: response.data
      })
    });
  }

  render() {
    const token = this.props.token
    const photos =this.state.photos
    console.log('this.props.id', this.props.id);
    const componentConfig = {
      iconFiletypes: ['.jpg', '.png', '.gif'],
      showFiletypeIcon: true,
      postUrl: `https://graph.facebook.com/${this.props.id}/photos?access_token=${this.props.facebook.token}`
  };

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
                  photos.map( p => (
                    <div className='albumsPhoto' key={p.id}>
                      <Photos
                        token={token}
                        id={p.id}
                        />
                    </div>
                  ))
                }
             </div>

           </Col>

         </Row>
         <Col xs={6} lgOffset={3}>
           <Row>
             <DropzoneComponent config={componentConfig} />
           </Row>
         </Col>
       </Grid>
     </main>
   );
  }
}

const mapStateToProps = (state, props) => {
  console.log('props.params._id', props.params._id);
  return {
    id: props.params._id,
    token: state.facebook.token
    }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(fbActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Album)
