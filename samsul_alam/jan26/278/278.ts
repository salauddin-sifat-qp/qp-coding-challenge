function solution(isBadVersion: (version: number) => boolean) {
  return function (n: number): number {
    let left = 1;
    let right = n;

    while (left < right) {
      const mid = left + Math.floor((right - left) / 2);

      if (isBadVersion(mid)) {
        right = mid; // first bad is at mid or before
      } else {
        left = mid + 1; // first bad is after mid
      }
    }

    return left;
  };
}
