import './Title.scss';

function Title({ title }) {
  return (
    <section className="title">
      <h2>{title}</h2>
      <p>Bienvenue dans votre application personnalisée !</p>
    </section>
  );
}

export default Title;