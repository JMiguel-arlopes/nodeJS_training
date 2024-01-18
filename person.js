class Person {
  constructor(name) {
    this.name = name;
  }

  sayMyName() {
    return `deu bom! meu nome é ${this.name}.`;
  }
}

module.exports = {
  Person: Person,
};
