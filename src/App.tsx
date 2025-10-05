import React from "react";
// import logo from './logo.svg';
import "./App.css";
// import { Application } from './components/Application/Application';
// import { Skills } from './components/Skills/Skills';
// import { Counter } from './components/Counter/Counter';
import { AppProviders } from "./components/providers/app-providers";
import { MuiMode } from "./components/mui/mui-mode";
import { CounterTwo } from "./components/CounterTwo/CounterTwo";
import { useCounter } from "./hooks/use-counter/useCounter";
function App() {
  const counterProps = useCounter({ initialCount: 10 });
  return (
    <AppProviders>
      <div className="App">
        <MuiMode />
        <CounterTwo
          count={counterProps.count}
          handleIncrement={counterProps.increment}
          handleDecrement={counterProps.decrement}
        />
      </div>
    </AppProviders>
  );
}

export default App;
