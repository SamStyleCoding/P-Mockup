import Button from './components/Button/Button';
import { parsePrompt } from './Parser';
import './App.scss';
import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';
import Chat from './components/Chat/Chat';
import Title from './components/Title/Title';
import Form from './components/Form/Form';
import FoodMenu from './components/FoodMenu/FoodMenu';
import Footer from './components/Footer/Footer';


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
          <div className="preview" key={i} style={{ '--primary-color': config.primary }}>
            {config.wants.navbar && <Navbar showLogo={config.wants.logo} logoSrc="logo.png" />}
            {config.wants.title && <Title title={config.title} />}
            {config.wants.products && <Products />}
            {config.wants.foodMenu && (
              <FoodMenu items={['Pizza', 'Burger', 'Salade', 'Pâtes']} />
            )}
            {config.wants.chat && <Chat />}
            {config.wants.form && <Form/>}
            {config.wants.button && (
              <Button text="Commander maintenant"/>
            )}
            {config.wants.footer && <Footer/>}
          </div>
        ))
        }
      </div>
    </div>
  )
}
