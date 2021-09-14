//1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS
/* these are the three variables that store references 
to the name button, story button, and the <p> in the HTML*/

const customName = document.getElementById('customname'); //id 
const randomize = document.querySelector('.randomize'); //class
const story = document.querySelector('.story'); //class


function randomValueFromArray(array){ //takes a random value from the array
    const random = Math.floor(Math.random()*array.length);
    return array[random];
  }


  let storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
  //first string stored into storyText
  //storing values into the arrays
  let insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
  let insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
  let insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'] ;

  //adds a click event listener
  randomize.addEventListener('click', result);

function result() {
    let newStory = storyText; 
// so a new story is generated every time the button is pressed
    //three new variables
    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);

    newStory = newStory.replace(':insertx:',xItem);
    newStory = newStory.replace(':insertx:',xItem);
    newStory = newStory.replace(':inserty:',yItem);
    newStory = newStory.replace(':insertz:',zItem);

  if(customName.value !== '') {
    let name = customName.value;
    newStory = newStory.replace('Bob',name);

  }

  if(document.getElementById('uk').checked) {
    let weight = Math.round(300/14) + ' stones';
    let temperature =  Math.round((94-32)*(5/9)) + ' centigrade';
    newStory = newStory.replace('94 fahrenheit', temperature);
    newStory = newStory.replace('300 pounds', weight);

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}