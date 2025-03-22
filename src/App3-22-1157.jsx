import './css/App.css';
import DraftPanel from './components/DraftPanel';
import React, { useEffect, useState } from "react";
import { heroAbilityMap } from "./code/AbilityMap";

const App = () => {

  const [radiant, setRadiant] = useState([]);
  const [dire, setDire] = useState([]);
  const [unused, setUnused] = useState([]);
  const [allHeroes, setAllHeroes] = useState([]);
  const [heroAbilities, setHeroAbilities] = useState({});
  const [ultPool, setUltPool] = useState({});
  const [leftPool, setLeftPool] = useState({});
  const [rightPool, setRightPool] = useState({});

  
  useEffect(() => {
    Promise.all([
      fetch("https://api.opendota.com/api/heroes").then((res) => res.json()),
      fetch("https://raw.githubusercontent.com/odota/dotaconstants/master/build/hero_abilities.json").then((res) => res.json())
    ])
      .then(([heroesData, abilitiesMap]) => {
        // Randomly select 12 heroes from OpenDota data
        const shuffled = [...heroesData].sort(() => Math.random() - 0.5);
        const selected = shuffled.slice(0, 12);

        const abilityIcon = (name) =>
          `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/${name}.png`;

        const leftPool_ = [];
        const rightPool_ = [];
        const ultPool_ = [];
  
        const buildHeroData = (hero) => {
          const heroSlug = hero.name.replace("npc_dota_hero_", "").toLowerCase();
          const abilityNames = heroAbilityMap[hero.id]

          // Add ultimate to the global pool
          ultPool_.push(abilityIcon(abilityNames[3]));

          return {
          id: hero.id,
          name: hero.localized_name,
          attr: hero.primary_attr,
          image: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${heroSlug}.png`,
          abilities: abilityNames.slice(0, 3).map(abilityIcon)
          }
        }

        const heroes = selected.map(buildHero).filter(Boolean);

        const radiantTeam = heroes.slice(0, 5);
        const direTeam = heroes.slice(5, 10);
        const leftover = heroes.slice(10);
        
        // Assign spells to correct pools
        radiantTeam.forEach(hero => {
          leftPool_.push(...hero.abilities);
        });

        direTeam.forEach(hero => {
          rightPool_.push(...hero.abilities);
        });

        if (leftover[0]) {
          leftPool_.push(...leftover[0].abilities);
        }

        if (leftover[1]) {
          rightPool_.push(...leftover[1].abilities);
        }

        const cleanHero = ({ abilities, ...rest }) => rest;

        setRadiant(radiantTeam.map(cleanHero));
        setDire(direTeam.map(cleanHero));
        setUnused(leftover.map(cleanHero));
        setAllHeroes(heroesData);
        setUltPool(ultPool_);
        setLeftPool(leftPool_);
        setRightPool(rightPool_);
        setHeroAbilities(abilitiesMap);
      })
      .catch((err) => console.error("Error loading heroes:", err));
  }, []);
  

  return (
    <div className="content">
      <DraftPanel
        radiantHeroes={radiant}
        direHeroes={dire}
        ultimateAbilities={ultPool}
        abilitiesLeft={leftPool}
        abilitiesRight={rightPool}
      />
      
    </div>
  );
};

export default App;
