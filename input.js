let connection;

const setupInput = function (connect) {
  connection = connect;
  const stdin = process.stdin;
  stdin.setRawMode(true); 
  stdin.setEncoding("utf8"); 
  stdin.resume(); 
  stdin.on("data", handleUserInput); 
  return stdin;
};

const handleUserInput = function (key) {
  //case: process
  if (key === '\u0003') {
    process.exit();
  } 

  //case: movement
  if (key === 'w') {
    connection.write("Move: up");
  }
  if (key === 'a') {
    connection.write("Move: left");
  }
  if (key === 's') {
    connection.write("Move: down");
  }
  if (key === 'd') {
    connection.write("Move: right");
  }

  //case: others
  if (key === 'i') {
    connection.write("Ovo")
  }


};

module.exports = { setupInput };