import React from 'react'
import { Button, Card } from 'react-bootstrap';


const MovieCard = ({el}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${el.poster_path}`} />
      <Card.Body>
        <Card.Title>
            {el.title}
        </Card.Title>
        <Card.Text>
        Release date : {el.release_date}
        </Card.Text>
       
        <Button variant="primary">see Details</Button>
       
      </Card.Body>
    </Card>
  )
}

export default MovieCard