var User = /** @class */ (function () {
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        console.log("User Created: " + this.name);
    }
    User.prototype.register = function () {
        console.log(this.name + ' is now registered');
    };
    return User;
}());
var John = new User('John', 'hello@hello.lo', 32);
John.register();
