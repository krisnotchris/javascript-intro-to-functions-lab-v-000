function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  var stringy = string.toUpperCase();
  console.log(stringy);
}

function logWhisper(string) {
  var whispery = string.toLowerCase();
  console.log(whispery);
}

function sayHiToGrandma(string) {
  var lowercase = string.toLowerCase();
  var uppercase = string.toUpperCase();
  if (string === lowercase) {
    return "I can't hear you!";
  } else if (string === uppercase) {
    return "YES INDEED!";
  } else {
    return "I love you, too.";
  }
}
