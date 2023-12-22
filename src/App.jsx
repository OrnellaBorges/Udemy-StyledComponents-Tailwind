import AuthInputs from "./components/AuthInputs.jsx";
import Header from "./components/Header.jsx";
import Exo2 from "./components/Exo2.jsx";

export default function App() {
    return (
        <>
            <Header />
            <main>
                <AuthInputs />
            </main>
            <section>
                <h2>Exercice 2 : Dynamic styling with css classes</h2>
                <p>blablabla</p>
                <Exo2 />
            </section>
        </>
    );
}
