export function rand(from: number, to: number): Number {
  return Math.floor(Math.random() * (to - from)) + from;
}

export function generateId(): String {
  return Math.random().toString(36).substr(2, 9);
}
