import React, {PropTypes} from 'react';
import { Link } from 'react-router';

export const AlbumsPhoto = (props) => {
  return (
    <div >
      <Link to={`/album/${props.id}`}>
        <div className='imgWrapper'>
          <img className='albumsImage'
            src={`https://graph.facebook.com/${props.cover}/picture?access_token=${props.token}`} />
        </div>
      </Link>
    </div>
  );
}

AlbumsPhoto.propTypes = {
  token: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired
};
export default AlbumsPhoto
