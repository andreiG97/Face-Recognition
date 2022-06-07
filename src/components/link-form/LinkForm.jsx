import React from 'react';
import './LinkForm.css'

export default function LinkForm(props) {
  const { onChangeHandler, onSubmit } = props;
  return (
    <div>
        <p className='f3'>
            {'This eye will see you everywhere'}
        </p>
        <div className='center'>
            <div className='form center pa4 shadow-5 br3'>
                <input type="text" className='f4 pa2  center w-70' onChange={onChangeHandler}/>
                <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple' onClick={onSubmit}>See</button>
            </div>
        </div>
    </div>
  )
}
