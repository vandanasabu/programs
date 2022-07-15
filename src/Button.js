import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Button() {
    const navigate = useNavigate();
    const navButt =()=>{
        navigate("/Reservation")
    }
  return (
    <div>
        <img src='roses.jpg' ></img>
        <button type='button' onClick={navButt}>welcome</button>
    </div>
  )
}
