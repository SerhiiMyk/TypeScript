function foo(x: string) {
    return x;
}

foo('Hello')

function foo1(): void {
}

function foo2(): number {
    return 100;
}

function foo3(x: { name: string, age: number, skills: string[], status: boolean }) {
}


foo3({name: 'Serhii', age: 26, skills: ['piano', 'guitar'], status: true});

class User {
    name: string;
    age: number;

    greeting(): string {
        return `hello my name is ${this.name}`
    }
}

function foo4(a: User) {
}

let user = new User();
user.age = 30;
user.name = 'Mike';

foo4(user);


interface IUser {
    name: string;
    age: number;

    greeting?(a: string): string;
}

function bar(b: IUser) {
}

bar({name: '', age: 132});
bar({
    name: '', age: 132, greeting: (a: string): string => {
        return 'hello'
    }
});

class X implements IUser {
    prop1: string;
    prop2: string[];
    age: number;
    name: string;
}

bar(new X());

let x = new X();
let iUser: IUser[] = [x, {
    name: 'dsf', age: 435, greeting(a: string): string {
        return 'hello'
    }
}]

function foobar(user: User) {
    user.greeting();
}

let user1 = new User();
foobar(user1);

class UserPr {
    private _name: string;
    private _age: number;

    constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
    }

    greeting(): string {
        return `hello my name is ${this._name}`
    }

    get name(): string {
        return this._name;
    }

    get age(): number {
        return this._age;
    }

    set name(value: string) {
        this._name = value;
    }

    set age(value: number) {
        if (value > 0) {
            this._age = value;
        }
    }
}

let userPr = new UserPr('Oleg', 45);
userPr.age = 50;
console.log(userPr.age);