export const formatDate = (date: number | undefined): string => {
  if (!date) {
    return 'Today';
  }

  return Intl.DateTimeFormat('en-US', {
    month: 'short',
    year: 'numeric',
  }).format(new Date(date));
};
