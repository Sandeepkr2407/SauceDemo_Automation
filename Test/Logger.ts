import * as log4js from 'log4js';

log4js.configure({
  appenders: { app: { type: 'file', filename: 'appTest.log' } },
  categories: { default: { appenders: ['app'], level: 'info' } },
});

const logger = log4js.getLogger();

const customLogger = {
  // Log an informational message
  info: (message: string) => {
    logger.info('INFO: ' + message);
  },

  // Log an error message
  error: (message: string) => {
    logger.error('ERROR: ' + message);
  },

  // Log a debug message
  debug: (message: string) => {
    logger.debug('DEBUG: ' + message);
  },
  
  // Log a warning message
  warn: (message: string) =>{
    logger.warn('WARN: '+ message);
  }
  
};

export default customLogger;
