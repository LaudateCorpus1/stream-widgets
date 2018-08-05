export function rand(from: number, to: number) {
  return Math.floor(Math.random() * (to - from)) + from;
}

export function generateId(): String {
  return Math.random().toString(36).substr(2, 9);
}
