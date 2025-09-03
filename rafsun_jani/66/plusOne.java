class Solution {
    public static int[] plusOne(int[] numbersOfArray) {
        for (int i = numbersOfArray.length - 1; i >= 0; i--) {
            if (numbersOfArray[i] < 9) {
                numbersOfArray[i]++; 
                return numbersOfArray;f
            }
            numbersOfArray[i] = 0;
        }

        int[] newArray = new int[numbersOfArray.length + 1];
        newArray[0] = 1;
        return newArray;
    }

    public static void main(String[] args) {
        int[] numbersOfArray = {1, 2, 3, 9};
        System.out.println(Arrays.toString(plusOne(numbersOfArray))); 

    }
    }

// class Solution {
//     public static int[] plusOne(int[] numbersOfArray) {
//      long convertedNumber =0;
//      for(int i =0; i<numbersOfArray.length; i++){
//          convertedNumber = convertedNumber * 10 + numbersOfArray[i];
//      }
     

//         String convertedString = String.valueOf(convertedNumber+1);
//         int[] arrayAfterPlusOne = new int[convertedString.length()];

//         for (int i = 0; i < convertedString.length(); i++) {
//             arrayAfterPlusOne[i] = convertedString.charAt(i) - '0';
//         }
//         return arrayAfterPlusOne;
//     }

//     public static void main(String[] args) {
//         int[] numbersOfArray = {1,2,3,9};
//         System.out.print(plusOne(numbersOfArray));
//     }
// }