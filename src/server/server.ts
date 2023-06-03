import ConnectDB from '../database/ConnectDB'
import { errorLogger } from '../shared/loger'

try {
  ConnectDB()
} catch (error) {
  errorLogger.error(error)
}
