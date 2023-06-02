import ConnectDB from '../database/ConnectDB'

try {
  ConnectDB()
} catch (error) {
  console.log(error)
}
