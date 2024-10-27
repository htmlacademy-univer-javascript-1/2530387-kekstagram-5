let lineLength = (string, length) => {
  return string.length <= length
};

let palindrome = (string) => {
  let convertedStr = string.replaceAll(' ', '').toLowerCase();
  for (let i = 0; i < convertedStr.length / 2; i++) {
    if (convertedStr[i] != convertedStr[convertedStr.length - 1 - i]) {
      return false
    }
  }
  return true
};

let translationInMinutes = (time) => {
  time = time.split(':').map(string => +string);
  return time[0] * 60 + time[1];
};

let timeManagement = (startWork, endWork, startMeet, timeMeet) => {
  let startW = translationInMinutes(startWork);
  let endW = translationInMinutes(endWork);
  let startM = translationInMinutes(startMeet);

  return startW <= startM && startM + timeOfMeeting <= endW
};