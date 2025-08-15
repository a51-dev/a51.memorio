# Memorio

Memory management for State and Store in easy way

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

```js
// Observe state changes
observer('myData', () => {
  console.log('myData has changed to:', state.myData);
});
```
