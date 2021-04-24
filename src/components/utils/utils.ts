// utility to calculate milliseconds to nearest minute for display
function calculateMinutes(time: number) {
  let minutes = Math.round(time / 60000);
  if (minutes > 1) {
    return `${minutes} minutes`;
  } else if (minutes < 1) {
    return `less than 1 minute`;
  } else {
    return `${minutes} minute`;
  }
}

export { calculateMinutes };
