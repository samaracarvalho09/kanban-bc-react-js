import { Cards } from "../Cards";
import { InputSearch } from "../InputSearch";
import { Header } from "../Header";
import { Menu } from "../Menu";



export function Home() {
  // const [query, setQuery] = useState("");

const results = filterItems(cardsContent, query);


  return (
    <div style={{ background: "#7c3aed", display: "flex" }}>
      <div>
        <Menu />

      </div>
        <div>
          <Header />
          <InputSearch />
          <Cards items={results}/>
        </div>
    </div>
  );
}
