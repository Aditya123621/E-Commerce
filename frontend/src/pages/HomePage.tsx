import {Row,Col} from 'react-bootstrap'
import { Product } from '../types/Product'
import { useEffect, useReducer } from 'react'
import axios from 'axios'
import { getError } from '../utils'
import { ApiError } from '../types/ApiError'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'
import ProductItem from '../components/ProductItem'
import { Helmet } from 'react-helmet-async'
import { useGetProductsQuery } from '../hooks/productHooks'


// This was needed when we were not fetching data from backend
// type State = {
//   // products is an array of Product
//     products: Product[]
//     loading: boolean
//     error: string
//   }
  
//   type Action =
//     | { type: 'FETCH_REQUEST' }
//     | {
//         type: 'FETCH_SUCCESS'
//         payload: Product[]
//       }
//     | { type: 'FETCH_FAIL'; payload: string }
  
//   const initialState: State = {
//     products: [],
//     loading: true,
//     error: '',
//   }
  
//   const reducer = (state: State, action: Action) => {
//     switch (action.type) {
//       case 'FETCH_REQUEST':
//         return { ...state, loading: true }
//       case 'FETCH_SUCCESS':
//         return { ...state, products: action.payload, loading: false }
//       case 'FETCH_FAIL':
//         return { ...state, loading: false, error: action.payload }
//       default:
//         return state
//     }
//   }
  
  export default function HomePage() {
  //   const [{ loading, error, products }, dispatch] = useReducer<
  //   React.Reducer<State, Action>
  // >(reducer, initialState)


  // In development/Strict mode useEffect renders twice but we don't have to worry as in Production Mode it will render just for once
  // useEffect(() => {
  //   const fetchData = async () => {
  //     dispatch({ type: 'FETCH_REQUEST' })
  //     try {
  //       const result = await axios.get('/api/products')
  //       dispatch({ type: 'FETCH_SUCCESS', payload: result.data })
  //     } catch (err) {
  //       dispatch({ type: 'FETCH_FAIL', payload: getError(err as ApiError) })
  //     }
  //   }
  //   fetchData()
  // }, [])
  
  // useGetProductsQuery is coming from Products hook
  const { data: products, isLoading, error } = useGetProductsQuery()

  return isLoading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox variant="danger">{getError(error as ApiError)}</MessageBox>
  ) : (
    <Row>
      <Helmet>
        <title>Shoppers' Junction</title>
      </Helmet>
      {/* we used products! because it can be undefined so to make sure it is defined we use "!" */}
        {products!.map((product) => (
        <Col key={product.slug} sm={6} md={4} lg={3}>
           <ProductItem product={product} />
        </Col>
      ))}
    </Row>
  )
}