/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function (isBadVersion: any) {
  return function (n: number): number {
    let left = 1;
    let right = n;
    let mid: number;
    let map: Map<number, boolean> = new Map();
    let isMidBad: boolean;
    let isMidLeftBad: boolean;

    const getFromMapOrAPICall = (version: number): boolean => {
      if (map.has(version)) {
        return map.get(version)!;
      } else {
        const result = isBadVersion(version);
        map.set(version, result);
        return result;
      }
    };

    while (true) {
      mid = left + ((right - left) >> 1);
      isMidBad = getFromMapOrAPICall(mid);

      if (isMidBad) {
        isMidLeftBad = getFromMapOrAPICall(mid - 1);

        if (isMidLeftBad) {
          right = mid - 1;
        } else {
          return mid;
        }
      } else {
        left = mid + 1;
      }
    }
  };
};
