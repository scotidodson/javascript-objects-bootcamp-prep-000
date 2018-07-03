var playlist = { hozier: "sedated" };

function updatePlaylist(playlist, artistName, songTitle) {
  Object.assign({}, playlist, { [`${artistName}`]: `${songTitle}` });
  return playlist;
}
