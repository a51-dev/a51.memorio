
const description = {
  name: 'obj',
  active: true,
  subCommand: [
    {
      name: 'toArray',
      version: '0.0.1',
      example: 'memorio.obj.toArray([obj])',
      description: 'Convert an object to an array.',
      author: 'Dario Passariello',
      creationDate: '20210101',
      lastMod: '20210101',
      type: 'function',
      active: true,
      subCommand: []
    },
    {
      name: 'replaceNullObjects',
      version: '0.0.1',
      example: 'memorio.obj.replaceNullObjects([obj])',
      description: 'Replace null values in an object with empty objects.',
      author: 'Dario Passariello',
      creationDate: '20210101',
      lastMod: '20210101',
      type: 'function',
      active: true,
      subCommand: []
    },
    {
      name: 'serialize',
      version: '0.0.1',
      example: 'memorio.obj.serialize([obj])',
      description: 'Serialize an object to a JSON string.',
      author: 'Dario Passariello',
      creationDate: '20210101',
      lastMod: '20210101',
      type: 'function',
      active: true,
      subCommand: []
    },
    {
      name: 'deSerialize',
      version: '0.0.1',
      example: 'memorio.obj.deSerialize([obj])',
      description: 'Deserialize a JSON string to an object.',
      author: 'Dario Passariello',
      creationDate: '20210101',
      lastMod: '20210101',
      type: 'function',
      active: true,
      subCommand: []
    },
    {
      name: 'find',
      version: '0.0.1',
      example: 'memorio.obj.find([array, key, value])',
      description: 'Find an object in an array by key and value.',
      author: 'Dario Passariello',
      creationDate: '20210101',
      lastMod: '20210101',
      type: 'function',
      active: true,
      subCommand: []
    },
    {
      name: 'toXML',
      version: '0.0.1',
      example: 'memorio.obj.toXML([obj])',
      description: 'Convert an object to an XML string.',
      author: 'Dario Passariello',
      creationDate: '20240315',
      lastMod: '20240315',
      type: 'function',
      active: true,
      subCommand: []
    },
    {
      name: 'instance',
      version: '0.0.1',
      example: 'memorio.obj.instance([obj])',
      description: 'Create an instance of an object.',
      author: 'Dario Passariello',
      creationDate: '20240924',
      lastMod: '20240924',
      type: 'function',
      active: true,
      subCommand: []
    },
    {
      name: 'updateByKey',
      version: '0.0.1',
      example: 'memorio.obj.updateByKey([obj, key, newValue])',
      description: 'Update an object\'s property by key.',
      author: 'Dario Passariello',
      creationDate: '20240929',
      lastMod: '20240929',
      type: 'function',
      active: true,
      subCommand: []
    },
    {
      name: 'findindex',
      version: '0.0.1',
      example: 'memorio.obj.findindex([obj, key])',
      description: 'Find the index of an object in an array by key.',
      author: 'Dario Passariello',
      creationDate: '20240929',
      lastMod: '20240929',
      type: 'function',
      active: true,
      subCommand: []
    },
    {
      name: 'parse',
      version: '0.0.1',
      example: 'memorio.obj.parse(val)',
      description: 'Check if value is an object or another type. Return object after parse or a different type. Used instead of JSON.parse to avoid crash.',
      author: 'Dario Passariello',
      creationDate: '20241027',
      lastMod: '20240927',
      type: 'function',
      active: true,
      subCommand: []
    },
    {
      name: 'diff',
      version: '0.0.1',
      example: 'memorio.obj.diff([obj1, obj2])',
      description: 'Show the differences between two objects.',
      author: 'Dario Passariello',
      creationDate: '20250101',
      lastMod: '20250101',
      type: 'function',
      active: true,
      subCommand: []
    },
    {
      name: 'shallow',
      version: '0.0.1',
      example: 'memorio.obj.shallow([object])',
      author: 'Dario Passariello',
      creationDate: '20250101',
      lastMod: '20250101',
      type: 'function',
      active: true,
      description: `
              Generate a shallow copy of an object
              Example: memorio.obj.shallow([object])
            `,
      subCommand: []
    },
    {
      name: 'deepCopy',
      version: '0.0.1',
      example: 'memorio.obj.deepCopy([object])',
      author: 'Dario Passariello',
      creationDate: '20250101',
      lastMod: '20250101',
      type: 'function',
      active: true,
      description: `
              Generate a deepCopy of an object
              Example: memorio.obj.deepCopy([object])
            `,
      subCommand: []
    }
  ]
}

///////////////////////////////////////////////////////////////////////////////

const newObj = {

  ////////////////////////
  /**
   * Convert an object to an array.
   * @param object The object to convert.
   * @returns An array of key-value pairs.
   */
  toArray: (object: Record<string, any>): [string, any][] => {
    return Object.entries(object)
  },

  ////////////////////////
  /**
   * Replace null values in an object with empty objects.
   * @param data The object to process.
   * @returns The processed object with null values replaced.
   */
  replaceNullObjects: (data: Record<string, any>): Record<string, any> => {
    const loData = { ...data }
    Object.keys(data).forEach((key) => {
      if (data[key] === null) {
        loData[key] = ''
      }
    })
    return loData
  },

  ////////////////////////
  /**
   * Serialize an object to a JSON string.
   * @param value The object to serialize.
   * @returns The serialized object.
   */
  serialize: (value: any) => {

    if (typeof value === 'function')
      return value.toString()

    if (typeof value === 'object') {
      const serializeObject: any = {}
      for (const [objectKey, objectValue] of Object.entries(value)) {
        // console.info(`objectKey=${objectKey}  value=${objectValue}`)
        serializeObject[objectKey] = global.memorio.obj.serialize(objectValue)
      }
      return serializeObject
    }

    return value

  },

  ////////////////////////
  /**
   * Deserialize a JSON string to an object.
   * @param valueNew The JSON string to deserialize.
   * @returns The deserialized object.
   */
  deSerialize: (valueNew: any): any => {
    if (typeof valueNew === 'string' && valueNew.toLowerCase().startsWith('function(')) {
      return Function('\'use strict\'; return ' + valueNew)()
    }

    if (typeof valueNew === 'object') {
      const deserializeObject: Record<string, any> = {}
      for (const [objectKey, objectValue] of Object.entries(valueNew)) {
        deserializeObject[objectKey] = global.memorio.obj.deSerialize(objectValue)
      }
      return deserializeObject
    }

    return valueNew
  },

  ////////////////////////
  /**
   * Sort an object by its keys.
   * @param o The object to sort.
   * @returns The sorted object.
   */
  sort: (o: Record<string, any>): Record<string, any> => {
    return Object.keys(o).sort().reduce((r: Record<string, any>, k: string) => (r[k] = o[k], r), {})
  },

  ////////////////////////
  /**
   * Convert an object to an XML string.
   * @param obj The object to convert.
   * @returns The XML string.
   */
  toXML: (obj: Record<string, any>): string => {
    const convert = (obj: Record<string, any>, indent = ''): string => {
      let xml = ''
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          const value = obj[key]
          if (typeof value === 'object' && value !== null) {
            xml += `${indent}<${key}>\n${convert(value, indent + '  ')}${indent}</${key}>\n`
          } else {
            xml += `${indent}<${key}>${value}</${key}>\n`
          }
        }
      }
      return xml
    }
    return convert(obj)
  },

  ////////////////////////
  /**
   * Find an object in an array by key and value.
   * @param array The array to search.
   * @param key The key to search by.
   * @param value The value to search for.
   * @returns The found object or undefined.
   */
  find: (array: any[], key: string, value: any): any => {
    return array.find(item => item[key] === value)
  },

  ////////////////////////
  /**
   * Create an instance of an object.
   * @param obj The object to create an instance of.
   * @returns The new instance.
   */
  instance: (obj: any): any => {
    return Object.create(obj)
  },

  ////////////////////////
  /**
   * Update an object's property by key.
   * @param obj The object to update.
   * @param key The key of the property to update.
   * @param newValue The new value to set.
   * @returns The updated object.
   */
  updateByKey: (obj: Record<string, any>, key: string, newValue: any): Record<string, any> => {
    if (obj.hasOwnProperty(key)) obj[key] = newValue
    return obj
  },

  ////////////////////////
  /**
   * Find the index of an object in an array by key.
   * @param array The array to search.
   * @param key The key to search by.
   * @returns The index of the found object or -1 if not found.
   */
  findindex: (array: any[], key: string): number => {
    return array.findIndex(item => item[key] !== undefined)
  },

  ////////////////////////
  /**
   * Check if value is an object or another type. Return object after parse or a different type. Used instead of JSON.parse to avoid crash.
   * @param val The value to check.
   * @returns The parsed object or the original value.
   */
  parse: (val: any): any => {
    try {
      return JSON.parse(val)
    } catch (e) {
      return val
    }
  },

  ////////////////////////
  /**
   * Check if a value is an object.
   * @param val The value to check.
   * @returns True if the value is an object, otherwise false.
   */
  isObject: (val: any): boolean => typeof val === 'object' && val !== null,

  ////////////////////////
  /**
   * Show the differences between two objects.
   * @param obj1 The first object.
   * @param obj2 The second object.
   * @returns An object containing the differences.
   */
  diff: (obj1: Record<string, any>, obj2: Record<string, any>): Record<string, { obj1: any, obj2: any }> => {
    const result: Record<string, { obj1: any, obj2: any }> = {}
    for (const key in obj1) {
      if (obj1.hasOwnProperty(key) && obj1[key] !== obj2[key]) {
        result[key] = { obj1: obj1[key], obj2: obj2[key] }
      }
    }
    for (const key in obj2) {
      if (obj2.hasOwnProperty(key) && obj1[key] !== obj2[key]) {
        result[key] = { obj1: obj1[key], obj2: obj2[key] }
      }
    }
    return result
  },

  ////////////////////////
  /**
   * Create a path string from a property and an object of strings.
   * @param prop The property to include in the path.
   * @param object The object of strings to include in the path.
   * @param separator The separator to use (default is '.').
   * @returns The created path string.
   */
  path: (prop: string, object: string[], separator: string = '.'): string => {
    return object.concat(prop).join(separator)
  },

  ////////////////////////
  /**
 * Generate a shallow copy of an object.
 *
 * @param object - The object.
 * @returns An array containing elements.
 */
  shallow: (object: {}) => {
    return Object.assign({}, object)
  },

  /////////////////////////
  /**
 * Generate structuredClone copy of an object.
 *
 * @param object - The object.
 * @returns An object containing elements.
 */
  ////////////////////////

  deepCopy: (obj: any) => {
    return structuredClone(obj)
  }


}

/////////////////////////////////////////////////////////

global.memorio.setDescription(description, newObj)
