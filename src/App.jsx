import AuthInputs from "./components/AuthInputs.jsx";
import TailwindHeader from "./components/TailwindHeader.jsx";
import Exo2 from "./components/Exo2.jsx";

export default function App() {
    return (
        <>
            <TailwindHeader />
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
