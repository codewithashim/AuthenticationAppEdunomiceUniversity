import mongoose from 'mongoose'
import app from '../app/app'
import config from '../config'
import { Request, Response } from 'express'
import {errorLogger, logger} from '../shared/loger'
const port = config.port
const db = config.database_url

const ConnectDB = async () => {
  try {
    await mongoose.connect(`${db}`)
    logger.info(`🛢   Database is connected successfully`)
    app.listen(port, () => {
      logger.info(`Server is listening at http://localhost:${port}`)
    })
    app.get('/api/v1', (req: Request, res: Response) => {
      res.send('Hey Wellcome to Edunomics University !!')
    })
  } catch (error) {
    errorLogger.error(`Unable to connect to DB !! ${error}`)
  }
}

export default ConnectDB
