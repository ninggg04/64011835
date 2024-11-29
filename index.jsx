import React from "react";
import ReactDOM from "react-dom";
import App from "./App"; // Import คอมโพเนนต์หลักของแอป

// เรียกใช้งาน App และเรนเดอร์ไปยัง HTML
ReactDOM.render(
  <React.StrictMode>
    
    <App />
  </React.StrictMode>,
  document.getElementById("root") // เชื่อมกับ div ที่มี id="root" ใน index.html
);
