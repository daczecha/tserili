let users = [];

const SocketServer = (socket) => {
  socket.on('joinUser', (user) => {
    if (!users.find((u) => u.id === user._id)) {
      users.push({ id: user._id, socketId: socket.id });
    }
    console.log(users);
    socket.emit('getUsers', users);
  });

  socket.on('sendMessage', ({ receiverId, message }) => {
    const user = users.find((u) => u.id === receiverId);
    if (user) socket.to(user.socketId).emit('getMessage', message);
  });

  socket.on('disconnect', () => {
    users = users.filter((u) => u.socketId !== socket.id);
  });
};

module.exports = SocketServer;
