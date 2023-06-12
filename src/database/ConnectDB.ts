import mongoose from 'mongoose';
import app from '../app/app';
import config from '../config';
import { Request, Response } from 'express';
import { errorLogger, logger } from '../shared/loger';
import { Server } from 'http';
const port = config.port;
const db = config.database_url;

process.on('uncaughtException', error => {
  errorLogger.error(error);
  process.exit(1);
});

let server: Server;

const ConnectDB = async () => {
  try {
    await mongoose.connect(`${db}`);
    logger.info(`🛢   Database is connected successfully`);
    server = app.listen(port, () => {
      logger.info(`Server is listening at http://localhost:${port}`);
    });
    app.get('/api/v1', (req: Request, res: Response) => {
      res.send('Hey Wellcome to Edunomics University !!');
    });
  } catch (error) {
    errorLogger.error(`Unable to connect to DB !! ${error}`);
  }

  process.on('unhandledRejection', error => {
    errorLogger.error('Unhandel Rejection is detected , server is shutdown');
    if (server) {
      server.close(() => {
        errorLogger.error(`Unhandled Rejection ${error}`);
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  });
};

// process.on('SIGTERM', () => {
//   logger.info('SIGTERM is received')
//   if (server) {
//     server.close()
//   }
// })

export default ConnectDB;
