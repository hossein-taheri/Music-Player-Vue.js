let audio = null;
let index = 0;
let list = [];

const loadList = async (linklist) => {
  if (audio) {
    audio.pause();
  }

  list = linklist;

  index = 0;
  audio = new Audio(linklist[index]);

  audio.onended(() => {
    audio.pause();
    index++;
    if (index === linklist.length) {
      index = 0;
    }
    audio = new Audio(linklist[index]);
    audio.play();
  })
}

const play = async () => {
  if (audio) {
    await audio.play();
    return true;
  } else {
    return false;
  }
}
const pause = async () => {
  if (audio) {
    await audio.pause();
    return true;
  } else {
    return false;
  }
}
const previous = async () => {
  //TODO previous
}
const next = async () => {
  //TODO next
}



module.exports = {
  loadList,
  play,
  pause
}
