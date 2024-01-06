let mainctn=document.querySelector('.main-content')
let logoo=document.querySelector('.logo');
logoo.addEventListener("click",(e)=>{
    window.open('index.html','_blank')
})
var storedData = localStorage.getItem('userData');
var retrievedData = JSON.parse(storedData);
let more=document.createElement('a');
more.href=`https://www.google.com/search?q=${retrievedData.movie} movie`
more.innerHTML='Check out more....';
mainctn.appendChild(more);

let title=document.createElement('div');
title.innerHTML=retrievedData.movie;
title.classList.add('title');
mainctn.appendChild(title);



const apiKey = 'AIzaSyC67L-t8u2o4kfudVhVUCqCH5DDeUxfPPc';
function onPlayerReady(event) {
    event.target.playVideo();
  }
const searchQuery = `${retrievedData.movie} trailer`;

fetch(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&part=snippet&q=${searchQuery}&type=video`)
  .then(response => response.json())
  .then(data => {
    var videoId = data.items[0].id.videoId;

    // Initialize the YouTube player
    new YT.Player('youtube-player', {
      height: '360',
      width: '640',
      videoId: videoId,
      events: {
        'onReady': onPlayerReady,
      }
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });

