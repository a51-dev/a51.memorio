# memorio Session

## Overview

This document provides a comprehensive list of all available session functions in the `memorio` library along with their descriptions and examples.

## Functions

### session.get([session.name])

- **Description:** Retrieve an item from local storage.
- **Parameters:**
  - `name` (string): The name of the item to retrieve.

- **Example:**

  ```javascript
  const value = session.get('itemName');
  console.log(value);
  ```

### session.set([name, value])

- **Description:** Set an item in local storage.
- **Parameters:**
  - `name` (string): The name of the item to set.
  - `value` (any): The value of the item to set.

- **Example:**

  ```javascript
  session.set('itemName', value);
  ```

### session.remove([session.name])

- **Description:** Delete an item from local storage.
- **Parameters:**
  - `name` (string): The name of the item to delete.

- **Example:**

  ```javascript
  session.remove('itemName');
  ```

### session.removeAll()

- **Description:** Remove all items from local storage.
- **Parameters:** None

- **Example:**

  ```javascript
  session.removeAll();
  ```

## License

This project is licensed under the MIT License.
