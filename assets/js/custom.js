const trigger = [
["hi", "hey", "hello", "good morning", "good afternoon"],
  ["where is nick", "where is developer", "where is designer", "nick", "help","help me","call me","text me","want to hire you","hire","i need a designer","need","we need","need a website","need a application","website","application"],
  ["how are you", "how are u", "how is life", "how are things","hows u","kese ho","how is nick"],
  ["what are you doing", "what is going on", "what is up","whats up","what are u doing","kya kr rhe ho"],
  ["how old are you","what is your age"],
  ["who are you", "are you human", "are you bot", "are you human or bot","who are u"],
  ["who created you", "who made you"],
  ["who is your gf", "who is your girlfriend"],
  [
    "your name please",
    "your name",
    "may i know your name",
    "what is your name",
    "what call yourself"
  ],
  ["i love you"],
  ["happy", "good", "fun", "wonderful", "fantastic", "cool"],
  ["bad", "bored", "tired"],
  ["help me", "tell me story", "tell me joke"],
  ["ah", "yes", "ok", "okay", "nice"],
  ["thanks", "thank you"],
  ["bye", "good bye", "goodbye", "see you later"],
  ["what should i eat today"],
  ["bro"],
  ["what", "why", "how", "where", "when"],
  ["oh","ohh","accha","acha","yup"]
];

const reply = [
  ["Hello!", "Hi!", "Hey!", "Hi there!"],
  ["Hey there, Nick is available all time at 8839690523 / nickunj.gurjar@gmail.com"],
  [
    "Great... how about you?",
    "Fine... how are you?",
    "Pretty well, how are you?",
    "Fantastic, how are you?"
  ],
  [
    "Staying at home, you also 'Stay Home Stay Safe'",
    "Nothing much",
    "Just doing some productive things",
    "Can you guess?",
    "I don't know actually"
  ],
  ["I am infinite"],
  ["I am just a bot", "I am a bot. What are you?"],
  ["The one true God, JavaScript"],
  ["I am Single"],
  ["I have a name", "My name is Designick"],
  ["I love you too", "Me too"],
  ["Have you ever felt bad?", "Glad to hear it"],
  ["Why?", "Why? You shouldn't!", "Try watching TV"],
  ["What about?", "Once upon a time..."],
  ["Tell me a story", "Tell me a joke", "Tell me about yourself"],
  ["You're welcome"],
  ["Bye", "Goodbye", "See you later"],
  ["Sushi", "Pizza"],
  ["Bro!"],
  ["Complete your words"],
  ["Yes!","yeah","yups"]
];

const alternative = [
  "hello",
  "Go on...",
  "Bro...",
  "Try again",
  "I'm listening..."
];

const coronavirus = ["Please stay home"];

document.addEventListener("DOMContentLoaded", () => {
	const inputField = document.getElementById("input")
	inputField.addEventListener("keydown", function(e) {
		if (e.code === "Enter" || e.keyCode=='13') {
			let input = inputField.value;
			inputField.value = "";
			output(input);
    }
  });
});


function output(input) {
  let product;

  //lowercase input and remove all chars except word characters, space, and digits
  let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");

  // 'tell me a story' -> 'tell me story'
  // 'i feel happy' -> 'happy'
  text = text
    .replace(/ a /g, " ")
    .replace(/i feel /g, "")
    .replace(/whats/g, "what is")
    .replace(/please /g, "")
    .replace(/ please/g, "");

  //compare function, then search keyword, then random alternative
  if (compare(trigger, reply, text)) {
    product = compare(trigger, reply, text);
  } else if (text.match(/coronavirus/gi)) {
    product = coronavirus[Math.floor(Math.random() * coronavirus.length)];
  } else {
    product = alternative[Math.floor(Math.random() * alternative.length)];
  }

  //update DOM
  addChat(input, product);
}

function compare(triggerArray, replyArray, string) {
  let item;
  for (let x = 0; x < triggerArray.length; x++) {
    for (let y = 0; y < replyArray.length; y++) {
      if (triggerArray[x][y] == string) {
        items = replyArray[x];
        item = items[Math.floor(Math.random() * items.length)];
      }
    }
  }
  return item;
}

function addChat(input, product) {
  const mainDiv = document.getElementById("chat-inner");
  let userDiv = document.createElement("div");
  userDiv.id = "user";
  userDiv.innerHTML = `<i class="fas fa-user-circle"></i> <span id="user-response">${input}</span>`;
  mainDiv.appendChild(userDiv);

  let botDiv = document.createElement("div");
  botDiv.id = "bot";
  botDiv.innerHTML = `<img src="assets/images/favicon.jpg"> <span id="bot-response">${product}</span>`;
  mainDiv.appendChild(botDiv);
  speak(product);

  	var chatWindow = document.getElementById('chat-inner'); 
	var xH = chatWindow.scrollHeight; 
	chatWindow.scrollTo(0, xH);
}

const synth = window.speechSynthesis;
let voices = synth.getVoices();

function speak(string) {
  let u = new SpeechSynthesisUtterance(string);
  u.text = string;
  u.lang = "en-US";
  u.volume = 1; //0-1 interval
  u.rate = 1;
  u.pitch = 1; //0-2 interval
  synth.speak(u);

}