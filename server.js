
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('join', ({ room }) => {
    socket.join(room);
  });

  socket.on('offer', (offer, room) => {
    io.to(room).emit('offer', offer);
  });

  socket.on('answer', (answer, room) => {
    io.to(room).emit('answer', answer);
  });

  socket.on('ice-candidate', (candidate, room) => {
    io.to(room).emit('ice-candidate', candidate);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

const g=[1,2,3,4,5,6,7,8,9]

const d=g.reduce((e)=>e+2)
console.log(d);