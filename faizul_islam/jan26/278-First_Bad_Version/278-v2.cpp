// The knows API is defined in the parent class Relation.
// bool isBadVersion(int version);

#include <unordered_map>
using namespace std;

class Solution {
public:
    int firstBadVersion(int n) {
        int left = 1;
        int right = n;
        int mid;

        unordered_map<int, bool> memo;

        auto getFromMapOrAPICall = [&](int version) -> bool {
            auto it = memo.find(version);
            if (it != memo.end()) {
                return it->second;
            }
            bool result = isBadVersion(version);
            memo[version] = result;
            return result;
        };

        while (true) {
            mid = left + ((right - left) >> 1);
            bool isMidBad = getFromMapOrAPICall(mid);

            if (isMidBad) {
                bool isMidLeftBad = getFromMapOrAPICall(mid - 1);

                if (isMidLeftBad) {
                    right = mid - 1;
                } else {
                    return mid;
                }
            } else {
                left = mid + 1;
            }
        }
    }
};