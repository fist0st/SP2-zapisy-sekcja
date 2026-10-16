
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
    const sekcje = [
        "Piłka nożna",
        "Szachy",
        "Robotyka",
        "Pływanie"
    ];

    const [imieNazwisko, setImieNazwisko] = useState("");
    const [numerSekcji, setNumerSekcji] = useState("");

    function zapisz(event) {
        event.preventDefault();

        console.log(imieNazwisko);

        const numer = Number(numerSekcji);

        if (
            numerSekcji.trim() !== "" &&
            Number.isInteger(numer) &&
            numer >= 1 &&
            numer <= sekcje.length
        ) {
            console.log(sekcje[numer - 1]);
        } else {
            console.log("Nieprawidłowy numer sekcji");
        }
    }

    return (
        <div className="container mt-3">
            <h2>Liczba sekcji: {sekcje.length}</h2>

            <ol>
                {sekcje.map((sekcja, index) => (
                    <li key={index}>{sekcja}</li>
                ))}
            </ol>

            <form onSubmit={zapisz}>
                <div className="mb-3">
                    <label
                        htmlFor="imieNazwisko"
                        className="form-label"
                    >
                        Imię i nazwisko:
                    </label>

                    <input
                        type="text"
                        className="form-control"
                        id="imieNazwisko"
                        value={imieNazwisko}
                        onChange={(event) =>
                            setImieNazwisko(event.target.value)
                        }
                    />
                </div>

                <div className="mb-3">
                    <label
                        htmlFor="numerSekcji"
                        className="form-label"
                    >
                        Numer sekcji:
                    </label>

                    <input
                        type="number"
                        className="form-control"
                        id="numerSekcji"
                        value={numerSekcji}
                        onChange={(event) =>
                            setNumerSekcji(event.target.value)
                        }
                    />
                </div>

                <button
                    type="submit"
                    className="btn btn-primary"
                >
                    Zapisz
                </button>
            </form>
        </div>
    );
}

export default App;
