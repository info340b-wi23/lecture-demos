'use strict';

//STATE
let puppyIsShown = true;


//DATA
const songArray = [
  { artist: "Queen", title: "Don't Stop Me Now", youtubeUrl: "https://www.youtube.com/watch?v=HgzGwKwLmgM" },
  { artist: "David Bowie", title: "Starman", youtubeUrl: "https://www.youtube.com/watch?v=rpO1U-nEgRU"
  },
  { artist: "Lil Nas X", title: "MONTERO (Call Me By Your Name)", youtubeUrl: "https://www.youtube.com/watch?v=6swmTBVI83k"
  },
  { artist: 'Rebecca Black', title: 'Friday', youtubeUrl: 'https://www.youtube.com/watch?v=kfVsfOSbJY0'}
];

const h1Elem = document.querySelector('h1');
console.log(h1Elem);

// const elem = document.querySelector('#dataSection h2');
// console.log(elem);

h1Elem.textContent = "I've been changed!";

const imgElem = document.querySelector('#puppySection img');
imgElem.src = "img/husky.jpg";
imgElem.alt = "a grown husky";

const headerElem = document.querySelector('header');
headerElem.classList.add('py-3');

//mapping operation
// take in a {} and return a <li>
function createSongLink(songObj){
  const aElem = document.createElement('a');
  aElem.textContent = songObj.artist + ' - ' + songObj.title;
  aElem.href = songObj.youtubeUrl;

  const newLiElem = document.createElement('li');
  newLiElem.appendChild(aElem); //puts the <a> in the <li>
  
  return newLiElem; //give back the `<li>`
}

//give me a [{}, {}], and I'll put it on the screen
function renderSongList(songObjArray) {
  const olElem = document.querySelector('#dataSection ol');
  //get rid of the old stuff
  olElem.innerHTML = '';

  for(const songObj of songObjArray) {
    const songHTML = createSongLink(songObj);
    olElem.appendChild(songHTML);
  }
}

renderSongList(songArray); //do the function!
// createSongLink(songArray[0]); //do the function!
// createSongLink(songArray[1]); //do the function!

function renderPuppy(){
  if(puppyIsShown) { //check the state
    imgElem.classList.remove('d-none');
    hideButton.textContent = "Hide";
  } 
  else {
    imgElem.classList.add('d-none');
    hideButton.textContent = "Show";
  }
}


//INTERACTIVITY

const hideButton = document.querySelector('#puppySection button');
//                          event type, whatToDoWhenPressedFunction
hideButton.addEventListener('click', function(event){
  // console.log("you clicked me!");

  //change the state
  puppyIsShown = !puppyIsShown; //boolean toggle

  //re-render
  renderPuppy();
})


//FORM SUBMISSION
const formElem = document.querySelector('form');

formElem.addEventListener('submit', function(event) {
  event.preventDefault(); //don't do normal submission
  console.log("you submitted me!");

  //modify our state data
  const artistInput = document.querySelector('#artistInput');
  const whatArtistTyped = artistInput.value;
  const titleValue = document.querySelector('#titleInput').value;
  const youtubeValue = document.querySelector('#urlInput').value;

  const newSongObj = {}
  newSongObj.artist = whatArtistTyped;
  newSongObj.title = titleValue;
  newSongObj.youtubeUrl = youtubeValue;
  // const newSongObj = {
  //   artist: whatArtistTyped,
  //   title: titleValue,
  //   youtubeUrl: youtubeValue
  // }

  console.log(newSongObj);
  songArray.push(newSongObj); //add to the array

  //re-render
  renderSongList(songArray);

  artistInput.value = '';
  document.querySelector('#titleInput').value = '';

});

