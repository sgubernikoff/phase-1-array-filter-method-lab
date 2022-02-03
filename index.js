// Code your solution here
// const findMatching = drivers.filter((driver) => driver === "Bobby");
// function findMatching(collection) {
//   let newArray = [];
//   for (let item of collection) {
//     if (item.drivers === item.drivers) return newArray.push(item.drivers);
//   }
// }

// function findMatching(collection, name) {
//   return collection.filter(function (el) {
//     return el;
//   });
// }

function findMatching(drivers, name) {
  const result = drivers.filter(
    (driver) => name.toLowerCase() === driver.toLowerCase()
  );
  return result;
}

function fuzzyMatch(drivers, name) {
  const result = drivers.filter((driver) => driver.startsWith(name));
  return result;
}

function matchName(drivers, string) {
  const result = drivers.filter((driver) => driver.name === string);
  return result;
}
