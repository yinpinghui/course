class Auto {
    maker : string;
    model : string;
}

let audi  = new Auto();
let some :any = {
    maker : "audi",
    model : "q5",
    price : "1000"
}



console.log(Object.getOwnPropertyNames(Auto))
console.log(Object.getOwnPropertyDescriptor(Auto,'maker'))


for ( let key in Object.getOwnPropertyNames(Auto)){
    console.log(key)
    for (let key in some) {
        if (some.hasOwnProperty(key)) {
            some[key] = some[key];
        }
    }
}


class Foo{
    foo = 123
}

const dict = new Foo();
const obj = {} as Foo;

for (let key in dict) {
  if (obj.hasOwnProperty(key)) {
    obj[key] = dict[key];
  }
}

console.log(obj)
