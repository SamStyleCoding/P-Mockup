import './Form.scss';

export default function Form() {
  return (
    <form className="formulaire">
      <h2>Contactez-nous</h2>
      <div className="form-group">
        <label>Nom</label>
        <input type="text" placeholder="Votre nom" />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input type="email" placeholder="Votre email" />
      </div>
      <div className="form-group">
        <label>Message</label>
        <textarea placeholder="Votre message"></textarea>
      </div>
      <button type="submit">Envoyer</button>
    </form>
  );
}
