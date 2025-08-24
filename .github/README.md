# Memorio

> A lightweight, type-safe state management library for modern JavaScript applications

![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-blue?logo=typescript)
![Node.js](https://img.shields.io/badge/Node.js-24.3.0-green?logo=node.js)
![Jest](https://img.shields.io/badge/Jest-30.0.5-red?logo=jest)
![ESLint](https://img.shields.io/badge/ESLint-9.34.0-purple?logo=eslint)
![esbuild](https://img.shields.io/badge/esbuild-0.25.9-yellow?logo=esbuild)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Version](https://img.shields.io/badge/version-0.2.15-orange)

![Tests](https://img.shields.io/badge/tests-passing-brightgreen)
![Coverage](https://img.shields.io/badge/coverage-25%20passed-success)

## 📋 Table of Contents

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

## ✨ Features

- 🔄 Reactive state management with observer pattern
- 💾 Persistent storage with Store API
- ⚡ Session management for temporary data
- 🔒 Type-safe with full TypeScript support
- 🧪 Comprehensive test coverage
- 🎯 Zero dependencies
- 🔍 Easy debugging with proxy-based state

## 📦 Installation

```bash
npm install memorio
# or
yarn add memorio
# or
pnpm add memorio
```

✅ All test suites are passing:

- Basic functionality tests
- State management tests
- Store operations tests
- Cache operations tests
- Observer pattern tests

Total: 25 tests passed across 5 test suites

## 🚀 Quick Start

```javascript
import 'memorio';

// State Management
state.counter = 0;
state.user = { name: 'John', age: 30 };

// Observer Pattern
observer('state.counter', (newValue, oldValue) => {
  console.log(`Counter changed from ${oldValue} to ${newValue}`);
});

// Store (Persistent Storage)
store.set('preferences', { theme: 'dark' });
const preferences = store.get('preferences');

// Session Storage
session.set('token', 'user-jwt-token');
const token = session.get('token');
```

## 📖 API Reference

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
observer('state.user', (newValue, oldValue) => {
  console.log('User updated:', newValue);
});

// With React useState
const [user, setUser] = useState();
observer('state.user', () => {
  setUser(state.user);
});

// With React useEffect
useEffect(() => {
  console.log('User changed:', state.user);
}, [state.user]);
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
session.set('userSession', {
  id: 'user123',
  lastActive: Date.now()
});

// Getting session data
const userData = session.get('userSession');

// Checking session size
const activeItems = session.size();

// Removing session data
session.remove('userSession');

// Clearing all session data
session.removeAll();

  // Remove all stored data if necessary
  // store.removeAll();

  return (
    <div>
      <h1 id="name">...</h1>
    </div>
  );
}

export default App;
```

---

## SESSION

Session storage provides a way to store data for the duration of a page session. The data persists as long as the browser is open and survives over page reloads, but is lost when the browser tab or window is closed.

```js
// Set a session value:
session.set("userId", "12345")

// Get a session value:
session.get("userId") // Output: "12345"

// Remove a specific session value:
session.remove("userId")

// Get the number of items in session:
session.size() // Output: number of stored items

// Remove all session values:
session.removeAll()
```

### Example use Session in React

```js
import { useEffect } from 'react';
import 'memorio';

function UserSession() {
  useEffect(() => {
    // Store user session data
    session.set('userSession', {
      id: '12345',
      lastActive: Date.now(),
      preferences: {
        theme: 'dark',
        language: 'en'
      }
    });

    // Retrieve session data
    const userData = session.get('userSession');
    console.log('User session:', userData);

    // Clean up on component unmount
    return () => {
      session.remove('userSession');
    };
  }, []);

  return (
    <div>
      {/* Your component JSX */}
    </div>
  );
}

export default UserSession;
```

---

## 🧪 Testing

✅ All test suites are passing:

- Basic functionality tests
- State management tests
- Store operations tests
- Cache operations tests
- Observer pattern tests

Total: 25 tests passed across 5 test suites

## 🔒 Security

Security scans and reports are available at:
- [Socket.dev](https://socket.dev/npm/package/memorio)
- [Snyk.io](https://security.snyk.io/package/npm/memorio)

## 📄 License

MIT © [Dario Passariello](https://dario.passariello.ca/)

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Support

Need help? Feel free to [open an issue](https://github.com/a51-dev/a51.memorio/issues).

---

Created with ❤️ by [Dario Passariello](https://dario.passariello.ca/) - Copyright © 2025
