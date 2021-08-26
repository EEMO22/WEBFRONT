//  논리형 true or false
//  비교연산/논리연산의 결과
//  논리 조합: AND(논리곱: &&), OR(논리합: ||), NOT(논리 부정: !)
let v1; //  선언하되 초기화 되지 않음 -> undefined
let v2 = null;  //  선언하고 null로 초기화 -> null
console.log(typeof v1, typeof v2);  //  v2가 object라고 나옴 -> 버그
//  undefined: 자바스크립트 엔진에 허용된 데이터
//  null: 개발자에게 허용된 타입
//  널 체크
console.log(v1, typeof v1, v1 == null);
console.log(v2, typeof v2, v2 == null);
//  개발자가 임의로 umdefined를 할당할 수는 있다
v2 = undefined;
console.log(v2, typeof v2, v2 == undefined);    //  undefined  체크

//  == : 타입과 관계 없이 값을 비교
//  === : 값과 함께 타입도 비교
console.log(2021 == "2021");    //  값만 비교
console.log(2021 === "2021");   //  값과 타입 비교

//  JavaScript는 number, string 이 비어있으면 false 
//                                데이터가 있으면 true 반환
console.log("문자열:", Boolean("String"), Boolean(""));
console.log("수치형:", Boolean(2021), Boolean(0));

let content = "CONTENTS";

console.log(true && content);   //  -> CONTENTS 선택
console.log(false && content);  //  -> false

console.log(true || content);   //  -> true
console.log(false || content);  //  -> CONTENTS 선택
//  앞에서부터 읽으면서 논리구조에 따라 판별한 값을 출력
//  || 의 경우 true만 읽으면 어차피 true이기 때문에 거기서 바로 true판별
//  || false의 경우 뒤쪽까지 읽고 true 판별 후 출력
//  원래 헷갈리는 부분