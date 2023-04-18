import englishWords from "../words/englishWords";
import mongolWords from "../words/mongolWords";
import englishWords2 from "../words/englishWords2";
import mongolWords2 from "../words/mongolWords2";
import englishWords3 from "../words/englishWords3";
import mongolWords3 from "../words/mongolWords3";

export const table1Check = (sendWord1: string, findEn: string): string => {
  const mnWord = mongolWords.toLowerCase().split("\n");
  const enWord = englishWords.toLowerCase().split("\n");
  const enIndex = enWord.indexOf(findEn);
  const find = mnWord.slice(enIndex, enIndex + 1);
  if (find.toString().split(", ").length > 1) {
    const two = find.toString().split(", ");
    two.forEach((el) => {
      if (el === sendWord1.toLowerCase()) {
        return "true";
      }
    });
  } else if (sendWord1.toLowerCase() === find.toString()) {
    return "true";
  } else {
    return "error";
  }
};
export const table2Check = (sendWord2: string, findEn2: string): string => {
  const mnWord = mongolWords2.toLowerCase().split("\n");
  const enWord = englishWords2.toLowerCase().split("\n");
  const enIndex = enWord.indexOf(findEn2);
  const find = mnWord.slice(enIndex, enIndex + 1);
  if (find.toString().split(", ").length > 1) {
    const two = find.toString().split(", ");
    two.forEach((el) => {
      if (el === sendWord2.toLowerCase()) {
        return "true";
      }
    });
  } else if (sendWord2.toLowerCase() === find.toString()) {
    return "true";
  } else {
    return "error";
  }
};
export const table3Check = (sendWord3: string, findEn3: string): string => {
  const mnWord = mongolWords3.toLowerCase().split("\n");
  const enWord = englishWords3.toLowerCase().split("\n");
  const enIndex = enWord.indexOf(findEn3);
  const find = mnWord.slice(enIndex, enIndex + 1);
  if (find.toString().split(", ").length > 1) {
    const two = find.toString().split(", ");
    two.forEach((el) => {
      if (el === sendWord3.toLowerCase()) {
        return "true";
      }
    });
  } else if (sendWord3.toLowerCase() === find.toString()) {
    return "true";
  } else {
    return "error";
  }
};

export const assistent = function (findEn: string, list: number) {
  if (list === 1) {
    const mnWord = mongolWords.split("\n");
    const enWord = englishWords.split("\n");
    const enIndex = enWord.indexOf(findEn);
    const find = mnWord.slice(enIndex, enIndex + 1);
    return find;
  }
  if (list === 2) {
    const mnWord2 = mongolWords2.split("\n");
    const enWord2 = englishWords2.split("\n");
    const enIndex2 = enWord2.indexOf(findEn);
    const find2 = mnWord2.slice(enIndex2, enIndex2 + 1);
    return find2;
  }
  if (list === 3) {
    const mnWord3 = mongolWords3.split("\n");
    const enWord3 = englishWords3.split("\n");
    const enIndex3 = enWord3.indexOf(findEn);
    const find3 = mnWord3.slice(enIndex3, enIndex3 + 1);
    return find3;
  }
};

export const askfindWord = function (ask: string): string {
  const mnWords = mongolWords.toLowerCase().split("\n");
  const enWords = englishWords.toLowerCase().split("\n");
  const index: number = enWords.indexOf(ask);
  return mnWords.slice(index, index + 1).toString();
};
