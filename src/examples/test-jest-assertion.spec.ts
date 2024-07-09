/* eslint-disable no-undef */

describe('Primitive values', () => {
  it('should test jest assertions', () => {
    const number = 10;

    expect(number).toBe(10);
    expect(number).toEqual(10);
    expect(number).toBeGreaterThan(9);
  });
});

describe('Objects', () => {
  it('should test jest assertions with objects', () => {
    const person1 = { name: 'Gabriel', age: 29 };
    const person2 = { ...person1 };

    expect(person1).toEqual(person2);
    expect(person1).toHaveProperty('age');
    expect(person1).toHaveProperty('age', 29);
    expect(person1).not.toHaveProperty('lastName');
    expect(person1.name).toBe('Gabriel');
  });
});
