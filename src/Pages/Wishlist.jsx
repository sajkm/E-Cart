import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row ,Card ,Col ,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { removeFromWishlist } from '../redux/slice/WishlistSlice'
import { addToCart } from '../redux/slice/cartSlice'



function Wishlist() {
  const wishlistArray = useSelector((state)=>state.wishlistReducer)
  const dispatch = useDispatch()
  const handleWishlistCart = (product)=>{
    dispatch(addToCart(product))
    dispatch(removeFromWishlist(product.id))
  }
  return (
    <div style={{marginTop:'100px'}}>
      <Row>
        {
          wishlistArray.length>0?
          wishlistArray.map((product,index)=>(
            <Col key={index} className='mb-5' sm={12} md={6} lg={4} xl={3}>
      <Card className='shadow rounded' style={{ width: '18rem', height:'29rem' }}>
      <Card.Img height={'200px'} variant="top" src={product.thumbnail} />
      <Card.Body>
        <Card.Title>{product?.title}</Card.Title>
        <Card.Text>
          <p>{product?.description.slice(0,60)}...</p>
          <h5>$ {product?.price}</h5>
        </Card.Text>
        <div className='d-flex justify-content-between'>
          <Button onClick={()=>dispatch(removeFromWishlist(product.id))} className="btn btn-light"><i class="fa-solid fa-trash text-danger fa-2x"></i></Button>
          <Button onClick={()=>handleWishlistCart(product)} className="btn btn-light"><i class="fa-solid fa-cart-plus text-success fa-2x"></i></Button>
          </div>
      </Card.Body>
    </Card>
      </Col>
          )):<div style={{height:'60vh'}} className='w-100 d-flex flex-column justify-content-center align-items-center '>
            <img height={'250px'} src="" alt="" />
            <h3>Your Wishlist is Empty!!!</h3>
            <Link style={{textDecoration:'none'}} className="btn btn-success rounded mt-3" to={'/'} >Back to Home</Link>
          </div>
          }
        
      </Row>
    </div>
  )
}

export default Wishlist