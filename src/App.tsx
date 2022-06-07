import React from 'react';
import Header from "./components/Header";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className={"bg-gray min-h-screen"}>
        <Header />
        <HomePage />
    </div>
  );
}

export default App;
