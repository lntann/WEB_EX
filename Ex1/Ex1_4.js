const isValidJSON = (obj) => {
  try {
    JSON.parse(obj);
    return true;
  } catch (e) {
    return false;
  }
};
console.log(isValidJSON('{"name":"An","age":21}'));
console.log(isValidJSON('{"name":"Thinh",age:"26"}'));
console.log(isValidJSON(null));
