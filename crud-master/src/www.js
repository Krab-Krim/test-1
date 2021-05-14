#!/usr/bin/env node

import app from './app';
const debug = require('debug')('crud:server');
import http from 'http';
import _ from 'lodash';

const server = http.createServer(app);

const normalizePort = val => _.toSafeInteger(val);

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const onError = error => {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const onListening = () => {
  const addr = server.address();
  const bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
};


server
  .listen(port)
  .on('error', onError)
  .on('listening', onListening);
