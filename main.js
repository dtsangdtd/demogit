import { tinhTong, tinhHieu } from "./test.js"
import SinhVien from "./sinhvien.js";
let numSum = tinhTong();
console.log(numSum);

let tinhhieu = tinhHieu();
console.log(tinhhieu);

const sinhVien = new SinhVien("Nguyen");
console.log(sinhVien.name);


const PI = 3.14;

function foo() {
    var x = 10;
    if (true) {
        //Scope
        var x = 20;
        console.log(x);
    }
    console.log(x);
}
foo();

function foo2() {
    let x = 10;
    if (true) {
        let x = 20;
        console.log(x); //20
    }
    console.log(x); //10
}
foo2();

for (let i = 0; i < 3; i++) {
    console.log(i);
}
test("Sang");

function test(name) {
    console.log("hello", name);
}

function tinh() {
    return 10;

}
// let hocVien = {
//     hoTen: 'Nguyen Van A',
//     lop: 'FrontEnd XXX',
//     layThongTinHocVien: function() {
//         function hienThiThongTin() {
//             console.log(`Ho Ten: ${this.hoTen} - Lop : ${this.lop}`);

//         }
//         hienThiThongTin();
//     }
// }
// hocVien.layThongTinHocVien();
/*
  Arrow function
*/

const test2 = (name, age) => {
    console.log("Hello ", name, "tuoi", age);

};
test2("Cuong", 18);

const tinh2 = () => 10;

let hocVien = {
    hoTen: 'Nguyen Van A',
    lop: 'FrontEnd XXX',
    layThongTinHocVien: function() {
        const hienThiThongTin = () => {
            console.log(`Ho Ten: ${this.hoTen} - Lop : ${this.lop}`);

        }
        hienThiThongTin();
    }
}
hocVien.layThongTinHocVien();
/**
 * Rest Params
 * 
 */
const sum = (...numbers) => {
    // let total = 0;
    // numbers.forEach((item) => {
    //     total += item;
    // })
    // console.log(total);
    return numbers.reduce((a, b) => {
        return a + b;
    }, 0)
}
const total = sum(10, 20, 30, 40, 50);
console.log(total);
/**
 * Spread Operator(*)
 */
// let mangA = [1, 2, 3];
// let mangB = mangA;

// mangB.push(4);
// mangB.push(5);
// console.log(mangB);
// console.log(mangA);
//trong js có tham chiếu và tham trị 
// do đó nên sử dụng spread operator để giải quyết vấn đề tham chíu trong o nhớ 

let mangA = [1, 2, 3];
let mangB = [...mangA];
// cú phám spread operator LÀ ... COPY RA MỘT MẢNG RIÊNG 
mangB.push(4);
mangB.push(5);
console.log(mangA);
console.log(mangB);
let people = {
    name: 'Sang',
    age: '18',

};
let people2 = {...people };
people2.lop = 'FE52';
console.log(people);
console.log(people2);


/**
 * Default Params(*)
 * Reac buoi 6 Redux - Reducers
 */

const getInfor = (name = "Sang") => {
    console.log(name);

};
getInfor("Cybersofts");

/**
 * Desturcturing (*)- bóc tách dữ liệu
 * 
 */

let list = ["Sang", "Nguyen"];
let [name1, name2] = list;
console.log(name1, name2);
let person = {
    name: "Nguyen",
    age: 18,

};
let { name, age } = person;
console.log(name, age);

/**
 * template Strings
 */
let userName = "Nguyen";
let showContent = `Hello ${userName}`;
console.log(showContent);

/**
 * Object literals(*)
 */
let hoTen = "Nguyen";
let lop = "FE52";
const user = {
    hoTen,
    lop,
};
console.log(user);

/**
 * For of- for in
 */

let listFriend = ["Phat", "Hoang", "Hieu"];
for (let item of listFriend) {
    console.log(item);
}
for (let i in listFriend) {
    console.log(i);
}