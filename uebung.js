const list = [1, 2, 3, 4, 5];
console.log(list);

function testIfEven(a) {
    return a % 2 == 0;
}
let test_result = testIfEven(7);
console.log(test_result);

let filteredList = list.filter(testIfEven);
console.log(filteredList);

let filteredListArrow = list.filter((a) => {
    return a % 2 == 0;
});
console.log(filteredListArrow);

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


function testReturn(){
    return console.log("Hallo")
}
let testLog = testReturn()
console.log(testLog)