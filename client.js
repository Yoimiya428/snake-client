const net = require("net");
const { IP, PORT } = require("./constants");
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,// IP address here,
    port: PORT// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected!");
  });

  conn.on("data", (message) => {
    //console.log("!!!", message);

    conn.write("Name: GOD");
    conn.write("Move: up");
   // conn.write("Say: OvO")
  });




  return conn;
};

module.exports = { connect };
///