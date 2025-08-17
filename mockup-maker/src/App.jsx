import Button from './components/Button/Button';
import './App.scss';
import { useState } from 'react';


export default function App() {

    const [isActiveAjouter, setIsActiveAjouter] = useState(false);
    const [isActiveGenerer, setIsActiveGenerer] = useState(false);

    const handleClickAjouter = () => {
      setIsActiveAjouter(true)
      setTimeout( () => setIsActiveAjouter(false), 200)
    }

    const handleClickGenerer = () => {
      setIsActiveGenerer(true)
      setTimeout( () => setIsActiveGenerer(false), 200)
    }

  return (
    <div className="app">
      <h1>Générateur de maquettes multiples</h1>
      <textarea placeholder="Décrivez l'application..."></textarea>
      <div className="buttons">
        <button 
          className={isActiveAjouter ? "active" : ""} 
          onClick={() => handleClickAjouter()}
        >
          Ajouter une description
        </button>
        <button
        className={isActiveGenerer ? "active" : ""}
        onClick={ () => handleClickGenerer()}
        >
          Générer toutes les maquettes
        </button>
      </div>
      <div className="previews">
        <div className="preview">
          <Button text="Commander maintenant" />
        </div>
      </div>
    </div>
  )
}
