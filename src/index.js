/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // Triangles amount by default.
  let count = 0;
  // Temporary array.
  let arr = [];

  for (let k1 in preferences) {
    // Get value 1.
    let v1 = preferences[k1] == 0 ? 0 : preferences[k1] - 1;
    // Key 2 is equal to value 1.
    let k2 = v1;
    // Get value 2.
    let v2 = preferences[k2] == 0 ? 0 : preferences[k2] - 1;
    // Key 3 is equal to value 2.
    let k3 = v2;
    // Get value 3.
    let v3 = preferences[k3] == 0 ? 0 : preferences[k3] - 1;

    // Initialize conditions.
    let condition_1 = (k1 == v2 && k2 == v3 && k3 == v1);
    let condition_2 = (k1 == v3 && k2 == v1 && k3 == v2);

    if (condition_1 || condition_2) {
      if (!(k1 in arr)) {
        arr[k1] = v1;

        if (!(k2 in arr)) {
          arr[k2] = v2;

          if (!(k3 in arr)) {
            arr[k3] = v3;
            count++;
          }
        }
      }
    }
  }

  return count;
};
