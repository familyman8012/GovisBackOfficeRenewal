export const getTableWidthPercentage = (width: number) => {
  return `${Math.round((width / 1536) * 100)}%`;
};
