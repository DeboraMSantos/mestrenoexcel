const calculadora = require("../../models/calculadora.js");
test("Soma de dois números", () => {
  expect(calculadora.dividir(10, 0)).toBe(0);
});
