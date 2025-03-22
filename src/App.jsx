import './css/App.css';
import DraftPanel from './components/DraftPanel';
import React, { useEffect, useState } from "react";
import { heroAbilityMap } from "./code/AbilityMap";

const App = () => {

  const [radiant, setRadiant] = useState([]);
  const [dire, setDire] = useState([]);
  const [unused, setUnused] = useState([]);
  const [ultPool, setUltPool] = useState([]);
  const [leftPool, setLeftPool] = useState([]);
  const [rightPool, setRightPool] = useState([]);
  const [draftOrder, setDraftOrder] = useState([]);
  const [currentPickIndex, setCurrentPickIndex] = useState(0);
  const [ultimateImages, setUltimateImages] = useState([]);


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
  
        const buildHero = (hero) => {
          const heroSlug = hero.name.replace("npc_dota_hero_", "").toLowerCase();
          const abilityNames = heroAbilityMap[hero.id]

          // Add ultimate to the global pool
          ultPool_.push(abilityIcon(abilityNames[3]));

          return {
          id: hero.id,
          name: hero.localized_name,
          attr: hero.primary_attr,
          image: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${heroSlug}.png`,
          abilities: abilityNames.map(abilityIcon),
          selectedAbilities: ["stock.jpeg","stock.jpeg","stock.jpeg","stock.jpeg"]
          }
        }

        const heroes = selected.map(buildHero).filter(Boolean);

        // Assign ultimates
        setUltimateImages([...ultPool_]);


        const radiantTeam = heroes.slice(0, 5);
        const direTeam = heroes.slice(5, 10);
        const leftover = heroes.slice(10);
        
        // Assign spells to correct pools
        radiantTeam.forEach(hero => {
          leftPool_.push(...hero.abilities.slice(0, 3));
        });

        direTeam.forEach(hero => {
          rightPool_.push(...hero.abilities.slice(0, 3));
        });

        if (leftover[0]) {
          leftPool_.push(...leftover[0].abilities.slice(0, 3));
        }

        if (leftover[1]) {
          rightPool_.push(...leftover[1].abilities.slice(0, 3));
        }

        setRadiant(radiantTeam);
        setDire(direTeam);
        setUnused(leftover);
        setUltPool(ultPool_);
        setLeftPool(leftPool_);
        setRightPool(rightPool_);

        // Generate alternating snake draft order (Radiant: 0-4, Dire: 5-9)
        let rounds = 4;
        let draftOrder = [];

        for (let r = 0; r < rounds; r++) {
          let round = [];

          for (let i = 0; i < 5; i++) {
            round.push(i);     // Radiant hero index
            round.push(i + 5); // Dire hero index
          }

          // Snake effect: reverse every other round
          if (r % 2 !== 0) {
            round.reverse();
          }

          draftOrder.push(...round);
        }

        setDraftOrder(draftOrder);
        setCurrentPickIndex(0);
        
      })
      .catch((err) => console.error("Error loading heroes:", err));
  }, []);

  const handleAbilityPick = (abilityImage) => {
    const heroIndex = draftOrder[currentPickIndex];
  
    const isRadiant = heroIndex < radiant.length;
    const team = isRadiant ? radiant : dire;
    const setTeam = isRadiant ? setRadiant : setDire;
    const teamIndex = isRadiant ? heroIndex : heroIndex - radiant.length;
  
    const hero = { ...team[teamIndex] };
    const abilities = [...hero.selectedAbilities];
  
    const currentCount = abilities.slice(0, 3).filter(a => a !== "stock.jpeg").length;
    const hasUltimate = ultimateImages.includes(abilities[3]); 
    const isUlt = ultimateImages.includes(abilityImage);
  
    if (abilityImage === "stock.jpeg") {
      console.log("Cannot select a placeholder image.");
      return;
    }
    // Enforce ultimate-only final pick
    if (currentCount === 3 && !isUlt) {
      console.log("Final pick must be an ultimate.");
      return;
    }
  
    // Prevent multiple ultimates
    if (isUlt) {
      if (hasUltimate) {
        console.log("Hero already has an ultimate.");
        return;
      }
      abilities[3] = abilityImage;
    } else {
      // Place non-ult in first open slot 0-2
      const nextSlot = abilities.findIndex((a, i) => a === "stock.jpeg" && i < 3);
      if (nextSlot === -1) {
        console.log("No available slots for non-ultimate ability.");
        return;
      }
      abilities[nextSlot] = abilityImage;
    }
    
  
    const updatedTeam = [...team];
    updatedTeam[teamIndex] = { ...hero, selectedAbilities: abilities };
    setTeam(updatedTeam);
  
    // Replace ability in pool with stock image
    if (ultPool.includes(abilityImage)) {
      setUltPool((prev) => prev.map((a) => a === abilityImage ? "stock.jpeg" : a));
    } else if (leftPool.includes(abilityImage)) {
      setLeftPool((prev) => prev.map((a) => a === abilityImage ? "stock.jpeg" : a));
    } else if (rightPool.includes(abilityImage)) {
      setRightPool((prev) => prev.map((a) => a === abilityImage ? "stock.jpeg" : a));
    }
  
    // Advance to next draft pick
    setCurrentPickIndex((prev) => prev + 1);
  };
  
  
  return (
    <div className="content">
      <DraftPanel
        radiantHeroes={radiant}
        direHeroes={dire}
        ultimateAbilities={ultPool}
        abilitiesLeft={leftPool}
        abilitiesRight={rightPool}
        onAbilityPick={handleAbilityPick}
      />
      
    </div>
  );
};

export default App;
