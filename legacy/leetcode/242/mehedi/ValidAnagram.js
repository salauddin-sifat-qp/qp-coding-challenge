/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], map.has(s[i]) ? map.get(s[i]) + 1 : 1);
  }

  for (let i = 0; i < t.length; i++) {
    if (map.has(t[i])) {
      map.set(t[i], map.get(t[i]) - 1);
    } else {
      return false;
    }
  }
  console.log(map);
  for (let [_, value] of map) {
    if (value !== 0) {
      return false;
    }
  }
  return true;
};

var isAnagram1 = function (s, t) {
  if (s.length !== t.length) return false;
  const map = new Map();

  for (let i = 0; i < s.length; i++) {
    map.set(s[i], map.has(s[i]) ? map.get(s[i]) + 1 : 1);
    map.set(t[i], map.has(t[i]) ? map.get(t[i]) - 1 : -1);
  }
  for (let [_, value] of map) {
    if (value !== 0) {
      return false;
    }
  }
  return true;
};

var isAnagram2 = function (s, t) {
  if (s.length !== t.length) return false;
  const map = new Map();

  for (let i = 0; i < s.length; i++) {
    map.set(s[i], map.has(s[i]) ? map.get(s[i]) + 1 : 1);
  }

  for (let i = 0; i < t.length; i++) {
    if (!map.has(t[i]) || map.get(t[i]) === 0) {
      return false;
    }
    map.set(t[i], map.has(t[i]) ? map.get(t[i]) - 1 : -1);
  }
  return true;
};

// 9ms
var isAnagram3 = function (s, t) {
  if (s.length !== t.length) return false;
  const countArr = new Array(100).fill(0);
  const hash = (c) => c.charCodeAt(0) - "a".charCodeAt(0);
  for (let char of s) {
    countArr[hash(char)] += 1;
  }
  for (let char of t) {
    if (countArr[hash(char)] === 0) {
      return false;
    }
    countArr[hash(char)] -= 1;
  }

  return true;
};

// 5ms
var isAnagram4 = function (s, t) {
  if (s.length !== t.length) return false;
  const countArr = new Array(100).fill(0);
  const hash = (c) => c.charCodeAt(0) - "a".charCodeAt(0);
  for (let i = 0; i < s.length; i++) {
    console.log(hash(s[i]));
    countArr[hash(s[i])] += 1;
    console.log(hash(t[i]));

    countArr[hash(t[i])] -= 1;
  }

  for (let value of countArr) {
    if (value !== 0) {
      return false;
    }
  }

  return true;
};

console.log(isAnagram4("aart", "tara"));
