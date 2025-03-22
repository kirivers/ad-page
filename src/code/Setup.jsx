export function getRandomHeroIds(count = 12) {
  const heroIds = Array.from({ length: 125 }, (_, i) => i);
  const selected = [];

  while (selected.length < count && heroIds.length > 0) {
    const index = Math.floor(Math.random() * heroIds.length);
    selected.push(heroIds.splice(index, 1)[0]);
  }

  return selected;
}