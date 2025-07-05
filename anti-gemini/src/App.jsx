import React, { useState, useEffect } from 'react'
import DOMAINS from './domains';

function App() {
  const [on, setOn] = useState(true);

  useEffect(() => {
    if (!on) return;
    const url = window.location.href;
    if (!url.includes("google.com")) return;
    
    const params = new URLSearchParams(window.location.search);
    const q = params.get("q") || "";

    if (q.includes("-gemini")) return;

    DOMAINS.forEach(domain => {
      if (q.includes(domain)) return;
    })

    params.set("q", q + " -gemini");

    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.location.replace(newUrl);
  }, []);

  return (
    <div>
      <h1>AntiGemini</h1>
      <h3>Google AI Overview Disabler</h3>
      <label className="switch">
        <input type="checkbox"/>
        <span className="slider round"></span>
      </label>
    </div>
  );
}
export default App;
