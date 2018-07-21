# Podopto

The lecture recording and distrubtion system used by VUW, Panopto, allows you to subscribe to a course's lectures as a podcast. This is useful, but the recordings are often a a bit crappy.

* Usually only audio in the right channel.
* Lots of audio noise, making it hard to hear.
* Even playing it back at full volume, recordings are often too quiet.
* It all video or just audio. No option for audio + slides.

Podopto is a simple middle-layer that attempts to solve some of these issues.

* Detects stereo recordings where only one channel is being used and makes it mono.
* Runs audio through a noise removal filter and an equaliser optimised for spoken words.
* Normalises recording volume.
* Identifies the video stream showing the slides and attempts to pull out each slide and use it as the album art.

This is still experimental, but it works well for me. Open an issue if you find any problems or have feature requests. PRs also welcome.
