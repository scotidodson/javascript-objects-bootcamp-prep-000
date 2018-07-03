var playlist = new Object({ hozier: "sedated" });

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  var meals = { playlist: "artistName"
}