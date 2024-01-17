const list = [1, 2, 3, 4, 5];
console.log(list);

function testIfEven(a) {
    let result = a % 2 == 0;
    return result;
}
let test_result = testIfEven(7);
console.log(test_result);

let filteredList = list.filter(testIfEven);
console.log(filteredList);
let myFunc = testIfEven;
console.log(myFunc);

function myAdd() {
    console.log("Hallo");
}

function executeTwice(func) {
    func();
    func();
}
executeTwice(myAdd);

executeTwice(() => {
    console.log("Hallo");
});

let arrow = () => {};
