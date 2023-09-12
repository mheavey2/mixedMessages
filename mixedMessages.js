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

//iterate through the object, returning random item from each array
for (messageItem in message) {
  let randomWise =
    message.wiseWords[Math.floor(Math.random() * message.wiseWords.length)];
  let randomNumber =
    message.luckyNumber[Math.floor(Math.random() * message.luckyNumber.length)];
  let randomColor =
    message.colourOfTheDay[
      Math.floor(Math.random() * message.colourOfTheDay.length)
    ];

  //combine the 3 random outputs with some text as the final randm response
  function generateMessage(msg) {
    let randomResponse = `"Today's wisdom is: " + ${randomWise} + "Your day's lucky number is:  " + ${randomNumber} + "the best colour of the day is:  " + ${randomColor}`;
    console.log(randomResponse);
  }
}

//call the function
generateMessage(message);
