import React from 'react'
import { useDispatch } from 'react-redux';
import { getallreceips } from './../js/actions/receipsActions';

const SearchReceip = () => {
    const dispatch=useDispatch()
  return (
    <div>
        <input type="text" onChange={(e)=>dispatch(getallreceips(e.target.value))}/>
    </div>
  )
}

export default SearchReceip