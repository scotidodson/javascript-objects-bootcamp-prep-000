var playlist = { hozier: "sedated" };

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, { [`${artistName}`]: `${songTitle}` });
}
