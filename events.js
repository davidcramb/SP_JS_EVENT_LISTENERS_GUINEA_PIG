var outputEl = document.getElementById('output-target');
// defines the article, event listener will be added to children elements, sections
var sectionClick = document.querySelector('article');
// adds event listener to children elements of article to show the section name of each section element
sectionClick.addEventListener('click', showcase, false);

// This function outputs the section name to the output element, ran from the event listener
function showcase(section) {
  var sectionShowcase = section.target.innerHTML;
  outputEl.innerHTML = 'You clicked on the ' + sectionShowcase + ' section!'
};

// Variable grabs the H1 Element, Event Listeners activate for hovering over and out of the field.
var h1Hover = document.querySelector('h1');
h1Hover.addEventListener('mouseover', hoverIn, false);
h1Hover.addEventListener('mouseout', hoverOut, false);
// Changes outputEl text when the mouse hovers on and out of the H1 Element
function hoverIn () {
  outputEl.innerHTML = 'You moved your mouse over the header.';
};
function hoverOut () {
  outputEl.innerHTML = 'You left me!! For a younger element, too!';
};
// Grabs the Input Text element
var userInput = document.getElementById('keypress-input');
// Adds a keyboard event listener on userInput, to run the addtoDOM() function
userInput.addEventListener('keypress', addtoDOM, false);

// Outputs the text from the input field and mirrors it to the output element (sort of)
function addtoDOM () {
    function getInputValue (input) {
    input = input.value;
    return input;
    };
  var input = getInputValue(userInput);
  outputEl.innerHTML = input;
};

//Makes guinea-pig id text blue
var blueButton = document.getElementById('add-color');
blueButton.addEventListener('click', function() {
  var blue = document.getElementById('guinea-pig');
  blue.classList.toggle('bluetext');
});
var hulkButton = document.getElementById('make-large');
hulkButton.addEventListener('click', function() {
  var hulk = document.getElementById('guinea-pig');
  hulk.classList.toggle('hulk');
});

var captureButton = document.getElementById('add-border');
captureButton.addEventListener('click', function() {
  var border = document.getElementById('guinea-pig');
  border.classList.toggle('addborder');
});
var roundButton = document.getElementById('add-rounding');
roundButton.addEventListener('click', function() {
  var rounding = document.getElementById('guinea-pig');
  rounding.classList.toggle('rounding');
});



  


