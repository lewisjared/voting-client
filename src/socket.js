import io from 'socket.io-client';

const socket = io(`${location.protocol}//${location.hostname}:8090`);

/**
 * Informs the server that the client is changing rooms
 * @param room Name of the room
 * @returns {Promise} which resolves to the current state in the room
 */
export function configureRoom(room) {
  return new Promise((resolve, reject) => {
    socket.emit('joinRoom', room);

    socket.once('joinRoomSuccess', function (state) {
      resolve(state);
    });
  })
}

export function createRoom(room) {
  return new Promise((resolve, reject) => {
    socket.emit('createRoom', room);

    socket.once('createRoomSuccess', function (link) {
      resolve(link);
    })
  })
}

export default socket;