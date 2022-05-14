//NeetCode Soluion

const longestCommonSubSequence = (text1, text2) => {
  const twoDimensionalMatrix = Array(text1.length + 1)
    .fill(0)
    .map(() => Array(text2.length + 1).fill(0));


  for (let i = text1.length - 1; i >= 0; i--) {
    for (let j = text2.length - 1; j >= 0; j--) {
      if (text1[i] === text2[j]) {
        twoDimensionalMatrix[i][j] = 1 + twoDimensionalMatrix[i + 1][j + 1];
      } else {
        twoDimensionalMatrix[i][j] = Math.max(
          twoDimensionalMatrix[i + 1][j],
          twoDimensionalMatrix[i][j + 1]
        );
      }
    }
  }
  return twoDimensionalMatrix[0][0];
};

console.log(longestCommonSubSequence("bsbininm", "jmjkbkjkv"));
console.log(longestCommonSubSequence("abcde", "ace"));
