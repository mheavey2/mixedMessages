//the three parts of the message stored as arrays inside a message object
const message = {
  wiseWords: [
    "breathe before you speak",
    "reflections offer a different perspective",
    "don't dance if you don't want to",
  ],
  luckyNumber: [7, 2, 8],
  colourOfTheDay: ["green", "red", "sapphire"],
};

//iterate over array and return random element
function returnRandom(array) {
  for (key in array) {
    let response = array[Math.floor(Math.random() * array.length)];
    return response;
  }
}

//combine the 3 random outputs with some text as the final random response
function generateMessage(msg) {
  let randomWise = returnRandom(msg.wiseWords);
  let randomNumber = returnRandom(msg.luckyNumber);
  let randomColor = returnRandom(msg.colourOfTheDay);

  let randomResponse = `"Today's wisdom is: " + ${randomWise} + "Your day's lucky number is:  " + ${randomNumber} + "the best colour for the day is:  " + ${randomColor}`;
  console.log(randomResponse);
}

//call the function
generateMessage(message);
