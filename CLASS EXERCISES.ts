// masala1

class Car {
  private year: number;
  private fuelType: string;
  public company: string;
  public model: string;

  constructor(company: string, model: string, year: number, fuelType: string) {
    this.company = company;
    this.model = model;
    this.year = year;
    this.fuelType = fuelType;
  }

  get age(): number {
    const currentYear = new Date().getFullYear();
    return currentYear - this.year;
  }

  getInfo(): string {
    return `Company: ${this.company}, Model: ${this.model}, Year: ${this.year}, Fuel Type: ${this.fuelType}`;
  }
}

const myCar = new Car("Tesla", "Model S", 2020, "Electric");
console.log(myCar.age);
console.log(myCar.getInfo());

// masala2

class TodoList {
  private todos: { id: number; task: string }[];

  constructor() {
    this.todos = [];
  }

  addTask(task: string): void {
    const id = this.todos.length + 1;
    this.todos.push({ id, task });
  }

  deleteTask(id: number): void {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  editTask(id: number, updatedTask: string): void {
    const todo = this.getTask(id);
    if (todo) {
      todo.task = updatedTask;
    }
  }

  getTask(id: number): { id: number; task: string } | undefined {
    return this.todos.find((todo) => todo.id === id);
  }

  getTasks(): { id: number; task: string }[] {
    return this.todos;
  }
}

const myTodoList = new TodoList();

myTodoList.addTask("Buy groceries");
myTodoList.addTask("Clean the house");

console.log(myTodoList.getTasks());

myTodoList.editTask(1, "Buy fruits");

console.log(myTodoList.getTasks());

myTodoList.deleteTask(2);

console.log(myTodoList.getTasks());

// masala3

class Employee {
  firstName: string;
  lastName: string;
  role: string;

  constructor(firstName: string, lastName: string, role: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.role = role;
  }

  introduce(): void {
    console.log(
      `Hi, I'm ${this.firstName} ${this.lastName}, and I work as a ${this.role}.`
    );
  }
}

class Manager extends Employee {
  teamSize: number;

  constructor(
    firstName: string,
    lastName: string,
    role: string,
    teamSize: number
  ) {
    super(firstName, lastName, role);
    this.teamSize = teamSize;
  }

  introduce(): void {
    console.log(
      `Hi, I'm ${this.firstName} ${this.lastName}, and I work as a ${this.role} managing a team of ${this.teamSize} people.`
    );
  }
}

class Developer extends Employee {
  programmingLanguage: string;

  constructor(
    firstName: string,
    lastName: string,
    role: string,
    programmingLanguage: string
  ) {
    super(firstName, lastName, role);
    this.programmingLanguage = programmingLanguage;
  }

  introduce(): void {
    console.log(
      `Hi, I'm ${this.firstName} ${this.lastName}, and I work as a ${this.role} specializing in ${this.programmingLanguage} programming.`
    );
  }
}

const employee = new Employee("John", "Doe", "Employee");
employee.introduce();

const manager = new Manager("Jane", "Smith", "Manager", 10);
manager.introduce();

const developer = new Developer("Alice", "Johnson", "Developer", "JavaScript");
developer.introduce();

// masala4

interface Person {
  name: string;
  age: number;
}

interface Address {
  street: string;
  city: string;
  zipCode: string;
}

interface Email {
  email: string;
}

interface Phone {
  phoneNumber: string;
}

type ContactInfo = Person & Address & Email & Phone;

const contact: ContactInfo = {
  name: "John Doe",
  age: 30,
  street: "123 Main St",
  city: "SomeCity",
  zipCode: "12345",
  email: "johndoe@example.com",
  phoneNumber: "123-456-7890",
};

console.log(contact.name);
console.log(contact.age);
console.log(contact.street);
console.log(contact.city);
console.log(contact.zipCode);
console.log(contact.email);
console.log(contact.phoneNumber);

// masala5

interface Square {
  sideLength: number;
}

interface Circle {
  radius: number;
}

interface Shape {
  calculateArea(): number;
  calculatePerimeter(): number;
}

class SquareShape implements Square, Shape {
  sideLength: number;

  constructor(sideLength: number) {
    this.sideLength = sideLength;
  }

  calculateArea(): number {
    return this.sideLength * this.sideLength;
  }

  calculatePerimeter(): number {
    return 4 * this.sideLength;
  }
}

class CircleShape implements Circle, Shape {
  radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }

  calculatePerimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}

const square = new SquareShape(5);
console.log(square.calculateArea());
console.log(square.calculatePerimeter());

const circle = new CircleShape(3);
console.log(circle.calculateArea());
console.log(circle.calculatePerimeter());

// masala6

function getArrayLength<T>(arr: T[]): number {
  return arr.length;
}

const numbers = [1, 2, 3, 4, 5];
console.log(getArrayLength(numbers));

const strings = ["apple", "banana", "cherry"];
console.log(getArrayLength(strings));

const emptyArray: number[] = [];
console.log(getArrayLength(emptyArray));
