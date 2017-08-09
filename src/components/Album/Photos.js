import React, {PropTypes} from 'react';
//import { Link } from 'react-router';

export const Photos = (props) => {
  return (
    <div className='imgWrapper'>
      {/* <Link to={`/album/${props.id}`}> */}
        <img className='albumsImage'
          src={`https://graph.facebook.com/${props.id}/picture?access_token=${props.token}`} />
      {/* </Link> */}
    </div>
  );
}

Photos.propTypes = {
  token: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};
export default Photos
