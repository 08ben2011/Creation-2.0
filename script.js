const cards = document.querySelectorAll(".card__inner");

cards.forEach((card) => {
  card.addEventListener("click", function () {
    card.classList.toggle("is-flipped");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const originalText = `
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Swans are the largest extant
      members of the waterfowl family Anatidae and are among the
      largest flying birds. Swans are almost entirely herbivorous,
      although they may eat small amounts of aquatic animals.
  `;

  function splitParagraph() {
    let summaryElement = document.getElementById("summary");
    if (summaryElement) {
      let text = summaryElement.textContent;
      let splitText = text
        .split(".")
        .filter((sentence) => sentence.trim() !== "")
        .map((sentence) => sentence.trim() + ".")
        .join("<br>");
      summaryElement.innerHTML = splitText;
    }
  }

  function handleResize() {
    let summaryElement = document.getElementById("summary");
    if (summaryElement) {
      if (window.innerWidth <= 600) {
        // Adjust the screen size as needed
        summaryElement.classList.add("split");
        splitParagraph();
      } else {
        summaryElement.classList.remove("split");
        summaryElement.innerHTML = originalText;
      }
    }
  }

  window.addEventListener("resize", handleResize);
  handleResize(); // Initial check
});

function splitTitle() {
  let titleEditor = document.getElementById("title");
  let titleText = titleEditor.innerText;
  let splitText = titleText.split(":");
  let theMeaning = splitText[1];

  let meaningElement = document.createElement("span");
  meaningElement.innerText = theMeaning;
  meaningElement.classList.add("styled-meaning");

  // Reconstruct the full text with the styled meaning part
  titleEditor.innerHTML = `${splitText[0]}: ${meaningElement.outerHTML}`;
}

splitTitle();

function shuffleElements() {
  // Get all elements with class 'animals'
  var elements = document.querySelectorAll(".animals");

  // Convert NodeList to array for easier manipulation
  var elementsArray = Array.from(elements);

  // Shuffle the array
  elementsArray.sort(() => Math.random() - 0.5);

  // Loop through all elements and re-append them to the container in shuffled order
  var container = document.querySelector(".container");
  container.innerHTML = ""; // Clear the container
  elementsArray.forEach(function (element) {
    container.appendChild(element);
  });
}

// Call shuffleElements function when the page loads
window.addEventListener("load", shuffleElements);

// filter

function filterCreation(type) {
  // Get all elements with class 'animals'
  var elements = document.querySelectorAll(".animals");

  // Loop through all elements
  elements.forEach(function (element) {
    // Check if the type is 'all'
    if (type === "all") {
      // If type is 'all', display all elements
      element.style.display = "block";
    } else {
      // Check if the element has the specified type class
      if (element.classList.contains(type)) {
        // If the element matches the specified type, display it
        element.style.display = "block";
      } else {
        // If the element does not match the specified type, hide it
        element.style.display = "none";
      }
    }

    // Check if either mammals or birds button is pressed
    var mammalButton = document.getElementById("mammalsMammals");
    var birdButton = document.getElementById("birdsBirds");
    var virtueButton = document.getElementById("virtue");
    var viceButton = document.getElementById("vice");

    // Check if birds and virtues are pressed
    if (
      birdButton.classList.contains("pressed") &&
      virtueButton.classList.contains("pressed")
    ) {
      // Display only birds with virtues
      if (
        element.classList.contains("bird") &&
        element.classList.contains("virtue")
      ) {
        element.style.display = "block";
      } else {
        element.style.display = "none";
      }
    }

    // Check if birds and vices are pressed
    if (
      birdButton.classList.contains("pressed") &&
      viceButton.classList.contains("pressed")
    ) {
      // Display only birds with vices
      if (
        element.classList.contains("bird") &&
        element.classList.contains("vice")
      ) {
        element.style.display = "block";
      } else {
        element.style.display = "none";
      }
    }

    // Check if mammals and virtues are pressed
    if (
      mammalButton.classList.contains("pressed") &&
      virtueButton.classList.contains("pressed")
    ) {
      // Display only mammals with virtues
      if (
        element.classList.contains("mammal") &&
        element.classList.contains("virtue")
      ) {
        element.style.display = "block";
      } else {
        element.style.display = "none";
      }
    }

    // Check if mammals and vices are pressed
    if (
      mammalButton.classList.contains("pressed") &&
      viceButton.classList.contains("pressed")
    ) {
      // Display only mammals with vices
      if (
        element.classList.contains("mammal") &&
        element.classList.contains("vice")
      ) {
        element.style.display = "block";
      } else {
        element.style.display = "none";
      }
    }
  });
}

document.getElementById("virtue").addEventListener("click", function () {
  var isPressed = this.classList.toggle("pressed");
  if (isPressed) {
    // If Virtues button is pressed, unpress Vices button
    var viceButton = document.getElementById("vice");
    if (viceButton.classList.contains("pressed")) {
      viceButton.classList.remove("pressed");
    }
    // Press Virtues button
    this.classList.add("pressed");
    filterCreation("virtue");
  } else {
    // If Virtues button is released, show all
    filterCreation("all");
  }
});

document.getElementById("vice").addEventListener("click", function () {
  var isPressed = this.classList.toggle("pressed");
  if (isPressed) {
    // If Vices button is pressed, unpress Virtues button
    var virtueButton = document.getElementById("virtue");
    if (virtueButton.classList.contains("pressed")) {
      virtueButton.classList.remove("pressed");
    }
    // Press Vices button
    this.classList.add("pressed");
    filterCreation("vice");
  } else {
    // If Vices button is released, show all
    filterCreation("all");
  }
});

document
  .getElementById("mammalsMammals")
  .addEventListener("click", function () {
    var isPressed = this.classList.toggle("pressed");
    if (isPressed) {
      // If Mammals button is pressed, hide Birds button
      var birdButton = document.getElementById("birdsBirds");
      if (birdButton.classList.contains("pressed")) {
        birdButton.classList.remove("pressed");
      }
      // Press Mammals button
      this.classList.add("pressed");
      filterCreation("mammal");
    } else {
      // If Mammals button is released, show all
      filterCreation("all");
    }
  });

document.getElementById("birdsBirds").addEventListener("click", function () {
  var isPressed = this.classList.toggle("pressed");
  if (isPressed) {
    // If Birds button is pressed, hide Mammals button
    var mammalButton = document.getElementById("mammalsMammals");
    if (mammalButton.classList.contains("pressed")) {
      mammalButton.classList.remove("pressed");
    }
    // Press Birds button
    this.classList.add("pressed");
    filterCreation("bird");
  } else {
    // If Birds button is released, show Mammals
    filterCreation("all");
  }
});

document.getElementById("allShow").addEventListener("click", function () {
  // Remove "pressed" class from all buttons
  var buttons = document.querySelectorAll(".btn");
  buttons.forEach(function (button) {
    button.classList.remove("pressed");
  });
  // Reset the filter
  filterCreation("all");
});

function dateAndTime() {
  const currentdate = new Date();
  const date = document.getElementById("date");
  var dateTime =
    currentdate.getDate() +
    "/" +
    (currentdate.getMonth() + 1) +
    "/" +
    currentdate.getFullYear() +
    "  " +
    currentdate.getHours() +
    ":" +
    currentdate.getMinutes() +
    ":" +
    currentdate.getSeconds();

  date.textContent = dateTime;
}

setInterval(dateAndTime, 1000);

const words = ["staring", "looking"];
const colors = ["word1", "word2"];
let i = 0;
let timer;

function typingEffect() {
  let word = words[i].split("");
  let colorClass = colors[i];
  var loopTyping = function () {
    if (word.length > 0) {
      document.getElementById(
        "word"
      ).innerHTML += `<span class="${colorClass}">${word.shift()}</span>`;
    } else {
      deletingEffect();
      return false;
    }
    timer = setTimeout(loopTyping, 500);
  };
  loopTyping();
}

function deletingEffect() {
  let word = words[i].split("");
  var loopDeleting = function () {
    if (word.length > 0) {
      word.pop();
      document.getElementById("word").innerHTML = word.join("");
    } else {
      if (words.length > i + 1) {
        i++;
      } else {
        i = 0;
      }
      typingEffect();
      return false;
    }
    timer = setTimeout(loopDeleting, 200);
  };
  loopDeleting();
}

typingEffect();
