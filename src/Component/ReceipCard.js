import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ReceipCard = ({el}) => {
    // console.log(el.uri.slice(51))
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={el.image} />
      <Card.Body>
        <Card.Title>{el.label}</Card.Title>
        <Card.Text>
         {el.dishType[0]}
        </Card.Text>
        <Link to={`/${el.uri.slice(51)}`}>
        <Button variant="primary">see Details</Button>
        </Link>
      </Card.Body>
    </Card>
  )
}

export default ReceipCard