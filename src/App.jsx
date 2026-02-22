import reactImg from "./assets/react-core-concepts.png";
import componentsImg from "./assets/components.png";

const reactDescription = ["Fundamental", "Crucial", "Important"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactDescription[genRandomInt(2)];

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function CoreConcepts(props) {
  return (
    <li>
      <img src={props.image} alt={props.imgAlt} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section>
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcepts
              title="Components"
              description="Components let you split the UI into independent, reusable pieces, and think about each piece in isolation."
              image={componentsImg}
              imgAlt="Components"
            />
            <CoreConcepts
              title="Props"
              description="Props (short for properties) are a way to pass data from parent to child components."
            />
            <CoreConcepts />
            <CoreConcepts />
          </ul>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
