class User {
    name: string;
    email: string;
    age: number;

    constructor(name:string, email:string, age:number){
        this.name = name;
        this.email = email;
        this.age = age;

        console.log("User Created: " + this.name)
    }
}

let John = new User('John', 'hello@hello.lo', 32)