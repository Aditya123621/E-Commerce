import { User } from './models/userModel'
import { Product } from './models/productModel'
import bcrypt from 'bcryptjs'

export const sampleProducts: Product[] = [
  {
    name: 'Nike Slim shirt',
    slug: 'nike-slim-shirt',
    category: 'Shirts',
    image: '../images/p1.webp',
    price: 799,
    countInStock: 10,
    brand: 'Nike',
    rating: 4.5,
    numReviews: 10,
    description: 'high quality shirt',
  },
  {
    name: 'Adidas Fit Shirt',
    slug: 'adidas-fit-shirt',
    category: 'Shirts',
    image: '../images/p2.webp',
    price: 999,
    countInStock: 20,
    brand: 'Adidas',
    rating: 4.0,
    numReviews: 10,
    description: 'high quality product',
  },
  {
    name: 'Lacoste Free Pants',
    slug: 'lacoste-free-pants',
    category: 'Pants',
    image: '../images/p3.webp',
    price: 849,
    countInStock: 0,
    brand: 'Lacoste',
    rating: 4.8,
    numReviews: 17,
    description: 'high quality product',
  },
  {
    name: 'Nike Slim Pant',
    slug: 'nike-slim-pant',
    category: 'Pants',
    image: '../images/p4.webp',
    price: 1299,
    countInStock: 15,
    brand: 'Nike',
    rating: 4.5,
    numReviews: 14,
    description: 'high quality product',
  },
]

export const sampleUsers: User[] = [
  {
    name: 'Joe',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456'),
    isAdmin: true,
  },
  {
    name: 'John',
    email: 'user@example.com',
    password: bcrypt.hashSync('123456'),
    isAdmin: false,
  },
]