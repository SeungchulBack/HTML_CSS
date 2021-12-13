let target = document.querySelector("#dynamic"); //dynamic을 가진 문서객체를 선택해라
//변수를 이용해서 변수에 할당
let stringArr =["Learn to HTML","Learn to CSS","Learn to JavaScript"];
let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
let selectStringArr = selectString.split(""); //하나하나가 쪼개져서 배열로 들어간다.

function randomString() {
    let stringArr =["Learn to HTML","Learn to CSS","Learn to JavaScript"];
    let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
    let selectStringArr = selectString.split("");

    return selectStringArr;
}

//타이핑 리셋
function resetTyping() {
    target.textContent="";
    dynamic(randomString());
}
//한글자씩 텍스트 출력 함수
function dynamic(randomArr){

    console.log(randomArr);
    if(randomArr.length > 0) {
        target.textContent += randomArr.shift();
        setTimeout(function() {
            dynamic(randomArr);
        },80);
    }
    else{
        setTimeout(resetTyping,3000);
    }
}

dynamic(randomString());

console.log(selectString);
console.log(selectStringArr);
//커서깜박임 효과
function blink(){  
    target.classList.toggle("active"); //active라는 클래스가 추가되었다가 삭제되었다가 반복하게 
}
setInterval(blink, 500);
