const useDateConverter = (date) => {
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

export default useDateConverter;
