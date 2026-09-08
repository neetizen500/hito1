import Header from "./Header";
import CardPizza from "./CardPizza";

const pizzas = [
  {
    id: 1,
    name: "Pizza Margarita",
    description: "Salsa de tomate, mozzarella fresca y albahaca.",
    price: 8990,
    emoji: "🍕",
  },
  {
    id: 2,
    name: "Pizza Pepperoni",
    description: "Doble mozzarella y pepperoni clásico americano.",
    price: 9990,
    emoji: "🍕",
  },
  {
    id: 3,
    name: "Pizza Cuatro Quesos",
    description: "Mozzarella, gorgonzola, parmesano y provolone.",
    price: 10990,
    emoji: "🍕",
  },
  {
    id: 4,
    name: "Pizza Vegetariana",
    description: "Pimentón, champiñones, cebolla morada y aceitunas.",
    price: 9490,
    emoji: "🍕",
  },
  {
    id: 5,
    name: "Pizza Napolitana",
    description: "Tomate, mozzarella, anchoas y orégano.",
    price: 9990,
    emoji: "🍕",
  },
  {
    id: 6,
    name: "Pizza Hawaiana",
    description: "Jamón, piña y mozzarella.",
    price: 9490,
    emoji: "🍕",
  },
];

const Home = () => {
  return (
    <main className="container">
      <Header />

      <section className="row g-4 pb-5">
        {pizzas.map((pizza) => (
          <div className="col-12 col-sm-6 col-lg-4" key={pizza.id}>
            <CardPizza
              name={pizza.name}
              description={pizza.description}
              price={pizza.price}
              emoji={pizza.emoji}
            />
          </div>
        ))}
      </section>
    </main>
  );
};

export default Home;
