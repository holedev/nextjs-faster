const getRandomPastelColor = () => {
  const maxHue = 360;
  const hue = Math.floor(Math.random() * maxHue);
  return `hsl(${hue}, 70%, 80%)`;
};

export { getRandomPastelColor };
