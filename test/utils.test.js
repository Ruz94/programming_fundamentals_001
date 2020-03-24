const utils = require('../app/bookshop_utils');

describe("utils.addVAT", () => {
  test("returns 36 when passed 30", () => {
    expect(utils.addVAT(30)).toBe(36);
  });
  
  test("returns 120 when passed 100", () => {
    expect(utils.addVAT(100)).toBe(120);
  });

  test("returns 118.8 when passed 99", () => {
    expect(utils.addVAT(99)).toBe(118.8);
  });

  test("returns 240 when passed 200", () => {
    expect(utils.addVAT(200)).toBe(240);
  });
});

describe("utils.getFullName", () => {
  test("returns Haruki Murakami when passed Haruki and Murakami", () => {
    expect(utils.getFullName("Haruki", "Murakami")).toBe("Haruki Murakami");
  });
})

describe("utils.makeHalfPrice", () => {
  test("returns 150 when passed 100", () => {
    expect(utils.makeHalfPrice(100)).toBe(150);
  });
})

describe("utils.countBooks", () => {
  test("returns book titles and number of books in the array", () => {
    expect(utils.countBooks(["Harry Potter and the Philosophers Stone", "Harry Potter and the Chamber of Secrets", "Harry Potter and the Prisoner of Azkaban"])).toBe(3);
  });
})

describe("utils.isInStock", () => {
  test("returns if book is in stock", () => {
    const book = {
      title: "The Stone Diaries",
      author: "Carol Shields",
      yearOfPublication: 1993,
      quantity: 0
    };    
    expect(utils.isInStock(book)).toBe(false);
  });
})

describe("utils.getTotalOrderPrice", () => {
  test("returns total price with VAT applied", () => {
    expect(utils.getTotalOrderPrice(18, 2)).toBe(43.20);
  });
})