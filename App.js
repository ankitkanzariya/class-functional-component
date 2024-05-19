import React from 'react';
import Counter from './Counter'; // Class component (assuming Counter is in a separate file)
import CounterWithHooks from './CounterWithHooks'; // Functional component with Hooks

function App() {
  return (
    <div className="App">
      <h1>Component Lifecycle in React</h1>
      <Counter />
      <CounterWithHooks />
    </div>
  );
}

export default App;
