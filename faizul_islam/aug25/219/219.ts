function containsNearbyDuplicate(nums: number[], k: number): boolean {
  let hashMap: Map<number, number> = new Map<number, number>();

  for (let i = 0, l = nums.length; i < l; i += 1) {
    // have i seen this number before
    if (hashMap.has(nums[i])) {
      // find previous index
      let j = hashMap.get(nums[i]) as number;

      // check either i & j matches the condition or not
      if (Math.abs(i - j) <= k) {
        return true;
      }
    }

    // update hash
    hashMap.set(nums[i], i);
  }

  return false;
}
