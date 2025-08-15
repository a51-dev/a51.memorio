const description: Descr = {
  name: "array",
  active: true,
  subCommand: [
    {
      name: "find",
      version: "0.0.1",
      example: "memorio.array.find([array, item])",
      description: "Find an item in the array.",
      author: "Dario Passariello",
      creationDate: "20210101",
      lastMod: "20240619",
      type: "function",
      active: true,
      subCommand: []
    },
    {
      name: "unique",
      version: "0.0.1",
      example: "memorio.array.unique([array])",
      description: "Return a new array with unique items.",
      author: "Dario Passariello",
      creationDate: "20210101",
      lastMod: "20210101",
      type: "function",
      active: true,
      subCommand: []
    },
    {
      name: "delete",
      version: "0.0.1",
      example: "memorio.array.delete([array, item])",
      description: "Delete an item from the array.",
      author: "Dario Passariello",
      creationDate: "20210101",
      lastMod: "20210101",
      type: "function",
      active: true,
      subCommand: []
    },
    {
      name: "merge",
      version: "0.0.1",
      example: "memorio.array.merge([array1, array2])",
      description: "Merge two arrays into one.",
      author: "Dario Passariello",
      creationDate: "20210101",
      lastMod: "20210101",
      type: "function",
      active: true,
      subCommand: []
    },
    {
      name: "mergeByKey",
      version: "0.0.1",
      example: "memorio.array.mergeByKey([arrayA, arrayB, key])",
      author: "Dario Passariello",
      creationDate: "20230603",
      lastMod: "20230603",
      type: "function",
      active: true,
      description: `
                Example:
                const array = [
                  {"date":1230,"value":1},
                  {"date":1231,"value":2},
                  {"date":1232,"value":3, "value1":3, name:"John"},
                  {"date":1233,"value":4},
                  {"date":1234,"value":5},
                  {"date":1235,"value":6}
                ]
                const newData = [
                  {"date":1230,"value":1000,'name':'Diana'},
                  {"date":1232,"value":1000, "value1":20000},
                  {"date":1234,"value":1000},
                  {"date":1235,"value":888810000}
                ]
                Command: memorio.array.mergeByKey( array, newData, 'date' )
                Result:
                [
                  {"date": 1230,"value": 1000, name: "Diana" },
                  {"date": 1231,"value": 2},
                  {"date": 1232 "value": 1000, "value1": 20000, name: "John" },
                  {"date": 1233,"value": 4},
                  {"date": 1234, "value": 1000},
                  {"date": 1235,"value": 888810000}
                ]
        `,
      subCommand: []
    },
    {
      name: "asc",
      version: "0.0.1",
      example: "memorio.array.asc([array])",
      author: "Dario Passariello",
      creationDate: "20210101",
      lastMod: "20210101",
      type: "function",
      active: true,
      description: "Sort an array in ascending order.",
      subCommand: []
    },
    {
      name: "desc",
      version: "0.0.1",
      example: "memorio.array.desc([array])",
      author: "Dario Passariello",
      creationDate: "20210101",
      lastMod: "20210101",
      type: "function",
      active: true,
      description: "Sort an array in descending order.",
      subCommand: []
    },
    {
      name: "duplicates",
      version: "0.0.1",
      example: "memorio.array.duplicates([array])",
      author: "Dario Passariello",
      creationDate: "20210101",
      lastMod: "20210101",
      type: "function",
      active: true,
      description: "Find duplicate items in an array.",
      subCommand: []
    },
    {
      name: "even",
      version: "0.0.1",
      example: "memorio.array.even([array])",
      author: "Dario Passariello",
      creationDate: "20210101",
      lastMod: "20210101",
      type: "function",
      active: true,
      description: "Filter even numbers from an array.",
      subCommand: []
    },
    {
      name: "odd",
      version: "0.0.1",
      example: "memorio.array.odd([array])",
      author: "Dario Passariello",
      creationDate: "20210101",
      lastMod: "20210101",
      type: "function",
      active: true,
      description: "Filter odd numbers from an array.",
      subCommand: []
    },
    {
      name: "sumColumn",
      version: "0.0.1",
      example: "memorio.array.sumColumn([array, column])",
      author: "Dario Passariello",
      creationDate: "20210101",
      lastMod: "20230111",
      type: "function",
      active: true,
      description: `
              Sum the values of a specified column in a multidimensional array.
              Example:
              const array = [
                [12, 23, 34],
                [45, 56, 67],
                [78, 89, 90]
              ]
              console.debug(memorio.array.sumColumn(array, 0)) // Result: 135
            `,
      subCommand: []
    },
    {
      name: "shuffle",
      version: "0.0.1",
      example: "memorio.array.shuffle([array])",
      author: "Dario Passariello",
      creationDate: "20230527",
      lastMod: "20230527",
      type: "function",
      active: true,
      description: "Shuffle the elements of an array.",
      subCommand: []
    },
    {
      name: "generate",
      version: "0.0.1",
      example: "memorio.array.generate(num)",
      author: "Dario Passariello",
      creationDate: "20230527",
      lastMod: "20230527",
      type: "function",
      active: true,
      description: "Generate an array of random numbers (max 500000).",
      subCommand: []
    },
    {
      name: "testArrayInt",
      version: "0.0.1",
      example: "memorio.array.testArrayInt([array])",
      author: "Dario Passariello",
      creationDate: "20230527",
      lastMod: "20230527",
      type: "function",
      active: true,
      description: `
              Test if an array contains consecutive integers.
              Examples:
              console.debug(memorio.array.testArrayInt([1,2,3,4,6,7])) // Result: [5]
            `,
      subCommand: []
    },
    {
      name: "rand32",
      version: "0.0.1",
      example: "memorio.array.rand32(num)",
      author: "Dario Passariello",
      creationDate: "20230527",
      lastMod: "20230527",
      type: "function",
      active: true,
      description: `
              Generate an array of random 32-bit unsigned integers.
              Example:
              console.debug(memorio.array.rand32(500000))
            `,
      subCommand: []
    },
    {
      name: "deepClone",
      version: "0.0.1",
      example: "memorio.array.deepClone(array|object)",
      author: "Dario Passariello",
      creationDate: "20250101",
      lastMod: "20250101",
      type: "function",
      active: true,
      description: `
                Generate a deep clone of an array or object.
                Example:
                memorio.array.deepClone([array|object])
              `,
      subCommand: []
    },
    {
      name: "match",
      version: "0.0.1",
      example: "memorio.array.match([arrayOfWords, arrayToCheck])",
      author: "Dario Passariello",
      creationDate: "20250101",
      lastMod: "20250101",
      type: "function",
      active: true,
      description: `
              Find a perfect match between an array of words and an array to check.
              Example:
              memorio.array.match([arrayOfWords, arrayToCheck])
            `,
      subCommand: []
    },
    {
      name: "shallow",
      version: "0.0.1",
      example: "memorio.array.shallow([array])",
      author: "Dario Passariello",
      creationDate: "20250101",
      lastMod: "20250101",
      type: "function",
      active: true,
      description: `
              Generate a shallow copy of an array
              Example: memorio.array.shallow([array])
            `,
      subCommand: []
    },
    {
      name: "deepCopy",
      version: "0.0.1",
      example: "memorio.array.deepCopy([array])",
      author: "Dario Passariello",
      creationDate: "20250101",
      lastMod: "20250101",
      type: "function",
      active: true,
      description: `
              Generate a deepCopy of an array
              Example: memorio.array.deepCopy([array])
            `,
      subCommand: []
    },
    {
      name: "groupBy",
      version: "0.0.1",
      example: "memorio.array.groupBy([array, key])",
      author: "Dario Passariello",
      creationDate: "20250414",
      lastMod: "20250414",
      type: "function",
      active: true,
      description: `
              Generate groups of array by a specific key
              Example: memorio.array.groupBy([array, key])
            `,
      subCommand: []
    }
  ]
}

///////////////////////////////////////////////////////////////////////////////

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
        const finalNode = memorio.array.find(key, node.children)
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
        Object.assign(arrayA[key], memorio.array.merge(arrayB[key], arrayA[key]))
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
    return memorio.array.shuffle(array)
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

memorio.setDescription(description, newObj)
