var playlist = { hozier: "sedated"};

function updatePlaylist(obj, key, value) {
  return Object.assign({}, obj, { [key]:value });
}
