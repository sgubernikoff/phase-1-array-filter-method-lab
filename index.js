// const drivers = [
//     {
//       name: 'Bobby',
//       hometown: 'Pittsburgh' },
//     {
//       name: 'Sammy',
//       hometown: 'New York' } ,
//     {
//       name: 'Sally',
//       hometown: 'Cleveland' },
//     {
//       name: 'Annette',
//       hometown: 'Los Angeles' },
//     {
//       name: 'Bobby',
//       hometown: 'Tampa Bay' }
//   ];

function findMatching(drivers, name) {
  const matcher = drivers.filter(
    (drivers) => drivers.toLowerCase() === name.toLowerCase()
  );
  return matcher;
}

function fuzzyMatch(drivers, letters) {
  const matching = drivers.filter((drivers) => drivers.startsWith(letters));
  return matching;
}

function matchName(drivers, name) {
  const matchy = drivers.filter((drivers) => drivers.name === name);
  return matchy;
}
