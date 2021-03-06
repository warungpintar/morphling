import React, { useState } from 'react';
import logo from './logo.svg';
import { withFeatureToggle } from '@warungpintar/morphling-react';
import { createToggleFn } from '@warungpintar/morphling-core';

import './App.css';

const fnA = () => alert('im disabled');
const fnB = () => alert('im enabled');

const toggledFn = createToggleFn('test-button')(fnA)(fnB);

const ButtonOld = () => <button onClick={toggledFn}>Button Fallback</button>;
const ButtonNew = () => <button onClick={toggledFn}>Button New</button>;

const FlaggedButton = withFeatureToggle('test-button')(ButtonOld)(ButtonNew);

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          <FlaggedButton />
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
