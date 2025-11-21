function reverseString(s: string[]): void {
  let firstIndex: number = 0;
  let lastIndex: number = s.length - 1;
  let tempCharacter: string;

  while (firstIndex < lastIndex) {
    tempCharacter = s[firstIndex];
    s[firstIndex] = s[lastIndex];
    s[lastIndex] = tempCharacter;

    firstIndex += 1;
    lastIndex -= 1;
  }
}
