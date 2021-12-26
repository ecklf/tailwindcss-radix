const getRandomInitials = () => {
  return Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, "")
    .substring(0, 2)
    .toUpperCase();
};

export { getRandomInitials };
