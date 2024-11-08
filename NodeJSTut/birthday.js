const EventEmitter = require("events");
const myEvent = new EventEmitter();

// Listener function
const greetBirthday = (name, newAge) => {
  // name = Jek
  // newAge = 24
  console.log(`Happy Birthday ${name}. You are now ${newAge}!`);
};

// Listening for birthdayEvent
myEvent.on("birthdayEvent", greetBirthday);

// Emitting the birthdayEvent with some extra parameters
myEvent.emit("birthdayEvent", "Jek", "24");
