import './FoodMenu.scss';

function FoodMenu({ items }) {
  return (
    <div className="food-menu">
      <h2>Menu du jour</h2>
      <ul>
        {items.length > 0 ? (
          items.map((item, idx) => <li key={idx}>{item}</li>)
        ) : (
          <li>Aucun plat disponible</li>
        )}
      </ul>
    </div>
  );
}

export default FoodMenu;