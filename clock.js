const hoursWordMap = [
  ,
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
];

const getTime = () => {
  const currentDate = new Date();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();

  return [hours > 12 ? hours - 12 : hours, minutes, seconds];
};

export const getWords = () => {
  let [hours, minutes, seconds] = getTime();
  const words = [];

  if (minutes < 5) words.push(hoursWordMap[hours], "oclock");
  else if (minutes >= 5 && minutes < 40) {
    words.push(hoursWordMap[hours], "past");

    if (minutes >= 5 && minutes < 10) words.push("m_five");
    else if (minutes >= 10 && minutes < 15) words.push("m_ten");
    else if (minutes >= 15 && minutes < 20) words.push("quarter");
    else if (minutes >= 20 && minutes < 30) words.push("twenty", "m_five");
    else if (minutes >= 30 && minutes < 40) words.push("half");
  } else if (minutes >= 40) {
    hours += 1;
    if (hours == 13) hours = 1;
    words.push(hoursWordMap[hours], "to");
    if (minutes >= 40 && minutes < 45) words.push("twenty");
    else if (minutes >= 45 && minutes < 50) words.push("quarter");
    else if (minutes >= 50 && minutes < 55) words.push("m_ten");
    else if (minutes >= 55 && minutes <= 59) words.push("m_five");
  }

  return ["it", "is", ...words];
};
