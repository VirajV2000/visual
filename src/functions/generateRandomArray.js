export const generateRandomArray = (length, min, max) => {
    return Array.from({ length }, () => Math.floor(Math.random() * (max - min + 1)) + min);
  };
  