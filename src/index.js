export const game = (hero) => {
  if (hero.health > 50) {
    return "healthy";
  }
  if (hero.health < 15) {
    return "critical";
  }
  if (15 <= hero.health <= 50) {
    return "wounded";
  }
};

export const sortHerosByHealth = (heros) => {
  return heros.sort((a, b) => b.health - a.health);
};
