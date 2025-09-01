# Memorio

> A lightweight, type-safe state management library for JavaScript applications

![TypeScript](https://img.shields.io/badge/TypeScript-gray?logo=typescript)
![Node.js](https://img.shields.io/badge/Node.js-gray?logo=node.js)
![Jest](https://img.shields.io/badge/Jest-gray?logo=jest)
![ESLint](https://img.shields.io/badge/ESLint-gray?logo=eslint)
![esbuild](https://img.shields.io/badge/esbuild-gray?logo=esbuild)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

![Tests](https://img.shields.io/badge/tests-passing-brightgreen)
![Coverage](https://img.shields.io/badge/coverage-25%20passed-success)

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Quick Start](#quick-start)
- [API Reference](#api-reference)
  - [State Management](#state-management)
  - [Observer Pattern](#observer-pattern)
  - [Store](#store)
  - [Session](#session)
- [Testing](#testing)
- [Security](#security)
- [License](#license)

## Features

- Reactive state management with observer pattern
- Persistent storage with Store API
- Session management for temporary data
- Type-safe with full TypeScript support
- Comprehensive test coverage
- Zero dependencies
- Easy debugging with proxy-based state

## Installation

```bash
npm i -D memorio
```

### All test suites are passing

- Basic functionality tests
- State management tests
- Store operations tests
- Cache operations tests
- Observer pattern tests

Total: 25 tests passed across 5 test suites

## Quick Start

```javascript
/*
 IMPORTANT!
 Add import only at first start of your SPA. Became global!.
 You don't need to import any time you need to use memorio
*/
import 'memorio';

// State Management
state.counter = 0;
state.user = { name: 'John', age: 30 };

// Observer Pattern
observer(
  'state.counter',
    (newValue, oldValue) => {
    console.log(`Counter changed from ${oldValue} to ${newValue}`);
  }
);

// Store (Persistent Storage)
store.set('preferences', { theme: 'dark' });
const preferences = store.get('preferences');

// Session Storage
session.set('token', 'user-jwt-token');
const token = session.get('token');
```

## API Reference

### State Management

State in Memorio is globally accessible and reactive:

```javascript
// Setting state
state.user = { name: 'John' };

// Getting state
const userName = state.user.name;

// Listing all states
console.log(state.list);

// Locking state (for Objects or Arrays)
state.user.lock();

// Removing state
state.remove('user');

// Clearing all states
state.removeAll();

```

### Observer Pattern

Observe state changes with React-like syntax:

```javascript
// Basic observer
observer(
  'state.user',
    (newValue, oldValue) => {
    console.log('User updated:', newValue);
  }
);

// With React useState
const [user, setUser] = useState();
observer(
  'state.user',
  () => {
    setUser(state.user);
  }
);

// With React useEffect
useEffect(
  () => {
    console.log('User changed:', user);
  }, [user]
);
```

### Another example of use of Observer

```js
import 'memorio';

// Use the observer to log the changing state value
observer(
  'state.count',
  () => console.log("State changed: ", state.count)
);

// Store a value in the state that changes every 5 seconds
setInterval(() => state.count = Date.now(), 5000);
```

---

## STORE

```js
// Set a store:
store.set("test", { test: "test" })

// Get a store:
store.get("test") // Output: { test: "test" }

// Remove a store:
store.remove("test") // Output: "ok"

// Remove all stores:
store.removeAll() // Output: "ok"
```

### Store

Persistent storage for your application:

```javascript
// Setting values
store.set('config', { theme: 'dark', language: 'en' });

// Getting values
const config = store.get('config');

// Removing specific value
store.remove('config');

// Getting store size
const size = store.size();

// Clearing store
store.removeAll();
```

### Session

Temporary storage that persists during page sessions:

```javascript
// Setting session data
session.set(
  'userSession', {
    id: 'user123',
    lastActive: Date.now()
  }
);

// Getting session data
const userData = session.get('userSession');

// Checking session size
const activeItems = session.size();

// Removing session data
session.remove('userSession');

// Clearing all session data
session.removeAll();
```

---

## Testing

## Test suites are passing

- Basic functionality tests
- State management tests
- Store operations tests
- Cache operations tests
- Observer pattern tests

Total: 25 tests passed across 5 test suites

## Security

Security scans and reports are available at:

- [Socket.dev](https://socket.dev/npm/package/memorio)
- [Snyk.io](https://security.snyk.io/package/npm/memorio)

## License

MIT (c) [Dario Passariello](https://dario.passariello.ca/)

---

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

Need help? Feel free to [open an issue](https://github.com/a51-dev/a51.memorio/issues).

---

Created with by [Dario Passariello](https://dario.passariello.ca/) - Copyright (c) 2025
