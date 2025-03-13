import Header2 from "./components/Header/Header2";
import { CORE_CONCEPTS } from "./data";
import CoreConcepts from "./components/CoreConcepts";
import TapButton from "./components/TapButton";
import { EXAMPLES } from "./data_updated";

function App() {

  // const [selectedTopic, setSelectedTopic] = useState('');

  function handleSelect(selectedTopic) {
    // selectedButton = 'components', 'jsx', 'props', 'state'
    console.log(selectedTopic);
  }


  return (
    <div>
      <Header2 />
      <main>
        <section id="core-concepts">
          <h2>핵심 개념들 of React</h2>
          <ul>
            <CoreConcepts image={CORE_CONCEPTS[0].image} title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} />
            <CoreConcepts {...CORE_CONCEPTS[1]}/>
            <CoreConcepts {...CORE_CONCEPTS[2]}/>
            <CoreConcepts {...CORE_CONCEPTS[3]}/>
          </ul>
        </section>
        <section id="examples">
          <h2>예시들</h2>
          <menu>
            <button>Components</button>
            <button>JSX</button>
            <button>Props</button>
            <button>State</button>
          </menu>
          <TapButton onSelect={handleSelect(EXAMPLES.components)}>Components</TapButton>
          <TapButton>JSX</TapButton>
          <TapButton>Props</TapButton>
          <TapButton>State</TapButton>
        </section>
        동적인 버튼의 결과물 
      </main>
    </div>
  );
}

export default App;