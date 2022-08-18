const useTimestampConverter = (timestamp) => {
  const date = new Date(timestamp*1000);
  return date;
};
export default useTimestampConverter;
