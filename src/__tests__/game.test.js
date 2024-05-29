import { game, sortHerosByHealth } from "../index";

test("check high health", () => {
  const hero = { name: "Маг", health: 90 };
  const result1 = game(hero);
  expect(result1).toBe("healthy");
});

test("check middle health", () => {
  const hero2 = { name: "лучник", health: 45 };
  const result2 = game(hero2);
  expect(result2).toBe("wounded");
});

test("check low health", () => {
  const hero3 = { name: "лучник", health: 0 };
  const result3 = game(hero3);
  expect(result3).toBe("critical");
});

test("sort heros by health", () => {
  const heros = [
    { name: "мечник", health: 10 },
    { name: "маг", health: 100 },
    { name: "лучник", health: 80 },
  ];
  const result = sortHerosByHealth(heros);
  expect(result).toEqual([
    { name: "маг", health: 100 },
    { name: "лучник", health: 80 },
    { name: "мечник", health: 10 },
  ]);
});
