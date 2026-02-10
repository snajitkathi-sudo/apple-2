var COLLAGE_IMAGES = [
    "/public/images/collage/1.jpg",
    "/public/images/collage/2.jpg",
    "/public/images/collage/3.jpg",
    "/public/images/collage/4.jpg",
    "/public/images/collage/5.jpg",
    "/public/images/collage/6.jpg",
    "/public/images/collage/7.jpeg",
    "/public/images/collage/8.jpeg",
    "/public/images/collage/9.jpeg",
    "/public/images/collage/10.jpeg",
    "/public/images/collage/11.jpg",
    "/public/images/collage/12.jpeg",
    "/public/images/collage/13.jpg",
    "/public/images/collage/14.jpeg",
    "/public/images/collage/15.jpeg",
    "/public/images/collage/16.jpeg",
    "/public/images/collage/17.jpeg",
    "/public/images/collage/18.jpeg",
    "/public/images/collage/19.jpeg",
    "/public/images/collage/20.jpg",
    "/public/images/collage/21.jpg",
    "/public/images/collage/22.jpeg",
    "/public/images/collage/23.jpg",
    "/public/images/collage/24.jpg",
    "/public/images/collage/25.jpg"
];

var COLLAGE_ROTATIONS = [
    0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
    0, 0, 0, 0, 0
];

var COLLAGE_TITLES = [
    "Radiant", "Resplendent", "Luminous", "Exquisite", "Stunning",
    "Ethereal", "Magnificent", "Glorious", "Enchanting", "Alluring",
    "Splendid", "Gorgeous", "Dazzling", "Divine", "Seraphic",
    "Heavenly", "Ravishing", "Elegant", "Graceful", "Lovely",
    "Sublime", "Angelic", "Dreamlike", "Captivating", "Bewitching"
];

var COLLAGE_CAPTIONS = [
    "At the museum!!! This was my first picture with the camera at the museum and it was of you and Ali.",
    "This was the better and cooler version of the first photo, we can see your pretty face more!!",
    "Quick group catterpillar photo but you're in the sunlight shine thingie the most, this one was cool cause i made more variation of it...",
    "THIS IS US AT THE GLOBE OH MY GODDDD. Like one of the first actual pictures of us im stilll mad I had gum in #notlockedin...",
    "Awkward picture at the geode you look like a dummy here loser",
    "Another us photo woohoo but this was an actually cute one ( this was also the one i used to show the debakey people that we were a thing)",
    "Ice skating at galleria a few months thingie agooo, super fun and a picture on the digi next to the tree",
    "BIRTHDAY GIRL UNC 16 WOAHHHHHHHH you looked so pretty that day",
    "more birthday photos but u being a big back",
    "hot ass dress worn but you KEEP that forever, and ur brother ig",
    "same thing except ur literally shining in the middle (whats up with u and and shining)",
    "Im so chopped here but woah this was escape room except I did like nothing of help the whole time except the cane",
    "GOAT GOATS GOAT GOAT GOAT GOAT GOAT GOAT",
    "Holy fricking pretty amazing I LOVE YOU you look so good wow",
    "i love the dress you should also keep this one and also oh my god the HAIR UR HAIR IS PERFECT WHAT",
    "again keep the dress please I have nothing else to add",
    "freaky deak photo by accident oops but... im licking my screen",
    "THE FIRST VALENTINES holy throw back... i remember stressing hard to get everyting in order",
    "beautiful oh my god you look stunning in the traditional outfits and the LIGHTING and candid (is it a candid idk) its sooo good",
    "carnegie ifest when i was being an absolute fatass eating pani puri",
    "heh same thing",
    "WOW you were actually so like cunty here idk is that the best way to describe it like it felt like you could beat me up",
    "NASA FIELD DAY with the german alexis and hanlin that was funnnn I really liked that day actually and the food and coffee",
    "", ""
];

var COLLAGE_DATES = [
    "2024-02-14", "2024-02-14", "2024-02-14", "2024-02-14", "2024-02-14",
    "2024-02-14", "2024-02-14", "2024-02-14", "2024-02-14", "2024-02-14",
    "2024-02-14", "2024-02-14", "2024-02-14", "2024-02-14", "2024-02-14",
    "2024-02-14", "2024-02-14", "2024-02-14", "2024-02-14", "2024-02-14",
    "2024-02-14", "2024-02-14", "2024-02-14", "2024-02-14", "2024-02-14"
];

var SLIDESHOW_TEXTS = [
    "HELLOOOOOO :)",
    "This took me a crazy amount of time and over 2000 lines of code to make",
    "I made this museum collection (with captions) of photos I thought you were really cool in",
    "I hope we can spend our time together in the best way possible and get to bond and grow together as a couple",
    "As Taylor Swift said...",
    "to be alive, and to get to spend this life with you,is a gift from heaven",
    "I lied, she didn't say that",
    "I really do wish we can see each other more, and I wish I could give you a better experience than this",
    "I'm running out the things to say here, so I'm going to move on to the slideshow part",
    ".....",
    "I love you so much Mahati, more or less equal to how much I love food",
    "Click the cool button AFTER reading all the captions"
];

var carouselIndex = 14;

function getRotateStyle(i) {
    var rot = COLLAGE_ROTATIONS[i];
    return rot ? "rotate(" + rot + "deg)" : "none";
}

function buildCarousel() {
    var layer = document.getElementById("collage-layer");
    if (!layer) return;

    var strip = document.createElement("div");
    strip.className = "carousel-strip";

    var prevSlot = document.createElement("div");
    prevSlot.className = "carousel-slot prev";
    var prevImg = document.createElement("img");
    prevImg.alt = "";
    prevSlot.appendChild(prevImg);

    var centerSlot = document.createElement("div");
    centerSlot.className = "carousel-slot center";
    var centerImg = document.createElement("img");
    centerImg.alt = "";
    centerSlot.appendChild(centerImg);

    var nextSlot = document.createElement("div");
    nextSlot.className = "carousel-slot next";
    var nextImg = document.createElement("img");
    nextImg.alt = "";
    nextSlot.appendChild(nextImg);

    var next2Slot = document.createElement("div");
    next2Slot.className = "carousel-slot next";
    var next2Img = document.createElement("img");
    next2Img.alt = "";
    next2Slot.appendChild(next2Img);

    strip.appendChild(prevSlot);
    strip.appendChild(centerSlot);
    strip.appendChild(nextSlot);
    strip.appendChild(next2Slot);
    layer.appendChild(strip);

    var isTransitioning = false;
    var autoTimer = null;
    var SLIDE_DURATION_MS = 650;
    var SLOT_OFFSET_PERCENT = 22;

    function setStripTransition(on) {
        strip.style.transition = on ? "transform " + (SLIDE_DURATION_MS / 1000) + "s cubic-bezier(0.22, 0.61, 0.36, 1)" : "none";
    }

    function updateCarousel() {
        var n = COLLAGE_IMAGES.length;
        var prevI = (carouselIndex - 1 + n) % n;
        var nextI = (carouselIndex + 1) % n;
        var next2I = (carouselIndex + 2) % n;

        prevImg.src = COLLAGE_IMAGES[prevI];
        prevImg.style.transform = getRotateStyle(prevI);
        centerImg.src = COLLAGE_IMAGES[carouselIndex];
        centerImg.style.transform = getRotateStyle(carouselIndex);
        nextImg.src = COLLAGE_IMAGES[nextI];
        nextImg.style.transform = getRotateStyle(nextI);
        next2Img.src = COLLAGE_IMAGES[next2I];
        next2Img.style.transform = getRotateStyle(next2I);
    }

    function scheduleAuto() {
        if (autoTimer) clearInterval(autoTimer);
        autoTimer = setInterval(function () {
            var overlay = document.getElementById("caption-overlay");
            if (overlay && !overlay.classList.contains("hidden")) return;
            if (isTransitioning) return;
            goNext(true);
        }, 8000);
    }

    function finishShift(nextIndex) {
        var n = COLLAGE_IMAGES.length;
        carouselIndex = (nextIndex + n) % n;
        updateCarousel();
        setStripTransition(false);
        strip.style.transform = "translateX(0)";
        strip.getBoundingClientRect();
        isTransitioning = false;
    }

    function shift(dir, fromAuto) {
        if (isTransitioning) return;
        isTransitioning = true;
        if (!fromAuto) scheduleAuto();
        setStripTransition(true);
        requestAnimationFrame(function () {
            strip.style.transform = dir < 0 ? "translateX(-" + SLOT_OFFSET_PERCENT + "%)" : "translateX(" + SLOT_OFFSET_PERCENT + "%)";
        });
    }

    strip.addEventListener("transitionend", function (e) {
        if (e.propertyName !== "transform") return;
        if (!isTransitioning) return;
        var movedLeft = strip.style.transform.indexOf("-") !== -1;
        finishShift(movedLeft ? carouselIndex + 1 : carouselIndex - 1);
    });

    function goPrev(fromAuto) { shift(1, fromAuto); }
    function goNext(fromAuto) { shift(-1, fromAuto); }

    centerSlot.addEventListener("click", function (e) {
        e.stopPropagation();
        var overlay = document.getElementById("caption-overlay");
        var captionTitle = document.getElementById("caption-title");
        var captionDate = document.getElementById("caption-date");
        var captionText = document.getElementById("caption-text");
        if (autoTimer) { clearInterval(autoTimer); autoTimer = null; }
        if (overlay && captionText) {
            if (captionTitle) captionTitle.textContent = COLLAGE_TITLES[carouselIndex] || "";
            if (captionDate) captionDate.textContent = COLLAGE_DATES[carouselIndex] || "";
            captionText.textContent = COLLAGE_CAPTIONS[carouselIndex] || "";
            overlay.classList.remove("hidden");
            overlay.setAttribute("aria-hidden", "false");
        }
    });

    document.getElementById("carousel-prev").addEventListener("click", function () { goPrev(false); });
    document.getElementById("carousel-next").addEventListener("click", function () { goNext(false); });

    document.addEventListener("keydown", function (e) {
        if (document.getElementById("caption-overlay") && !document.getElementById("caption-overlay").classList.contains("hidden")) return;
        if (e.key === "ArrowLeft") { goPrev(false); e.preventDefault(); }
        if (e.key === "ArrowRight") { goNext(false); e.preventDefault(); }
    });

    document.getElementById("caption-overlay").addEventListener("click", function (e) {
        if (e.target === this || e.target.id === "caption-close") {
            this.classList.add("hidden");
            this.setAttribute("aria-hidden", "true");
            scheduleAuto();
        }
    });
    document.getElementById("caption-close").addEventListener("click", function () {
        var overlay = document.getElementById("caption-overlay");
        if (overlay) {
            overlay.classList.add("hidden");
            overlay.setAttribute("aria-hidden", "true");
            scheduleAuto();
        }
    });

    updateCarousel();
    scheduleAuto();
}

buildCarousel();

(function buildDecorations() {
    var container = document.getElementById("decorations");
    if (!container) return;
    var hearts = ["♥", "❤", "💕"];
    function rnd(min, max) { return min + Math.random() * (max - min); }
    for (var i = 0; i < 12; i++) {
        var heart = document.createElement("span");
        heart.className = "deco-heart";
        heart.textContent = hearts[i % hearts.length];
        heart.style.left = rnd(2, 96) + "%";
        heart.style.animationDelay = rnd(-10, 0) + "s";
        heart.style.fontSize = (rnd(0.85, 1.4)) + "rem";
        container.appendChild(heart);
    }
    for (var k = 0; k < 15; k++) {
        var sparkle = document.createElement("div");
        sparkle.className = "deco-sparkle";
        sparkle.style.left = rnd(2, 96) + "%";
        sparkle.style.top = rnd(2, 96) + "%";
        sparkle.style.animationDelay = rnd(0, 2) + "s";
        container.appendChild(sparkle);
    }
})();

var canvas = document.getElementById("starfield");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext("2d");
var stars = 500;
var colorrange = [0, 60, 240];
var starArray = [];

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (var i = 0; i < stars; i++) {
    var x = Math.random() * canvas.offsetWidth;
    var y = Math.random() * canvas.offsetHeight;
    var radius = Math.random() * 1.2;
    var hue = colorrange[getRandom(0, colorrange.length - 1)];
    var sat = getRandom(50, 100);
    var opacity = Math.random();
    starArray.push({ x, y, radius, hue, sat, opacity });
}

var frameNumber = 0;
var opacity = 0;
var secondOpacity = 0;
var thirdOpacity = 0;

var baseFrame = context.getImageData(0, 0, window.innerWidth, window.innerHeight);

function drawStars() {
    for (var i = 0; i < stars; i++) {
        var star = starArray[i];

        context.beginPath();
        context.arc(star.x, star.y, star.radius, 0, 360);
        context.fillStyle = "hsla(" + star.hue + ", " + star.sat + "%, 88%, " + star.opacity + ")";
        context.fill();
    }
}

function updateStars() {
    for (var i = 0; i < stars; i++) {
        if (Math.random() > 0.99) {
            starArray[i].opacity = Math.random();
        }
    }
}

var button = document.getElementById("valentinesButton");
button.addEventListener("click", function () {
  window.open("question.html", "_blank", "noopener,noreferrer");
});

var reviewBtn = document.getElementById("reviewTextButton");
var reviewOverlay = document.getElementById("review-overlay");
var reviewContent = document.getElementById("review-content");
var reviewClose = document.getElementById("review-close");
if (reviewBtn && reviewOverlay && reviewContent) {
  reviewBtn.addEventListener("click", function () {
    reviewContent.innerHTML = SLIDESHOW_TEXTS.map(function (t) {
      return "<p>" + escapeHtml(t) + "</p>";
    }).join("");
    reviewOverlay.classList.remove("hidden");
    reviewOverlay.setAttribute("aria-hidden", "false");
  });
}
function escapeHtml(s) {
  var div = document.createElement("div");
  div.textContent = s;
  return div.innerHTML;
}
if (reviewOverlay) {
  reviewOverlay.addEventListener("click", function (e) {
    if (e.target === reviewOverlay || e.target === reviewClose) {
      reviewOverlay.classList.add("hidden");
      reviewOverlay.setAttribute("aria-hidden", "true");
    }
  });
}
if (reviewClose) {
  reviewClose.addEventListener("click", function () {
    if (reviewOverlay) {
      reviewOverlay.classList.add("hidden");
      reviewOverlay.setAttribute("aria-hidden", "true");
    }
  });
}

function drawTextWithLineBreaks(lines, x, y, fontSize, lineHeight) {
    lines.forEach((line, index) => {
        context.fillText(line, x, y + index * (fontSize + lineHeight));
    });
}

function drawText() {
    var fontSize = Math.min(30, window.innerWidth / 24);
    var lineHeight = 8;
    var carouselRow = document.querySelector(".carousel-row");
    var textBaseY = canvas.height * 0.86;
    if (carouselRow) {
        var rect = carouselRow.getBoundingClientRect();
        var belowCarousel = rect.bottom + 64;
        var maxY = canvas.height - 120;
        textBaseY = Math.min(maxY, Math.max(belowCarousel, canvas.height * 0.74));
    }

    context.font = fontSize + "px Comic Sans MS";
    context.textAlign = "center";
    context.shadowColor = "rgba(212, 77, 122, 1)";
    context.shadowBlur = 14;
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 0;

    var step = 0.015;
    if(frameNumber < 167){
        context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        context.fillText("HELLOOOOOO :)", canvas.width/2, textBaseY);
        opacity = opacity + step;
    }
    if(frameNumber >= 167 && frameNumber < 333){
        context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        context.fillText("This took me a crazy amount of time and over 2000 lines of code to make", canvas.width/2, textBaseY);
        opacity = opacity - step;
    }

    if(frameNumber == 333){ opacity = 0; }
    if(frameNumber > 333 && frameNumber < 500){
        context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["amongst trillions and trillions of stars,", "over billions of years"], canvas.width / 2, textBaseY, fontSize, lineHeight);
        } else {
            context.fillText("I made this museum collection (with captions) of photos I thought you were really cool in", canvas.width/2, textBaseY);
        }
        opacity = opacity + step;
    }
    if(frameNumber >= 500 && frameNumber < 667){
        context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(
                ["I hope we can spend our time together in the best way possible",
                 "and get to bond and grow together as a couple"],
                canvas.width / 2, textBaseY, fontSize, lineHeight
            );
        } else {
            context.fillText("I hope we can spend our time together in the best way possible and get to bond and grow together as a couple", canvas.width/2, textBaseY);
        }
        opacity = opacity - step;
    }

    if(frameNumber == 667){ opacity = 0; }
    if(frameNumber > 667 && frameNumber < 833){
        context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        context.fillText("As Taylor Swift said...", canvas.width/2, textBaseY);
        opacity = opacity + step;
    }
    if(frameNumber >= 833 && frameNumber < 1000){
        context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        context.fillText("to be alive, and to get to spend this life with you,is a gift from heaven", canvas.width/2, textBaseY);
        opacity = opacity - step;
    }

    if(frameNumber == 1000){ opacity = 0; }
    if(frameNumber > 1000 && frameNumber < 1167){
        context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        context.fillText("I lied, she didn't say that", canvas.width/2, textBaseY);
        opacity = opacity + step;
    }
    if(frameNumber >= 1167 && frameNumber < 1333){
        context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        context.fillText("I really do wish we can see each other more, and I wish I could give you a better experience than this", canvas.width/2, textBaseY);
        opacity = opacity - step;
    }

    if(frameNumber == 1333){ opacity = 0; }
    if(frameNumber > 1333 && frameNumber < 1500){
        context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["and yet here I am to get the impossible", "chance to get to know you"], canvas.width / 2, textBaseY, fontSize, lineHeight);
        } else {
            context.fillText("I'm running out the things to say here, so I'm going to move on to the slideshow part", canvas.width/2, textBaseY);
        }
        opacity = opacity + step;
    }
    if(frameNumber >= 1500 && frameNumber < 1667){
        context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["and yet here I am to get the impossible", "chance to get to know you"], canvas.width / 2, textBaseY, fontSize, lineHeight);
        } else {
            context.fillText(".....", canvas.width/2, textBaseY);
        }
        opacity = opacity - step;
    }

    if(frameNumber == 1667){ opacity = 0; }
    if(frameNumber > 1667 && frameNumber < 1833){
        context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["I love you so much {name}, more than", "all the time and space in the universe can contain"], canvas.width / 2, textBaseY, fontSize, lineHeight);
        } else {
            context.fillText("I love you so much Mahati, more or less equal to how much I love food", canvas.width/2, textBaseY);
        }
        opacity = opacity + step;
    }
    if(frameNumber >= 1833 && frameNumber < 99999){
        context.fillStyle = `rgba(255, 255, 255, ${secondOpacity})`;
        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["and I can't wait to spend all the time in", "the world to share that love with you!"], canvas.width / 2, textBaseY + 60, fontSize, lineHeight);
        } else {
            context.fillText("Click the cool button AFTER reading all the captions", canvas.width/2, textBaseY + 50);
        }
        secondOpacity = secondOpacity + step;
        var btnWrap = document.querySelector(".bottom-buttons");
        if (btnWrap) btnWrap.classList.add("visible");
    }   

     context.shadowColor = "transparent";
     context.shadowBlur = 0;
     context.shadowOffsetX = 0;
     context.shadowOffsetY = 0;
}

function draw() {
    context.putImageData(baseFrame, 0, 0);

    drawStars();
    updateStars();
    drawText();

    if (frameNumber < 99999) {
        frameNumber++;
    }
    window.requestAnimationFrame(draw);
}

window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    baseFrame = context.getImageData(0, 0, window.innerWidth, window.innerHeight);
});

var bgMusic = document.getElementById("bgMusic");
var audioStarted = false;

function startAudio() {
    if (audioStarted || !bgMusic) return;
    audioStarted = true;
    bgMusic.volume = 0.6;
    bgMusic.play().catch(function () { audioStarted = false; });
}

if (document.readyState === "complete") {
    startAudio();
} else {
    window.addEventListener("load", startAudio);
}

document.body.addEventListener("click", startAudio, { once: true });
document.body.addEventListener("touchstart", startAudio, { once: true });

window.requestAnimationFrame(draw);
