// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// import Dashboard from './pages/Dashboard';

// function App() {
//   return (
//       <div style={{ minHeight: "100vh", background: "#fafafa" }}>
//         <Dashboard />
//       </div>
//   ) 
// }

// export default App;

// import Dashboard from "./pages/Dashboard";
// import Data from "./pages/Data";

// function App() {
//   return (
//     <div style={{ padding: 40 }}>
//       <Data />
//     </div>
//   );
// }

// export default App;


import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Data from "./pages/Data"; // Data.tsx
import File from "./pages/File";

export default function App() {
  return (
    <Routes>
      {/* Default page */}
      <Route path="/" element={<Dashboard />} />

      {/* Data page */}
      <Route path="/data" element={<Data />} />

      {/* File Upload Page */}
      <Route path = "/file" element={<File />} />
    </Routes>
  );
}


