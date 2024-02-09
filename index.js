export function randomBytes (length, cb) {
  return Array(length)
    .fill(null)
    .map(() => Math.random().toString(36).charAt(2))
    .join('');
}
