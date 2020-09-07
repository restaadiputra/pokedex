export const capitalizeFirstLetter = (value: string): string => {
  return value.charAt(0).toUpperCase() + value.slice(1);
};

export const capitalizeEachWord = (value: string): string => {
  return value.split(' ').map(capitalizeFirstLetter).join(' ');
};
