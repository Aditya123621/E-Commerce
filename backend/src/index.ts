import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import express, { Request, Response } from 'express'
import { sampleProducts } from './data'
import path from 'path'
import { orderRouter } from './routers/orderRouter'
import { productRouter } from './routers/productRouter'
import { seedRouter } from './routers/seedRouter'
import { userRouter } from './routers/userRouter'
import { keyRouter } from './routers/keyRouter'


dotenv.config()

const MONGODB_URI =
  process.env.MONGODB_URI || 'mongodb+srv://shopperuser:mypassword@cluster0.gsefhh1.mongodb.net/shopperdb?retryWrites=true&w=majority'
mongoose.set('strictQuery', true)
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log('connected to mongodb')
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB:', error);
  });

const app = express()
app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:3000'],
  })
)



// app.get('/api/products', (req: Request, res: Response) => {
//   res.json(sampleProducts)
// })

// app.get('/api/products/:slug', (req: Request, res: Response) => {
//   res.json(sampleProducts.find((x) => x.slug === req.params.slug))
// })

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api/products', productRouter)
app.use('/api/users', userRouter)
app.use('/api/orders', orderRouter)
app.use('/api/seed', seedRouter)
app.use('/api/keys', keyRouter)


app.use(express.static(path.join(__dirname, '../../frontend/public')))
app.get('*', (req: Request, res: Response) =>
  res.sendFile(path.join(__dirname, '../../frontend/public/index.html'))
)

// console.log(__dirname);


const PORT: number = parseInt((process.env.PORT || '4000') as string, 10)

app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`)
})