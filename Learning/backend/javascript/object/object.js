 let obj = {
    name:'vivek',
    age: 20
}

Object.freeze(obj)

obj.age = 23;


console.log(obj);
