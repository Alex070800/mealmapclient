//5:00 - 12:00 утро
//12:00 - 16:00 день
//16:00 - 23:00 вечер
//23:00 - 5:00 ночь
export const getWelcomeText = () => {
  let hours = new Date().getHours();
  if (hours >= 5 && hours < 12) {
    return "Доброе утро,";
  } else if (hours >= 12 && hours < 16) {
    return "Добрый день,";
  } else if (hours >= 16 && hours < 23) {
    return "Добрый вечер,";
  } else if (hours >= 23 && hours < 5) {
    return "Доброй ночи,";
  } else {
    return "Привет,";
  }
};
