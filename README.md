# Audio data fetching in Spotify Apps
This app is a working Spotify App that simulates the ability to get access to the stream. This make it possible for developers
to create their own visualizers, even if the audio data is not real.

## Example
This example attach an listener to the custom event AUDIODELIVERY

				models.player.observe(models.EVENT.AUDIODELIVERY, function(audioData) {	
					
					if(audioData) {
						// Do whatever with the audio data
					}
				});
				
The AudioData is delivered as an AudioData object containing two properties: hertz and preHertz. It are a simulation of the current hertz and can be used for drawing.