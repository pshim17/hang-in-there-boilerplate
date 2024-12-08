// query selector variables go here 👇
const randomPosterButton = document.querySelector(".show-random");
const makeOwnPosterButton = document.querySelector(".show-form");
const nvmBackToMainButton = document.querySelector(".show-main");
const showSavedPosterButton = document.querySelector(".show-saved");
const backToMainButton = document.querySelector(".back-to-main");
const showCreatedPosterButton = document.querySelector(".make-poster");
const saveThisPosterButton = document.querySelector(".save-poster");
const savedPostersGrid = document.querySelector(".saved-posters-grid");
const unmotivationalPostersBtn = document.querySelector(".show-unmotivational-posters");
const backToMainbtn = document.querySelector(".backToMain");
const unmotivationalPostersGrid = document.querySelector(".unmotivational-posters-grid");

// we've provided you with some data to work with 👇
// tip: you can tuck this data out of view with the dropdown found near the line number where the variable is declared 
var images = [
  "./assets/bees.jpg",
  "./assets/bridge.jpg",
  "./assets/butterfly.jpg",
  "./assets/cliff.jpg",
  "./assets/elephant.jpg",
  "./assets/flock.jpg",
  "./assets/fox.jpg",
  "./assets/frog.jpg",
  "./assets/horse.jpg",
  "./assets/lion.jpg",
  "./assets/mountain.jpg",
  "./assets/pier.jpg",
  "./assets/puffins.jpg",
  "./assets/pug.jpg",
  "./assets/runner.jpg",
  "./assets/squirrel.jpg",
  "./assets/tiger.jpg",
  "./assets/turtle.jpg"
];
var titles = [
  "determination",
  "success",
  "inspiration",
  "perspiration",
  "grit",
  "empathy",
  "feelings",
  "hope",
  "believe",
  "try",
  "conviction",
  "accomplishment",
  "achievement",
  "ambition",
  "clarity",
  "challenge",
  "commitment",
  "confidence",
  "action",
  "courage",
  "focus",
  "breathe",
  "gratitude",
  "imagination",
  "kindness",
  "mindfulness",
  "knowledge",
  "opportunity",
  "passion",
  "patience",
  "practice",
  "smile",
  "trust",
  "understanding",
  "wisdom"
];
var quotes = [
  "Don’t downgrade your dream just to fit your reality, upgrade your conviction to match your destiny.",
  "You are braver than you believe, stronger than you seem and smarter than you think.",
  "You are confined only by the walls you build yourself.",
  "The one who has confidence gains the confidence of others.",
  "Act as if what you do makes a difference. It does.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Never bend your head. Always hold it high. Look the world straight in the eye.",
  "What you get by achieving your goals is not as important as what you become by achieving your goals.",
  "Believe you can and you're halfway there.",
  "When you have a dream, you've got to grab it and never let go.",
  "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
  "No matter what you're going through, there's a light at the end of the tunnel.",
  "It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.",
  "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong.",
  'Limit your "always" and your "nevers."',
  "You are never too old to set another goal or to dream a new dream.",
  "Try to be a rainbow in someone else's cloud.",
  "You do not find the happy life. You make it.",
  "Inspiration comes from within yourself. One has to be positive. When you're positive, good things happen.",
  "Sometimes you will never know the value of a moment, until it becomes a memory.",
  "The most wasted of days is one without laughter.",
  "You must do the things you think you cannot do.",
  "It isn't where you came from. It's where you're going that counts.",
  "It is never too late to be what you might have been.",
  "Happiness often sneaks in through a door you didn't know you left open.",
  "We must be willing to let go of the life we planned so as to have the life that is waiting for us.",
  "Never limit yourself because of others’ limited imagination; never limit others because of your own limited imagination.",
  "Be the change that you wish to see in the world.",
  "Let us make our future now, and let us make our dreams tomorrow's reality.",
  "You don't always need a plan. Sometimes you just need to breathe, trust, let go, and see what happens.",
  "If I cannot do great things, I can do small things in a great way.",
  "Don't wait. The time will never be just right.",
  "With the right kind of coaching and determination you can accomplish anything.",
  "If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.",
  "No matter what people tell you, words and ideas can change the world.",
  "Each person must live their life as a model for others.",
  "A champion is defined not by their wins but by how they can recover when they fall."
];
let unmotivationalPosters = [
  {
    name: "FAILURE",
    description: "Why bother trying? It's probably not worth it.",
    price: 68.00,
    year: 2019,
    vintage: true,
    img_url: "./assets/failure.jpg",
  },
  {
    name: "MEDIOCRITY",
    description: "Dreams are just that—dreams.",
    price: 127.00,
    year: 2021,
    vintage: false,
    img_url: "./assets/mediocrity.jpg",
  },
  {
    name: "REGRET",
    description: "Hard work rarely pays off.",
    price: 89.00,
    year: 2018,
    vintage: true,
    img_url:  "./assets/regret.jpg",
  },
  {
    name: "FUTILITY",
    description: "You're not good enough.",
    price: 150.00,
    year: 2016,
    vintage: false,
    img_url:  "./assets/futility.jpg",
  },
  {
    name: "DEFEAT",
    description: "It's too late to start now.",
    price: 35.00,
    year: 2023,
    vintage: false,
    img_url:  "./assets/defeat.jpg",
  },
  {
    name: "HOPELESSNESS",
    description: "Stay in your comfort zone; it's safer.",
    price: 112.00,
    year: 2020,
    vintage: true,
    img_url: "./assets/hopelessness.jpg",
  },
  {
    name: "LAZINESS",
    description: "You can't change anything.",
    price: 25.00,
    year: 2022,
    vintage: false,
    img_url: "./assets/laziness.jpg",
  },
  {
    name: "PROCRASTINATION",
    description: "Better to avoid failure by not trying at all.",
    price: 48.00,
    year: 2017,
    vintage: true,
    img_url: "./assets/procrastination.jpg",
  },
  {
    name: "DESPAIR",
    description: "Let someone else do it; you’ll just mess it up.",
    price: 73.00,
    year: 2015,
    vintage: false,
    img_url: "./assets/despair.jpg",
  },
  {
    name: "NEGLECT",
    description: "Happiness is overrated.",
    price: 160.00,
    year: 2019,
    vintage: true,
    img_url: "./assets/neglect.jpg",
  },
  {
    name: "FEAR",
    description: "Giving up is always an option.",
    price: 91.00,
    year: 2014,
    vintage: false,
    img_url: "./assets/fear.jpg",
  },
  {
    name: "APATHY",
    description: "No one cares about your effort.",
    price: 110.00,
    year: 2016,
    vintage: true,
    img_url: "./assets/apathy.jpg",
  },
  {
    name: "MISERY",
    description: "Why take risks when you can stay stagnant?",
    price: 55.00,
    year: 2021,
    vintage: false,
    img_url: "./assets/misery.jpg",
  },
  {
    name: "BLAME",
    description: "Expect disappointment and you'll never be disappointed.",
    price: 39.00,
    year: 2017,
    vintage: true,
    img_url: "./assets/blame.jpg",
  },
  {
    name: "DOUBT",
    description: "Success is for other people, not you.",
    price: 140.00,
    year: 2020,
    vintage: false,
    img_url: "./assets/doubt.jpg",
  }
];

var savedPosters = [];
var cleanedPosterData = [];
var firstTimeLoading = true;
var currentPoster;

// event listeners go here 👇
document.addEventListener("DOMContentLoaded", displayContent);
randomPosterButton.addEventListener("click", displayRandomPoster);
makeOwnPosterButton.addEventListener("click", makeOwnPoster);
nvmBackToMainButton.addEventListener("click", nvmBacktoMain);
showSavedPosterButton.addEventListener("click", showSavedPoster);
backToMainButton.addEventListener("click", backToMain);
showCreatedPosterButton.addEventListener("click", showCreatePoster);
saveThisPosterButton.addEventListener("click", saveThisPoster);
unmotivationalPostersBtn.addEventListener("click", showUnmotivationalPosters);
backToMainbtn.addEventListener("click", backToMainFromUnmotivationalPosters);

// functions and event handlers go here 👇
// (we've provided two to get you started)!
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function createPoster(imageURL, title, quote) {
  return {
    id: Date.now(), 
    imageURL: imageURL, 
    title: title, 
    quote: quote
  };
};

function cleanData() {
  for (let i = 0; i < unmotivationalPosters.length; i++) {
    let imageURL = unmotivationalPosters[i].img_url;
    let title = unmotivationalPosters[i].name;
    let quote = unmotivationalPosters[i].description;  

    cleanedPosterData.push(createPoster(imageURL, title, quote));
  };
};

function displayContent() {
  randomPosterButton.click();
};

function displayRandomPoster() {
  let imageURL = images[getRandomIndex(images)];
  let title = titles[getRandomIndex(titles)];
  let quote = quotes[getRandomIndex(quotes)];

  document.querySelector(".poster-img").src = imageURL;
  document.querySelector(".poster-title").innerText = title;
  document.querySelector(".poster-quote").innerText = quote;

  createPoster(imageURL, title, quote);
};

function makeOwnPoster() {
  document.querySelector('.poster-form').classList.remove('hidden');
  document.querySelector('.main-poster').classList.add('hidden');
};

function showSavedPoster() {
  document.querySelector('.saved-posters').classList.remove('hidden');
  document.querySelector('.main-poster').classList.add('hidden');

  savedPostersGrid.innerHTML = ``;

  for (let i = 0; i < savedPosters.length; i++) {
    let imageURL = savedPosters[i].imageURL;
    let title = savedPosters[i].title;
    let quote = savedPosters[i].quote;

    savedPostersGrid.innerHTML += `<article class="mini-poster">
                                    <img src="${imageURL}">
                                    <h2>${title}</h2>
                                    <h4>${quote}</h4>
                                  </article> `;
  };
};

function nvmBacktoMain() {
  document.querySelector('.poster-form').classList.add('hidden');
  document.querySelector('.main-poster').classList.remove('hidden');
};

function backToMain() {
  document.querySelector('.saved-posters').classList.add('hidden');
  document.querySelector('.main-poster').classList.remove('hidden');
};

function backToMainFromUnmotivationalPosters() {
  document.querySelector('.unmotivational-posters').classList.add('hidden');
  document.querySelector('.main-poster').classList.remove('hidden');
};

function showCreatePoster() {
  let imageURL = document.querySelector("#poster-image-url").value;
  let title = document.querySelector("#poster-title").value;
  let quote = document.querySelector("#poster-quote").value;

  currentPoster = createPoster(imageURL, title, quote);

  images.push(currentPoster.imageURL);
  titles.push(currentPoster.title);
  quotes.push(currentPoster.quote);

  // console.log(images)
  // console.log(titles)
  // console.log(quotes)

  document.querySelector(".poster-form").classList.add("hidden");

  document.querySelector(".poster-img").src = currentPoster.imageURL;
  document.querySelector(".poster-title").innerText = currentPoster.title;
  document.querySelector(".poster-quote").innerText = currentPoster.quote;

  document.querySelector(".main-poster").classList.remove("hidden");

  event.preventDefault();
};

function saveThisPoster() {
  let imageURL = document.querySelector(".poster-img").src;
  let title = document.querySelector(".poster-title").innerText;
  let quote = document.querySelector(".poster-quote").innerText;
  let posterAlreadyExists = false;

  for(let i = 0; i < savedPosters.length; i++) {
    if (savedPosters[i].imageURL === imageURL) {
      posterAlreadyExists = true;
      break;
    };
  };

  if (posterAlreadyExists === false) {
    currentPoster = createPoster(imageURL, title, quote);
    savedPosters.push(currentPoster);
  };
};

function showUnmotivationalPosters() {
  document.querySelector('.main-poster').classList.add('hidden');
  document.querySelector('.unmotivational-posters').classList.remove('hidden');
  
  // debugger;
  // console.log(firstTimeLoading)

  if (firstTimeLoading) {
    unmotivationalPostersGrid.innerHTML = ``;

    cleanData();

    for (let i = 0; i < cleanedPosterData.length; i++) {
      let imageURL = cleanedPosterData[i].imageURL;
      let title = cleanedPosterData[i].title;
      let quote = cleanedPosterData[i].quote;
  
      unmotivationalPostersGrid.innerHTML += `<article class="mini-poster">
                                                <img src="${imageURL}">
                                                <h2>${title}</h2>
                                                <h4>${quote}</h4>
                                              </article>`;
    };
    
    const miniPosters = document.querySelectorAll('.mini-poster');

    miniPosters.forEach(miniPoster => {
      miniPoster.addEventListener('dblclick', function(event) {
        if (event.target.tagName === 'IMG' || event.target.tagName === "H2" || event.target.tagName === "H4" || event.target.tagName === "ARTICLE") {
          debugger;
          console.log(event.target)
          if (miniPoster.hasChildNodes(event.target)) {
            miniPoster.remove();

            for (let i = 0; i < cleanedPosterData.length; i++) {
              let unmotivationalPosterValuesArray = Object.values(cleanedPosterData[i]);

              if (event.target.tagName === 'H2' && unmotivationalPosterValuesArray.includes(event.target.innerHTML) || 
                  event.target.tagName === 'H4' && unmotivationalPosterValuesArray.includes(event.target.innerHTML) ||
                  event.target.tagName === 'IMG' && unmotivationalPosterValuesArray.includes(event.target.getAttribute('src')) || 
                  event.target.tagName === 'ARTICLE' && unmotivationalPosterValuesArray.includes(event.target.children[0].getAttribute('src'))
                ) {   
                    firstTimeLoading = false;
                    cleanedPosterData.splice(i, 1);
                    break;
              };
            };
            console.log(cleanedPosterData)
          };
        };
      });
    });
  };
};

