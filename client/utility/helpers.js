export const camelCase = str => {
  let string = str
    .toLowerCase()
    .replace(/[^A-Za-z0-9]/g, " ")
    .split(" ")
    .reduce((result, word) => result + capitalize(word.toLowerCase()));
  return string.charAt(0).toLowerCase() + string.slice(1);
};

export const capitalize = str =>
  str.charAt(0).toUpperCase() + str.toLowerCase().slice(1);

  export const searchList = (list, val) => {
    return list.filter(element => {
      return element.name.toLowerCase().indexOf(val.toLowerCase()) !== -1;
    });
  }