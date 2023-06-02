import mongoose from 'mongoose'
import app from '../app/app'
import config from '../config'
import { Request, Response } from 'express'
const port = config.port
const db = config.database_url

const ConnectDB = async () => {
  try {
    await mongoose.connect(`${db}`)
    console.log(`🛢   Database is connected successfully`)
    app.listen(port, () => {
      console.log(`Server is listening at http://localhost:${port}`)
    })
    app.get('/api/v1', (req: Request, res: Response) => {
      res.send('Hey Wellcome to Edunomics University !!')
    })
  } catch (error) {
    throw new Error(`Unable to connect to DB !! ${error}`)
  }
}

export default ConnectDB
