const getRandomArbitrary = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

export { getRandomArbitrary };
