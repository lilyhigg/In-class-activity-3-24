var video = document.querySelector("#player1");
var volume_display = document.querySelector("#volumeDisplay");

window.addEventListener("load", function() {
    console.log("Hi")
})

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	volume_display.innerHTML = video.volume *100 + "%"
})

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
})

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Video");
	console.log("Duration: " + video.duration + " seconds");
	console.log("current location is " + video.currentTime)
	newTime = video.currentTime + 20
	if (newTime > video.duration){
		console.log("Exceeded length")
		newTime = 0
		video.pause()
	}
	video.currentTime = newTime
	console.log("current location is " + video.currentTime)
})

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Style Video");
	video.classList.toggle('oldSchool')
})

document.querySelector("#muteButton").addEventListener("click", function() {
	console.log("In Toggle Mute");
	console.log(video.muted)
	muteButton = document.querySelector("#muteButton")
	if (video.muted){
		video.muted = false;
		muteButton.innerHTML = "Mute"

	}
	else{
		video.muted = true;
		muteButton.innerHTML = "Unmute"
	}
})
