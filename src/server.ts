// Đối tượng User => chỉ là một khuôn mẫu
// class User {
//   // khai báo các thuộc tính property(thuộc tính của đối tượng)
//   // Từ khóa this dùng để trỏ đến đối tượng mà nó đang đứng
//   userId: number;
//   userName: string;
//   age: number;
//   address: string;
//   //  Hàm tạo đối tượng
//   constructor(userId: number, userName: string, age: number, address: string) {
//     // Gán lại giá trị cho các thuộc tính của đối tượng user
//     this.userId = userId;
//     this.userName = userName;
//     this.age = age;
//     this.address = address;
//   }
//   getName(): string {
//     return this.userName;
//   }
// }
// khởi tạo đối tượng => sử dụng từ khóa new
// const anhNam = new User(1, "phuong nam", 20, "ha noi");
// const nnn = new User(1, "phuong bắc", 20, "ha noi");
// console.log("nnn:", nnn.getName());
// console.log("anhNam:", anhNam);

// class Product {
//   id: number;
//   price: number;
//   from: string;
//   constructor(id: number, price: number, from: string) {
//     this.id = id;
//     this.price = price;
//     this.from = from;
//   }
// }
// const id = Math.floor(Math.random() * 1000);
// const product = new Product(id, 20000, "ha noi");
// console.log("product:", product);

// bai tap 1 ==================================
// class Circle {
//     r: number;
//     pi: number;

//     constructor(r: number, pi: number) {
//       this.r = r;
//       this.pi = pi;
//     }

//     getCircle(): number {
//       return 2 * this.r * this.pi;
//     }
//   }

//   const circle = new Circle(2, 3.14);
//   console.log("Chu vi của hình tròn:", circle.getCircle());

// class Person {
//   public id: number;
//   public name: string;
//   private age: number;
//   private address: string;
//   constructor(
//     personId: number,
//     personName: string,
//     personAge: number,
//     personAddress: string
//   ) {
//     this.id = personId;
//     this.name = personName;
//     this.age = personAge;
//     this.address = personAddress;
//   }

//   get getAge(): number {
//     return this.age;
//   }
//   set setAge(newAge: number) {
//     this.age = newAge;
//   }

//   run() {
//     return "runing ...";
//   }
// }

// class Student extends Person {
//   className: string;
//   score: number;
//   constructor(
//     personId: number,
//     personName: string,
//     personAge: number,
//     personAddress: string,
//     className: string,
//     score: number
//   ) {
//     super(personId, personName, personAge, personAddress);
//     this.className = className;
//     this.score = score;
//   }
//   learn() {
//     return "learning ...";
//   }
// }

// class Employee extends Person {
//   department: string;
//   salary: number;

//   constructor(
//     personId: number,
//     personName: string,
//     personAge: number,
//     personAddress: string,
//     department: string,
//     salary: number
//   ) {
//     super(personId, personName, personAge, personAddress);
//     this.department = department;
//     this.salary = salary;
//   }
// }

// const student1 = new Student(1, "Maria", 21, "Japan", "Class01", 10);
// // console.log("student1:", student1);
// console.log("Tuoi cu", student1.getAge);
// student1.setAge = 22;
// console.log("tuoi moi", student1.getAge);

// const employee = new Employee(1, "Maria", 1, "Japan", "phong bao ve", 100000);
// // console.log("employee:", employee);

// bai tap 2: =======================================
// class QuadraticEquation {
//   private a: number;
//   private b: number;
//   private c: number;
//   constructor(a: number, b: number, c: number) {
//     this.a = a;
//     this.b = b;
//     this.c = c;
//   }
//   get getA(): number {
//     return this.a;
//   }
//   set setA(newA: number) {
//     this.a = newA;
//   }
//   get getB(): number {
//     return this.b;
//   }
//   set setB(newB: number) {
//     this.b = newB;
//   }

//   get getC(): number {
//     return this.c;
//   }
//   set setC(newC: number) {
//     this.c = newC;
//   }
//   getDiscriminant(): number {
//     return this.b * this.b - 4 * this.a * this.c;
//   }

//   getRoot1(): number {
//     const delta = this.getDiscriminant();
//     if (delta < 0) {
//       return 0;
//     }
//     return (-this.b + Math.sqrt(delta)) / (2 * this.a);
//   }
//   getRoot2(): number {
//     const delta = this.getDiscriminant();
//     if (delta < 0) {
//       return 0;
//     }
//     return (-this.b - Math.sqrt(delta)) / (2 * this.a);
//   }
// }

// const equation = new QuadraticEquation(1, -3, 2);
// const delta = equation.getDiscriminant();

// if (delta > 0) {
//     const root1 = equation.getRoot1();
//     const root2 = equation.getRoot2();
//     console.log(`Nghiệm 1: ${root1}`);
//     console.log(`Nghiệm 2: ${root2}`);
//   } else if (delta === 0) {
//     const root1 = equation.getRoot1();
//     console.log(`Nghiệm duy nhất: ${root1}`);
//   } else {
//     console.log("Phương trình không có nghiệm thực.");
//   }

// bai tap 5:
class Employee {
    id: number;
    name: string;
    age: number;
    gen: string;
    rate: number;
    salary: number;
  
    constructor(
        id: number,
        name: string,
        age: number,
        gen: string,
        rate: number
      ) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.gen = gen;
        this.rate = rate;
        this.salary = 0; 
        this.calSalary(); 
      }
      
  
    calSalary() {
      this.salary = this.rate * 1300000;
    }
  }
  
  const main = new Employee(1, "tu", 20, "nam", 3);
  console.log("main:", main);
  
