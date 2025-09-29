const handleDatetime = (datetime: Date) =>
  datetime.toLocaleString("en-US", {
    timeZone: "Asia/Ho_Chi_Minh",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });

const getRandomPastelColor = () => {
  const _maxHue = 360;
  const hue = Math.floor(Math.random() * _maxHue);
  return `hsl(${hue}, 70%, 80%)`;
};

export { getRandomPastelColor, handleDatetime };
