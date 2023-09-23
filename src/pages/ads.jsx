import React from 'react';
import './App.css';
import BottomAds from '../ads/adscomp';

function App() {
  return (
    <div className="App">
      {/* Your main content */}
      <h1>Welcome to My Website</h1>
      <p>This is some content...</p>

      {/* Include the BottomAds component */}
      <BottomAds />
    </div>
  );
}

export default App;
