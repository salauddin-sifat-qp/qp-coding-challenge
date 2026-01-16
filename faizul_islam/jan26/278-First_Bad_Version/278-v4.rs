use std::collections::HashMap;

impl Solution {
    pub fn first_bad_version(&self, n: i32) -> i32 {
        let mut left: i32 = 1;
        let mut right: i32 = n;
        let mut map: HashMap<i32, bool> = HashMap::new();

        let mut get_from_map_or_api = |version: i32| -> bool {
            if let Some(&cached) = map.get(&version) {
                cached
            } else {
                let result = self.isBadVersion(version);
                map.insert(version, result);
                result
            }
        };

        loop {
            let mid = left + ((right - left) >> 1);
            let is_mid_bad = get_from_map_or_api(mid);

            if is_mid_bad {
                let is_mid_left_bad = get_from_map_or_api(mid - 1);

                if is_mid_left_bad {
                    right = mid - 1;
                } else {
                    return mid;
                }
            } else {
                left = mid + 1;
            }
        }
    }
}
