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
function hoverIn (h1) {
  outputEl.innerHTML = 'You\'re in the danger zone!';
};
function hoverOut (h1) {
  outputEl.innerHTML = 'You\'ve left the danger zone!';
};

  


