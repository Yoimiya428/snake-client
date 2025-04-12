const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '172.25.96.1',// IP address here,
    port: 50541// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected!");
  });

  // ✅ Listen for incoming data from the server
  conn.on("data", (message) => {
    console.log("!!!", message);
  });




  return conn;
};

console.log("Connecting ...");
connect();
