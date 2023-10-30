const EventEmitter = require("events");

// EventEmitter dan meros olish
const newEmitter = new EventEmitter();

// Event listener // handler
newEmitter.on("hello", () => console.log("Hello world"));

newEmitter.emit("hello");
newEmitter.emit("hello");
