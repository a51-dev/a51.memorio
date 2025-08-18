# Memorio

## Create State + Observer and Store in easy way

---
*Created by Dario Passariello - Copyright (c) 2025*

## STATE

```js
// Set a state
state.test = "I am ready" *

// Get the state
state.test *

// List all states
state.list // or just "state" to see the proxy

// Lock a state from edit (Only for Objects or Array)
state.test.lock() *

// Remove a state
state.remove("test")

// Remove all states
state.removeAll()

*["test" is only an example]

```
Observer work for State like useState:

```js
const [change,setChange] = useState()

// Observe state changes and set the react useState
observer(
  'myData',
  () => {
    console.log('myData has changed to:', state.myData);
    setChange[state.myData];
  }
);

or

// you can use the useEffect
useEffect(
  ()=>{
    console.log('myData has changed to:', state.myData);
  }, [state.myData]
)
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

### Example use Store in React

```js
import { useEffect } from 'react';
import 'memorio';

function App() {

  // Store a value in the store (persistent storage)
  store.set(
    'user',
    {
      name: 'John Doe',
      age: 30
    }
  );

  // Use the stored value in a React component
  useEffect(
    () => {
      console.log(store.get("user"));
      // Output: { name: "John Doe", age: 30 }
      document.querySelector("#name").innerText = store.get("user").name
    }, []
  );

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

## Security Check

- [Socket.dev](https://socket.dev/npm/package/memorio)

- [Snyk.io](https://security.snyk.io/package/npm/memorio)
