window.onload = replace;

var words = {
  quote: [
    "KitKat? No, I am Kitka.", 
    "I love my friends!", 
    "Who wouldn't eat a chocolate cake anyways...",
    "Yes I am a skunk..",
    "🦨🦨🦨",
    "Oh did you just paw at my site?"
  ]
};

function replace() {
  let textbox = document.getElementById("quote");
  var text = textbox.innerHTML;
  for (const [key, value] of Object.entries(words)) {
    text = text.replace(
      `#${key}`,
      value[Math.floor(Math.random() * value.length)]
    );
  }
  textbox.innerHTML = text;
}