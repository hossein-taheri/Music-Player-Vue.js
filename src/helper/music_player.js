let audio = null;
let index = 0;
let list = [];
let footer = null;


const setFooter = (footer) => {
  this.footer = footer;
}

const loadList = async (linklist) => {
  list = linklist;
  index = 0;
  await load();
}
const load = async () => {
  if (audio) {
    audio.pause();
  }
  audio = new Audio(list[index].link);
  await play();

  audio.onended = async () => {
    await next();
  }
  audio.onplay = () => {
    this.footer.playing = true;
  }
  audio.onpause = () => {
    this.footer.playing = false;
  }
}

const play = async () => {
  if (!audio) {
    return
  }
  await audio.play();
  this.footer.playing = true;
}
const pause = async () => {
  if (!audio) {
    return
  }
  await audio.pause();
  this.footer.playing = false;
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
  previous,
  setFooter
}
