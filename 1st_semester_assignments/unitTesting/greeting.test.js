var utils  = require('course-utilities');
var greeting = utils.load('./greeting.js', 'greeting');

test('outputs the correct string', () => {
    expect(greeting("Elizabeth")).toBe("Hello, Elizabeth");
    expect(greeting(null)).toBe("Hello there!");
    expect(greeting("JOSE")).toBe("HELLO JOSE!");
    expect(greeting(["Jose", "Pep"])).toBe("Hello, Jose, Pep");
    expect(greeting(["Alex", "Arsene", "Jose", "Zidane"])).toBe("Hello, Alex, Arsene, Jose, Zidane");
  });