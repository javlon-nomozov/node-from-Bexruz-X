const EventEmitter = require("events");
const uuid = require("uuid");

class Logger extends EventEmitter {
  log(method, route) {
    // agar key va kirib kelyotgan parametr nomi birxil bo'lsa bittasini yozish kifoya pastdagi kod kabi
    // this.emit("message", { id: uuid.v4(), method: method, route: route });
    this.emit("message", { id: uuid.v4(), method, route });
  }
}

module.exports = Logger;
