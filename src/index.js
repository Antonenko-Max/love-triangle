/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let check = [];
  let count = 0;
  for (let i = 0; i < preferences.length; i++)
  {
    if (check[i] == 1) continue;
    if ((preferences[preferences[i] - 1] != i + 1)
      && (preferences[preferences[preferences[i] - 1] - 1] == i + 1))
      {
        count++;
        check[preferences[i] - 1] = 1;
        check[preferences[preferences[i] - 1] - 1] = 1;
      }
  }
  return count;
};
