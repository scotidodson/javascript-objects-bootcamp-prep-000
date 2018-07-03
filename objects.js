var playlist = { hozier: "sedated"};

function updatePlaylist(playlist, artistName, songName) {
  return Object.assign({}, playlist, { [artistName]:songName });
}
