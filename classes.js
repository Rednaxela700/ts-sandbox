var User = /** @class */ (function () {
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        console.log("User Created: " + this.name);
    }
    return User;
}());
var John = new User('John', 'hello@hello.lo', 32);
