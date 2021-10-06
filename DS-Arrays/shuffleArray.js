const playList = [
  "Ariana",
  "Nikki",
  "Weeknd",
  "WizKhalifa",
  "RickRoss",
  "Bieber",
  "Adam",
];

const shuffleArray = (songs) => {
  //Check Input
  if (!songs) return;

  for (let i = 0; i < songs.length; i++) {
    const j = Math.floor(Math.random() * songs.length);
    console.log(j);
    const temp = songs[i];
    songs[i] = songs[j];
    songs[j] = temp;
  }
  return songs;
};

console.log(shuffleArray(playList));

