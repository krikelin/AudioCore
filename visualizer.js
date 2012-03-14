var sp = getSpotifyApi(1);
var models = sp.require("sp://import/scripts/api/models");
var views = sp.require("sp://import/scripts/api/views");
var auth = sp.require("sp://import/scripts/api/auth");
var jquery = sp.require("sp://geomodium/js/jquery-1.7.1.min");
/***
Audio data delivery
@param hertz Hertz
@param preHertz previous Hertz
***/
function AudioData(hertz,preHertz) {
	this.hertz = hertz;
	this.previousHertz = preHertz;
/*	this.toString = function() {
		return hertz + "hz";
	}*/
}
var preAudioData = 0;
/**
This is a wrapper function for monitoring audio data,
@returns audioData AudioData object if playing, NULL otherwise
*/
console.log(models.player);
models.player.getAudioData = function() {
	if(models.player.playing) {
		var rate = 20;
		var i = (Math.sin(models.player.position)) +(Math.random()*rate)-(rate/2);
		
		var c = new AudioData(i, preAudioData);
		preAudioData = i;
		return c;
	}
	return null; // Silent
};

// Extend models.EVENT with AUDIO_DATA
models.EVENT.AUDIODELIVERY = 0x11215;

setInterval(function() {
	models.player.notify(models.EVENT.AUDIODELIVERY, models.player.getAudioData());
}, 100);