export const formatDate = (date: string) => {
  return new Intl.DateTimeFormat('en-US').format(new Date(date));
};
