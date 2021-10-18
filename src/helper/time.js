const timeFormatter = (time) => {
  time = parseInt(time)
  let seconds = time % 60;
  let minutes = (time - seconds) / 60;
  seconds = (seconds < 10 ? "0" + seconds : seconds);
  minutes = (minutes < 10 ? "0" + minutes : minutes);
  return minutes + ":" + seconds;
}

module.exports = {
  timeFormatter
}
