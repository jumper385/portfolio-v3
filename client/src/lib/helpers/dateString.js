const monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
  'September', 'October', 'November', 'December'
];

export const dateString = _d => {
  let date = new Date(_d);
  let d = date.getDate();
  let m = date.getMonth();
  let y = date.getFullYear();
  return `${monthNames[m]} ${d}, ${y}`
}