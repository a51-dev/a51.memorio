const newObj = {

  /**
   * Find an item in the array.
   * @param array The array to search.
   * @param key The key to find.
   * @returns The found item or false if not found.
   */
  find: (array: any, key: any) => {
    if (!Array.isArray(array)) return
    for (const node of array) {
      if (node[key] === key) return node
      if (node.children) {
        const finalNode = global.memorio.array.find(key, node.children)
        if (finalNode) return finalNode
      }
    }
    return false
  },

  /////////////////////////////////////////////////////

  /**
   * Return a new array with unique items.
   * @param array The array to process.
   * @returns A new array with unique items.
   */
  unique: (array: any) => {
    if (!Array.isArray(array)) return
    return [...new Set(array)]
  },

  /////////////////////////////////////////////////////

  /**
   * Delete an item from the array.
   * @param array The array to process.
   * @param key The key of the item to delete.
   */
  delete: (array: any, key: any) => {
    if (!Array.isArray(array)) return
    array.some(function iter(o, i, a) {
      if (o[key] === key) {
        a.splice(i, 1)
        return true
      }
      for (const k of Object.keys(o)) {
        const value = o[k]
        if (Array.isArray(value)) return value.some(iter)
      }
    })
  },

  /////////////////////////////////////////////////////

  /**
   * Merge two arrays into one.
   * @param arrayA The first array.
   * @param arrayB The second array.
   * @returns The merged array.
   */
  merge: (arrayA: any, arrayB: any) => {
    if (!arrayA || !arrayB) return arrayB || arrayA
    for (const key of Object.keys(arrayA)) {
      if (arrayA[key] instanceof Object && arrayB[key]) {
        Object.assign(arrayA[key], global.memorio.array.merge(arrayB[key], arrayA[key]))
      }
    }
    return Object.assign(arrayB || {}, arrayA)
  },

  /////////////////////////////////////////////////////

  /**
   * Merge two arrays by a specified key.
   * @param arrayA The first array.
   * @param arrayB The second array.
   * @param key The key to merge by.
   * @returns The merged array.
   */
  mergeByKey: (arrayA: any, arrayB: any, key: any) => {
    return arrayA.map((item: any) => {
      const match = arrayB.find((o: any) => item[key] === o[key])
      return match ? Object.assign({}, item, match) : item
    })
  },

  /////////////////////////////////////////////////////

  /**
   * Sort an array in ascending order.
   * @param array The array to sort.
   * @returns The sorted array.
   */
  asc: (array: any) => {
    if (!Array.isArray(array)) return
    return array.sort((a, b) => a - b)
  },

  /////////////////////////////////////////////////////

  /**
   * Sort an array in descending order.
   * @param array The array to sort.
   * @returns The sorted array.
   */
  desc: (array: any) => {
    if (!Array.isArray(array)) return
    return array.sort((a, b) => b - a)
  },

  /////////////////////////////////////////////////////

  /**
   * Find duplicate items in an array.
   * @param array The array to process.
   * @returns An array of duplicate items.
   */
  duplicates: (array: any) => {
    if (!Array.isArray(array)) return
    const seen = new Set()
    const duplicates = new Set()
    for (const item of array) {
      if (seen.has(item)) {
        duplicates.add(item)
      } else {
        seen.add(item)
      }
    }
    return Array.from(duplicates)
  },

  /////////////////////////////////////////////////////

  /**
   * Filter even numbers from an array.
   * @param array The array to process.
   * @returns An array of even numbers.
   */
  even: (array: any) => {
    if (!Array.isArray(array)) return
    return array.filter((item: any) => item % 2 === 0)
  },

  /////////////////////////////////////////////////////

  /**
   * Filter odd numbers from an array.
   * @param array The array to process.
   * @returns An array of odd numbers.
   */
  odd: (array: any) => {
    if (!Array.isArray(array)) return
    return array.filter((item: any) => item % 2 !== 0)
  },

  /////////////////////////////////////////////////////

  /**
   * Convert an array to an object.
   * @param array The array to convert.
   * @returns The converted object.
   */
  toObj: (array: any) => {
    if (!Array.isArray(array)) return
    return Object.assign({}, array)
  },

  /////////////////////////////////////////////////////

  /**
   * Sum the values of a specified column in a multidimensional array.
   * @param array The array to process.
   * @param column The column index to sum.
   * @returns The sum of the column values.
   */
  sumColumn: (array: any = [], column = 0) => {
    if (!Array.isArray(array)) return "provide a multidimensional array"
    if (typeof column === 'undefined') return "provide a column"
    return array.reduce((acc, row) => acc + (row[column] || 0), 0)
  },

  /////////////////////////////////////////////////////

  /**
   * Shuffle the elements of an array.
   * @param array The array to shuffle.
   * @returns The shuffled array.
   */
  shuffle: (array: any) => {
    if (!Array.isArray(array)) return
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]
    }
    return array
  },

  /////////////////////////////////////////////////////

  /**
   * Generate an array of random numbers.
   * @param num The number of random numbers to generate.
   * @returns The generated array.
   */
  generate: (num: number) => {
    if (Number.isNaN(num)) return
    const array = Array.from({ length: num }, (_, i) => i + 1)
    return global.memorio.array.shuffle(array)
  },

  /////////////////////////////////////////////////////

  /**
   * Test if an array contains consecutive integers.
   * @param array The array to test.
   * @returns An array of missing integers.
   */
  testArrayInt: (array: any) => {
    if (!Array.isArray(array)) return
    const missingNumbers = []
    for (let i = 1; i <= array.length; i++) {
      if (!array.includes(i)) {
        missingNumbers.push(i)
      }
    }
    return missingNumbers
  },

  /////////////////////////////////////////////////////

  /**
   * Generate an array of random 32-bit unsigned integers.
   * @param number The number of integers to generate.
   * @returns The generated array.
   */
  rand32: (number: any) => {
    const
      t0 = performance.now(),
      array: any = []
    array['nums'] = []
    array['time'] = []
    for (var i = 0; i < number; ++i) {
      array['nums'].push(crypto.getRandomValues(new Uint32Array(1))[0])
    }
    const t1 = performance.now()
    array['time'].push(t1 - t0)
    return array
  },

  /////////////////////////////////////////////////////

  /**
   * Find the index of an item by key.
   * @param array The array to search.
   * @param key The key to find.
   * @returns The index of the item.
   */
  findindex: (array: any, key: any) => array.findIndex((o: any) => o.name === key),

  /////////////////////////////////////////////////////

  /**
   * Convert an array of paths to a JSON object.
   * @param array The array of paths.
   * @param separator The separator used in the paths.
   * @returns The JSON object.
   */
  pathToJson: (array: any, separator = "/") => {
    const out: any = {}
    let json

    for (const path of array) {
      json = out
      const parts = path.split(separator)
      for (const sub of parts.slice(1, -1)) {
        if (sub === '') return
        if (!(sub in json)) json[sub] = {}
        json = json[sub]
      }
      json[parts[parts.length - 1]] = null // Assign the last part to null or any value
    }

    return out
  },

  /////////////////////////////////////////////////////

  /**
 * Deeply clones a given object.
 * This function handles more complex data types and avoids issues with circular references.
 *
 * @param obj - The object to be cloned.
 * @returns A deep clone of the input object.
 */
  deepClone: (obj: any) => {
    return JSON.parse(JSON.stringify(obj))
  },

  /////////////////////////////////////////////////////

  /**
   * Finds and returns the elements that are present in both input arrays.
   *
   * @param arrayOfWords - The array of words to be checked.
   * @param arrayToCheck - The array to check against.
   * @returns An array containing elements that are present in both input arrays.
   */
  match: (arrayOfWords: any, arrayToCheck: any) => {
    return arrayOfWords.filter((word: any) => arrayToCheck.includes(word))
  },

  /**
   * Generate a shallow copy of an array.
   *
   * @param array - The array.
   * @returns An array containing elements.
   */
  shallow: (array: []) => {
    return Object.assign([], array)
  },

  /////////////////////////////////////////////////////

  /**
 * Deeply clones a given array.
 * This function handles more complex data types and avoids issues with circular references.
 *
 * @param array - The array to be cloned.
 * @returns A deep clone of the input array.
 */
  deepCopy: (array: any) => {
    return structuredClone(array)
  },

  /////////////////////////////////////////////////////

  /**
 * Group array using a specific key.
 * This function handles more complex data types and ensure that all values are grouped correctly.
 *
 * @param array - The array to be listed.
 * @param key - The key use for grouping.
 * @returns An array with object grouped by a specific key.
 */
  groupBy: (array, key) => {
    return array.reduce((prev, curr) => {
      return {
        ...prev,
        [curr[key]]: [...(prev[key] || []), curr]
      }
    }, {})
  }

}

/////////////////////////////////////////////////////////

global.memorio.setDescription({}, newObj)
