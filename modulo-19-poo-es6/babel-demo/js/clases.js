class Foo {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    DoStuff() {
        console.log(this.x, this.y);
    }
}

let f = new Foo(10, 20);
