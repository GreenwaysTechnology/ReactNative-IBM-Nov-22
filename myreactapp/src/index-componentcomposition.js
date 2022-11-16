import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => <header>
    <h1>IBM</h1>
</header>

const Body = () => <div>
    <section>
        <p>this is sample section</p>
    </section>
    <section>
        <p>this is sample section</p>
    </section>
</div>
const Footer = () => <footer>
    <p>Footer</p>
</footer>

const Page = () => <div>
    <Header />
    <Body />
    <Footer/>
</div>


//Root Node 
const App = () => <div>
    <Page />
</div>



const rootElement = ReactDOM.createRoot(document.getElementById('root'))

rootElement.render(<App />)