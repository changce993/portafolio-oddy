export const lerp = (a, b, t) => a + (b - a) * t;

export const capitalize = (str) => {
  return str
    .split(' ')
    .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase())
    .join(' ');
}
