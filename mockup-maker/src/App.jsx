import Button from './components/Button/Button';
import { parsePrompt } from './Parser';
import './App.scss';
import { useState } from 'react';


export default function App() {

    const [isActiveAjouter, setIsActiveAjouter] = useState(false);
    const [isActiveGenerer, setIsActiveGenerer] = useState(false);
    const [prompts, setPrompts] = useState(['']);
    const [configs, setConfigs] = useState([]);

    const handleChangePrompt = (index, value) => {
      prompts[index] = value;
      setPrompts([...prompts]);
    };

    const handleAddPrompt = () => setPrompts([...prompts, '']);

    const handleGenerateAll = () => {
      const results = prompts.map(p => parsePrompt(p));
      setConfigs(results);
    };

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
      {prompts.map((p, i) => (
        <textarea
          key={i}
          placeholder={`Décrivez l'application ${i+1}...`}
          value={p}
          onChange={ (e) => handleChangePrompt(i, e.target.value) }
        />
      ))}
      <div className="buttons">
        <button 
          className={isActiveAjouter ? "active" : ""} 
          onClick={() => { handleClickAjouter(); handleAddPrompt(); }}
        >
          Ajouter une description
        </button>
        <button
        className={isActiveGenerer ? "active" : ""}
        onClick={ () => { handleClickGenerer(); handleGenerateAll(); }}
        >
          Générer toutes les maquettes
        </button>
      </div>
      <div className="previews">
        {
        configs.map((config, i) => (
          <div className="preview" key={i}>
            {config.wants.button && (
              <Button text="Commander maintenant" color={config.primary} />
            )}
          </div>
        ))
        }
      </div>
    </div>
  )
}
