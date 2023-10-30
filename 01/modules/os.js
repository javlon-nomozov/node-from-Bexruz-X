// operatsion sysytem
const os = require("os");

// platform -> linux, win32, mac
console.log(os.platform());

// Arch hrz 32x, 64
console.log(os.arch());

//Cpus -> CPU core
console.log(os.cpus());

// Freemem -> xotira bo'sh joy
console.log(os.freemem());

// Totalmem -> Umumiy xotira
console.log(os.totalmem());

// Uptime -> ishga tushish soati
console.log(os.uptime());
