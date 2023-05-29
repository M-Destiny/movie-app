import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer text-center mt-5'>
      <p>© 2023 Created By <Link to={"https://github.com/M-Destiny"} target='_blank'>Mehul</Link></p>

    </div>
  )
}

export default Footer