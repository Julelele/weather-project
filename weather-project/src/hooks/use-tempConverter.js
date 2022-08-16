const useTempConverter = (temp, unit = "Kelvin") => {
  if ((unit = "Kelvin")) {
    const convertedTemp = (temp - 273.15).toFixed(2);
    return convertedTemp;
  }
  return null;
};

export default useTempConverter;
