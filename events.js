var outputEl = document.getElementById('output-target');
// defines the article, event listener will be added to children elements, sections
var sectionClick = document.querySelector('article');
// adds event listener to children elements of article to show the section name of each section element
sectionClick.addEventListener('click', showcase, false);

// 
function showcase(section) {
  console.log(section.target.innerHTML);
  var sectionShowcase = section.target.innerHTML;
  outputEl.innerHTML = 'You clicked on the ' + sectionShowcase + 'section!'

  };
// }


  

// getSection(sec).addEventListener('click', function(){
//   console.log('sec');
// });

