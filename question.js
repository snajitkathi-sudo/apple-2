(function buildDecorations() {
  var container = document.getElementById("decorations");
  if (!container) return;
  var hearts = ["♥", "❤", "💕"];
  function rnd(min, max) { return min + Math.random() * (max - min); }
  for (var i = 0; i < 10; i++) {
    var heart = document.createElement("span");
    heart.className = "deco-heart";
    heart.textContent = hearts[i % hearts.length];
    heart.style.left = rnd(2, 96) + "%";
    heart.style.animationDelay = rnd(-10, 0) + "s";
    heart.style.fontSize = rnd(0.85, 1.35) + "rem";
    container.appendChild(heart);
  }
  for (var k = 0; k < 12; k++) {
    var sparkle = document.createElement("div");
    sparkle.className = "deco-sparkle";
    sparkle.style.left = rnd(2, 96) + "%";
    sparkle.style.top = rnd(2, 96) + "%";
    sparkle.style.animationDelay = rnd(0, 2) + "s";
    container.appendChild(sparkle);
  }
})();

var envelope = document.getElementById("envelope");
var card = document.getElementById("question-card");
var yesBtn = document.getElementById("yesBtn");
var noBtn = document.getElementById("noBtn");
var answerText = document.getElementById("answerText");

function showCard() {
  if (!card) return;
  card.classList.remove("hidden");
  card.setAttribute("aria-hidden", "false");
}

function openEnvelope() {
  if (!envelope) return;
  if (envelope.classList.contains("open")) return;
  envelope.classList.add("open");
  setTimeout(function () {
    envelope.classList.add("done");
  }, 900);
  setTimeout(function () {
    envelope.style.display = "none";
    showCard();
  }, 1350);
}

if (envelope) {
  envelope.addEventListener("click", openEnvelope);
  envelope.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openEnvelope();
    }
  });
}

if (yesBtn) {
  yesBtn.addEventListener("click", function () {
    answerText.textContent = "YAY!! 💖";
  });
}
if (noBtn) {
  noBtn.addEventListener("click", function () {
    var countdown = 5;
    noBtn.disabled = true;
    yesBtn.disabled = true;
    
    var countdownInterval = setInterval(function () {
      answerText.textContent = "Closing in " + countdown + "...";
      countdown--;
      
      if (countdown < 0) {
        clearInterval(countdownInterval);
        window.open("", "_self");
        window.close();
        setTimeout(function () { window.close(); }, 50);
      }
    }, 1000);
  });
}

