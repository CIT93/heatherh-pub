const object1 = {
  a: "somestring",
  b: 42,
  c: "sunshine",
  d: "pikachu"
};

for (const [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}