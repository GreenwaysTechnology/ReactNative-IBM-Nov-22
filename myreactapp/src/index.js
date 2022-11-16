import React from "react";
import ReactDOM from "react-dom/client";
import { Profile } from "./profile/profile";
//Root Node 
const App = () => <div>
    <Profile/>
</div>

const rootElement = ReactDOM.createRoot(document.getElementById('root'))

rootElement.render(<App />)