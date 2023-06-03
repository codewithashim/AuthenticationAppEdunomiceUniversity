import path from 'path'
import { createLogger, format, transports } from 'winston'
const { combine, timestamp, label, prettyPrint } = format
import DailyRotateFile from 'winston-daily-rotate-file'

const myFormat = format.printf(({ level, message, label, timestamp }) => {
  const date = new Date(timestamp)
  const hour = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()

  return `${date.toDateString()} ${hour}:${minutes}:${seconds} [${label}] ${level}: ${message} `
})

export const logger = createLogger({
  level: 'info',
  format: combine(
    label({ label: 'Edunomics University' }),
    timestamp(),
    myFormat
  ),

  transports: [
    new transports.Console(),
    new DailyRotateFile({
      filename: path.join(
        process.cwd(),
        'logs',
        'success',
        '%DATE%-success.log'
      ),
      datePattern: 'DD-MM-YYYY-HH',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d',
    }),
  ],
})

export const errorLogger = createLogger({
  level: 'error',
  format: combine(
    label({ label: 'Edunomics University' }),
    timestamp(),
    myFormat
  ),
  transports: [
    new transports.Console(),
    new DailyRotateFile({
      filename: path.join(process.cwd(), 'logs', 'errors', '%DATE%-errors.log'),
      datePattern: 'DD-MM-YYYY-HH',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d',
    }),
  ],
})
