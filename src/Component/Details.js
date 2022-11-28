import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { getonereceipe } from '../js/actions/receipsActions';
import { useSelector } from 'react-redux';
import { Button, Card, Spinner } from 'react-bootstrap';

const Details = () => {
    const {idreceip}=useParams()
    const dispatch=useDispatch()
    
    useEffect(() => {
     dispatch(getonereceipe(idreceip))
    }, [idreceip])
    const el=useSelector(state=>state.receipesReducer.rDetails)
    const loading=useSelector(state=>state.receipesReducer.loading)
 if (loading) {
    return  <Spinner animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
  </Spinner>
 }
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={el.image} />
    <Card.Body>
      <Card.Title>{el.label}</Card.Title>
      <Card.Text>
       {el.dishType[0]}
      </Card.Text>
      <Link to={`/`}>
      <Button variant="primary">go home</Button>
      </Link>
    </Card.Body>
  </Card>
  )
}

export default Details