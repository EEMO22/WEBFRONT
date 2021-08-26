console.log("======= for 구구단");

for (let i = 2; i < 10; i++) {
    for(let j = 1; j < 10; j++) {
        console.log(`${i} * ${j} = ${i*j}`);
    }
    console.log();
}


console.log("======= while 구구단");

let dan = 2;
while(dan < 10) {
    let num = 1;
    while(num < 10) {
        console.log(`${dan} * ${num} = ${dan*num}`);
        num++;
    }
    console.log();
    dan++;
}


console.log("======= for star");

for (let i = 5; i > 0; i--) {
    let stars = "";
    //  console.log는 개행하기 때문에 한 번에 출력해 줄 변수 필요
    //  ""로 초기화 하지 않으면 undefined 출력
        for (let j = 0; j < i; j++) {
            stars += "*";
        }
    console.log(stars);
}


console.log("======= while star");

let i = 5;
while (i > 0) {
    let stars = "";
    let j = 0;
    while(j < i) {
        stars += "*";
        j++;
    } 
    console.log(stars)
    i--;
}


//  ES6: for ... in
//      객체의 속성 (프로퍼티)를 순회
//  ES6: for ... of
//      순회 객체(반복 가능)의 값을 순회
let obj = {
    name: "홍길동",
    age: 28,
    job: "도적",
    gender: "남성"
}

console.log("======== for ... in");
for (let key in obj) {
    //  for ... in : 객체의 속성 순회
    console.log(key, "->", obj[key]);
}

const arr = [5, 1, 4, 2, 3, 2, 9 ,8, 0];
for (let key in arr) {
    console.log(key);
}

for (let value of arr) {
    //  for ... of : 반복 가능 객체에서 요소를 하나씩 추출
    console.log(value);
}

//  for ... of는 순회 객체(배열 등)에서만 사용
// for (let value of obj) {
//     console.log(value);
// } -> Error: obj는 순회 객체가 아님

//  주의: for ... in 과 for ... of 를 구분해서 사용!