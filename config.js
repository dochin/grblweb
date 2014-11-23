
var config = {};

config.webPort = 8000;

config.serialBaudRate = 9600;

config.usettyAMA0 = 0;

//Change this to the path of the installation to allow static webserver files to
//be loaded even if you're not in the working path (say if you want to run this as a
//daemon at startup or start with a script).
//Example: config.installedPath = "/usr/lib/node_modules/grblweb"

config.installedPath = '.'

module.exports = config;
