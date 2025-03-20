import './css/App.css';
import UltPool from './components/UltPool';
import SpellPool from './components/SpellPool';
import TeamPanel from './components/TeamPanel';
import DraftPanel from './components/DraftPanel';

const App = () => {
  return (
    <div className="content">

      <DraftPanel
        radiantHeroes={[
          { image: "stock.jpeg", abilities: ["stock.jpeg", "stock.jpeg", "stock.jpeg", "stock.jpeg"] },
          { image: "stock.jpeg", abilities: ["stock.jpeg", "stock.jpeg", "stock.jpeg", "stock.jpeg"] },
          { image: "stock.jpeg", abilities: ["stock.jpeg", "stock.jpeg", "stock.jpeg", "stock.jpeg"] },
          { image: "stock.jpeg", abilities: ["stock.jpeg", "stock.jpeg", "stock.jpeg", "stock.jpeg"] },
          { image: "stock.jpeg", abilities: ["stock.jpeg", "stock.jpeg", "stock.jpeg", "stock.jpeg"] }
        ]}
        direHeroes={[
          { image: "stock.jpeg", abilities: ["stock.jpeg", "stock.jpeg", "stock.jpeg", "stock.jpeg"] },
          { image: "stock.jpeg", abilities: ["stock.jpeg", "stock.jpeg", "stock.jpeg", "stock.jpeg"] },
          { image: "stock.jpeg", abilities: ["stock.jpeg", "stock.jpeg", "stock.jpeg", "stock.jpeg"] },
          { image: "stock.jpeg", abilities: ["stock.jpeg", "stock.jpeg", "stock.jpeg", "stock.jpeg"] },
          { image: "stock.jpeg", abilities: ["stock.jpeg", "stock.jpeg", "stock.jpeg", "stock.jpeg"] }
        ]}
        ultimateAbilities={[
          "stock.jpeg","stock.jpeg","stock.jpeg",
          "stock.jpeg","stock.jpeg","stock.jpeg",
          "stock.jpeg","stock.jpeg","stock.jpeg",
          "stock.jpeg","stock.jpeg","stock.jpeg"
        ]}
        abilitiesLeft={[
          "stock.jpeg","stock.jpeg","stock.jpeg",
          "stock.jpeg","stock.jpeg","stock.jpeg",
          "stock.jpeg","stock.jpeg","stock.jpeg",
          "stock.jpeg","stock.jpeg","stock.jpeg",
          "stock.jpeg","stock.jpeg","stock.jpeg",
          "stock.jpeg","stock.jpeg","stock.jpeg"
        ]}
        abilitiesRight={[
          "stock.jpeg","stock.jpeg","stock.jpeg",
          "stock.jpeg","stock.jpeg","stock.jpeg",
          "stock.jpeg","stock.jpeg","stock.jpeg",
          "stock.jpeg","stock.jpeg","stock.jpeg",
          "stock.jpeg","stock.jpeg","stock.jpeg",
          "stock.jpeg","stock.jpeg","stock.jpeg"
        ]}
      />



      
    </div>
  );
};

export default App;
