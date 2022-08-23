export const dateConverter = (date) => {
  const daysWeek = [
    "Sonntag",
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag",
  ];

  const month = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember",
  ];

  const day = date.getDate();
  const dayNumber = date.getDay();
  const monthNumber = date.getMonth();

  const dayDate = daysWeek[dayNumber];
  const monthDate = month[monthNumber];

  return { day, dayDate, monthDate };
};

export const tempConverter = (temp, unit = "Kelvin") => {
  if ((unit = "Kelvin")) {
    const convertedTemp = (temp - 273.15).toFixed(2);
    return convertedTemp;
  }
  return null;
};

export const timestampConverter = (timestamp) => {
  const date = new Date(timestamp * 1000);
  return date;
};

export const groupArray = (array, counter) => {
  const today = array.slice(0, counter);
  const second = array.slice(counter, counter + 8);
  const third = array.slice(counter + 8, counter + 2 * 8);
  const fourth = array.slice(counter + 2 * 8, counter + 3 * 8);
  const fifth = array.slice(counter + 3 * 8, counter + 4 * 8);
  return [today, second, third, fourth, fifth ];
};

export function findMaxTemp (array) {
  let max = array[0].tempMax;
  if (array.length > 1) {
    for (let i = 1; i < array.length; i++) {
       if (array[i].tempMax > max) {
        max = array[i].tempMax;
      }
    }
  }
  return max;
};

export const findMinTemp = (array) => {
  let min = array[0].tempMin;
  if (array.length > 1) {
    for (let i = 1; i < array.length; i++) {
      if (array[i].tempMin < min) {
        min = array[i].tempMin;
      }
    }
  }
  return min;
};

export const averageTemp = (array) => {
  let sum = +0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + Number(array[i].temp);
  }
  const average = (sum / array.length).toFixed(2);
  return average;
};
