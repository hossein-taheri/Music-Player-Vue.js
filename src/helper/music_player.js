let audio = null;
let index = 0;
let list = [];

const loadList = async (linklist) => {
  list = linklist;
  index = 0;
  await load();
}
const load = async () => {
  if (audio) {
    audio.pause();
  }
  audio = new Audio(list[index]);
  await audio.play();

  audio.onended = async () => {
    index++;
    if (index === list.length) {
      index = 0;
    }
    await load();
  }
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
const next = async () => {
  index++;
  if (index === list.length) {
    index = 0;
  }
  await load();
}
const previous = async () => {
  index--;
  if (index < 0) {
    index = list.length - 1;
  }
  await load();
}


module.exports = {
  loadList,
  play,
  pause,
  next,
  previous
}
