const likeBtn = document.getElementById("like-btn");
let liked = false;

likeBtn.addEventListener("click", () => {
  liked = !liked;

  if (liked) {
    likeBtn.classList.add("liked");
    likeBtn.textContent = "❤️ Liked!";
  } else {
    likeBtn.classList.remove("liked");
    likeBtn.textContent = "❤️ Like";
  }
});

const speakBtn = document.getElementById("speak-btn");

speakBtn.addEventListener("click", () => {
  const text = document.body.innerText;

  const speech = new SpeechSynthesisUtterance(text);
  speech.lang = "en-US";
  speech.rate = 1;

  window.speechSynthesis.speak(speech);
});
