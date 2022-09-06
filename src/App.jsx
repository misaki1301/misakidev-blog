import { useState } from 'react'
import Spline from "@splinetool/react-spline";
import "./App.css"
import Navbar from "./components/Navbar.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <section className={"hero is-medium"}>
            <Spline scene="https://prod.spline.design/7HuTVZPNO-GC6BVA/scene.splinecode" className={"main-section"} />
            <div className={"hero-head"}>
                <Navbar />
            </div>
            <div className="hero-body">
                <div className="container has-text-centered">
                    <p className="title label-cs">
                        Title
                    </p>
                </div>
            </div>
            <div>
                {/*<Spline className={'main-section'} scene="https://prod.spline.design/7HuTVZPNO-GC6BVA/scene.splinecode" />*/}
            </div>
        </section>
        <section className="section">
            <h1 className="title">Tenemos Servidor Personalizado de Minecraft 1.16.5</h1>
            <h2 className="subtitle">
                A simple container to divide your page into <strong>sections</strong>, like the one you're currently
                reading.
            </h2>
        </section>
        <footer className="footer">
            <div className="content has-text-centered">
                <p>
                    <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is
                    licensed
                    <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
                    is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
                </p>
            </div>
        </footer>
    </div>
  )
}

export default App
