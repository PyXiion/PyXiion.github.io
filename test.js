
var e = document.createElement('div');
e.innerHTML = 
`
<div id="player"></div>

<style>
#player {
	position: fixed;
	top: 0px;
	left: 0px;
	pointer-events: none;
  	cursor: default;
}
</style>>
`;
while(e.firstChild) {
    document.body.appendChild(e.firstChild);
}

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

function onYouTubeIframeAPIReady() {
	player = new YT.Player('player', {
		height: '100%',
		width: '100%',
		videoId: 'dQw4w9WgXcQ',
		playerVars: { /* 'autoplay': 1, */'controls': 0 },
		events: {
		'onReady': onPlayerReady,
		'onStateChange': onPlayerStateChange
		}
	});
}
function onPlayerReady(event) {
	event.target.setVolume(100)
	event.target.playVideo();
}

function onPlayerStateChange(event) {
	if (event.data == YT.PlayerState.ENDED) {
		stopVideo();
	}
}
function stopVideo() {
	player.stopVideo();
	var elem = document.getElementById("player");
	elem.parentNode.removeChild(elem);
}
