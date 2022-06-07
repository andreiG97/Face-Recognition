import React from 'react';

function FaceRecognition(props) {
  return (
    <div className='center ma'>
        <div className='absolute mt2'>
            <img src={props.imageUrl} alt="" width="400px" height='auto' />
        </div>
    </div>
  )
}

export default FaceRecognition;
