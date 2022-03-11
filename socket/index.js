const io = require('socket.io')(8900, {
  cors: { origin: 'http://localhost:3000' },
});

let users = [];


io.on('connection', (socket) => {
  //when ceonnect
  console.log('a user connected.');

  io.on("addUser",(userId)=>{
    console.log(socket, userId)
  })
});
