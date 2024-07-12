// Solution-1 ------------------------------
function isObjectEmpty(objectName) {
    return (objectName &&
        Object.keys(objectName).length === 0 &&
        objectName.constructor === Object);
}

// Solution-2 ------------------------------
const isObjectEmpty2 = (objectName) => {
    for (let prop in objectName) {
        if (objectName.hasOwnProperty(prop)) {
            return false;
        }
    }
    return true;
};

// Create object and test function result
let obj1 = { user: "Test" };
let obj2 = { product: "Test", price: 250 };
let obj3 = {};
let obj4 = { food: "Salad", source: "Cream", process: "fire" };

console.log(isObjectEmpty(obj1));
console.log(isObjectEmpty(obj2));
console.log(isObjectEmpty(obj3));
console.log(isObjectEmpty(obj4));

// Note:
// ===================
// 1.ใช้ข้อมูลที่รับมาเช็คตัวเองก่อนว่าเป็นข้อมูล undefined หรือ null หรือเปล่า
// ถ้าเป็น undefined/null ตอนทำ falsey จะได้ผลลัพธ์เป็น false
//
// 2.ใช้ method .keys() ในการสร้าง array ของ key ที่อยู่ใน object นั้นๆก่อน
// จากนั้นก็ใช้ property .length ในการหาว่า array นั้นมีจำนวนสมาชิกกี่ตัว
// ถ้าเป็น array ว่าง (เป็น object ที่ไม่มี property อะไรเลย) ก็จะให้ค่าเป็น 0
// ถ้านำ 0 ไป && (ทำ falsey) ก็จะหยิบค่า 0 ที่เป็นค่า false มา
//
// 3.ใช้ .constructor เช็คข้อมูลว่า ข้อมูลที่ input มาเป็นข้อมูลชนิด object จริง
// ไม่ใช่ข้อมูล undefined/null (เช็คซ้ำอีกรอบ)
// Reference: https://www.freecodecamp.org/news/check-if-an-object-is-empty-in-javascript/