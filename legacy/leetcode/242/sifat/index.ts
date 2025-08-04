function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], (map.get(s[i]) || 0) + 1);
  }

  for (let i = 0; i < t.length; i++) {
    if (!map.get(t[i])) return false;

    if (map.get(t[i])) {
      map.set(t[i], map.get(t[i]) - 1);
      if (map.get(t[i]) === 0) {
        map.delete(t[i]);
      }
    }
  }

  return !map.size;
}
