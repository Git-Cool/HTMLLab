const lyrics = [
    { time: 0, text: "Introduction - David Byrne" },
    { time: 30, text: "I can't seem to face up to the facts" },
    { time: 35, text: "I'm tense and nervous and I can't relax" },
    { time: 40, text: "I can't sleep because my bed's on fire" },
    { time: 45, text: "Don't touch me I'm a real live wire" },
    { time: 50, text: "Psycho Killer, qu'est-ce que c'est?" },
    { time: 55, text: "Fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa..." },
    { time: 60, text: "Run, run, run, run, run, run, run away, oh-oh-oh" },
    { time: 65, text: "Put in the lyrics and adjust timing" },
    { time: 70, text: "Psycho Killer, qu'est-ce que c'est?" },
    { time: 75, text: "Fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa..." },
    { time: 80, text: "Run, run, run, run, run, run, run away, oh-oh-oh" },
    { time: 85, text: "Psycho Killer, qu'est-ce que c'est?" },
    { time: 90, text: "Fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa..." },
    { time: 95, text: "Run, run, run, run, run, run, run away, oh-oh-oh" },
    { time: 100, text: "You start a conversation, you can't even finish it" },
    { time: 105, text: "You're talking a lot, but you're not saying anything" },
    { time: 110, text: "When I have nothing to say, my lips are sealed" },
    { time: 115, text: "Say something once, why say it again?" },
    { time: 120, text: "Psycho Killer, qu'est-ce que c'est?" },
    { time: 125, text: "Fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa..." },
    { time: 130, text: "Run, run, run, run, run, run, run away, oh-oh-oh" },
    { time: 135, text: "Psycho Killer, qu'est-ce que c'est?" },
    { time: 140, text: "Fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa..." },
    { time: 145, text: "Run, run, run, run, run, run, run away, oh-oh-oh" },
    { time: 150, text: "Ay-ya-ya-ya-ya-ya, ooh" },
    { time: 155, text: "Ce que j'ai fait, ce soir-là" },
    { time: 160, text: "Ce qu'elle a dit, ce soir-là" },
    { time: 165, text: "Réalisant mon espoir" },
    { time: 170, text: "Je me lance vers la gloire, okay" },
    { time: 175, text: "Yeah, yeah, yeah, yeah, yeah, yeah, yeah, yeah, yeah, yeah" },
    { time: 180, text: "We are vain and we are blind" },
    { time: 185, text: "I hate people when they're not polite" },
    { time: 190, text: "Psycho Killer, qu'est-ce que c'est?" },
    { time: 195, text: "Fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa..." },
    { time: 200, text: "Run, run, run, run, run, run, run away, oh-oh-oh" },
    { time: 205, text: "Psycho Killer, qu'est-ce que c'est?" },
    { time: 210, text: "Fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa..." },
    { time: 215, text: "Run, run, run, run, run, run, run away, oh-oh-oh" },
    { time: 220, text: "Ai-ya-ya-ya-ya-ya, ooh" },
    { time: 225, text: "Psycho Killer, qu'est-ce que c'est?" },
    { time: 230, text: "Fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa..." },
    { time: 235, text: "Run, run, run, run, run, run, run away, oh-oh-oh" },
    { time: 240, text: "Psycho Killer, qu'est-ce que c'est?" },
    { time: 245, text: "Fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa..." },
    { time: 250, text: "Run, run, run, run, run, run, run away, oh-oh-oh" },
    // Add more lines if necessary, following the pattern above
  ];
  
  let currentLyricIndex = 0;
  const audio = document.getElementById("audio");
  const lyricElement = document.getElementById("lyric");
  
  audio.addEventListener("play", () => {
    setInterval(displayLyrics, 100); // Update lyrics every 100ms for better accuracy
  });
  
  function displayLyrics() {
    const currentTime = audio.currentTime;
  
    // Find the current lyric based on time
    if (
      currentLyricIndex < lyrics.length &&
      currentTime >= lyrics[currentLyricIndex].time
    ) {
      lyricElement.textContent = lyrics[currentLyricIndex].text;
      currentLyricIndex++;
    }
  }