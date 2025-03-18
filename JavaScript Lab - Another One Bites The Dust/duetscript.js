const lyrics = [
    { time: 0, text: "Intro", singer: "none" },
    { time: 5.1, text: "(Buddy you're a boy, make a big noise)", singer: "freddie" },
    { time: 8.5, text: "(Playing in the street, gonna be a big man someday)", singer: "freddie" },
    { time: 11.2, text: "Wyclef: 'Yo, we gotta keep it movin'", singer: "wyclef" },
    { time: 14.5, text: "(You got mud on your face, you big disgrace)", singer: "freddie" },
    { time: 17.0, text: "Wyclef: 'Ha, you ain't seen nothing yet'", singer: "wyclef" },
    { time: 20.1, text: "(We will, we will rock you)", singer: "freddie" },
    { time: 23.3, text: "Wyclef: 'Yeah, yeah'", singer: "wyclef" },
    { time: 26.0, text: "(We will, we will rock you)", singer: "freddie" },
    { time: 30.1, text: "Wyclef: 'Ha, ha, ha'", singer: "wyclef" },
    { time: 34.0, text: "(We will, we will rock you)", singer: "freddie" },
    { time: 38.1, text: "(Buddy you're a young man, hard man)", singer: "freddie" },
    { time: 41.3, text: "(Shouting in the street, gonna take on the world someday)", singer: "freddie" },
    { time: 45.0, text: "Wyclef: 'Yo, we gotta keep it movin'", singer: "wyclef" },
    { time: 48.5, text: "(You got blood on your face, you big disgrace)", singer: "freddie" },
    { time: 52.0, text: "Wyclef: 'Ha, you ain't seen nothing yet'", singer: "wyclef" },
    { time: 56.0, text: "(We will, we will rock you)", singer: "freddie" },
    { time: 59.5, text: "Wyclef: 'Yeah, yeah'", singer: "wyclef" },
    { time: 63.0, text: "(We will, we will rock you)", singer: "freddie" },
    { time: 67.2, text: "(Buddy you're an old man, poor man)", singer: "freddie" },
    { time: 71.5, text: "(Pleading with your eyes, gonna make you some peace someday)", singer: "freddie" },
    { time: 75.0, text: "Wyclef: 'Yo, we gotta keep it movin'", singer: "wyclef" },
    { time: 78.5, text: "(You got mud on your face, big disgrace)", singer: "freddie" },
    { time: 82.0, text: "Wyclef: 'Ha, you ain't seen nothing yet'", singer: "wyclef" },
    { time: 86.0, text: "(We will, we will rock you)", singer: "freddie" },
    { time: 89.5, text: "Wyclef: 'Yeah, yeah'", singer: "wyclef" },
    { time: 93.0, text: "(We will, we will rock you)", singer: "freddie" },
    { time: 97.3, text: "(We will, we will rock you)", singer: "freddie" },
    { time: 100.0, text: "Wyclef: 'You ain't seen nothing yet'", singer: "wyclef" },
    { time: 104.0, text: "(We will, we will rock you)", singer: "freddie" },
    { time: 108.0, text: "Wyclef: 'Yeah, yeah'", singer: "wyclef" },
    { time: 112.5, text: "(We will, we will rock you)", singer: "freddie" },
    { time: 116.0, text: "Wyclef: 'Ha, ha, ha, ha'", singer: "wyclef" },
    { time: 120.0, text: "(We will, we will rock you)", singer: "freddie" }
  ];
  
  let currentLyricIndex = 0;
  const audio = document.getElementById("audio");
  const lyricFreddieElement = document.getElementById("lyric-freddie");
  const lyricWyclefElement = document.getElementById("lyric-others");
  
  audio.addEventListener("play", () => {
    setInterval(displayLyrics, 100);
  });
  
  function displayLyrics() {
    const currentTime = audio.currentTime;
  
    // Check if we need to display a new lyric
    if (
      currentLyricIndex < lyrics.length &&
      currentTime >= lyrics[currentLyricIndex].time
    ) {
      const lyric = lyrics[currentLyricIndex];
  
      // Check the singer and update the corresponding lyric
      if (lyric.singer === "freddie") {
        lyricFreddieElement.textContent = lyric.text;
        lyricWyclefElement.textContent = ""; // Clear Wyclef's text
      } else if (lyric.singer === "wyclef") {
        lyricWyclefElement.textContent = lyric.text;
        lyricFreddieElement.textContent = ""; // Clear Freddie's text
      } else {
        lyricFreddieElement.textContent = "";
        lyricWyclefElement.textContent = "";
      }
  
      currentLyricIndex++;
    }
  }