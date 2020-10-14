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

    register():void{
        console.log(this.name + ' is now registered')
    }
}

let John = new User('John', 'hello@hello.lo', 32)

John.register()
