import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <nav>
            <ul>
                <Link to='/'><li>Receips</li></Link>
              <Link to='/movielist'>  <li>Movies</li></Link>
            </ul>
        </nav>
    </div>
  )
}

export default Home