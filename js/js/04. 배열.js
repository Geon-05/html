// 페이지가 로딩된후 실행
// 요소가 화면에 올라와야지 요소를 선택할수 있으므로
// 페이지를 초기화 하는 코드는 이벤트 발생후 실행 할 수 있도록처리
window.addEventListener('load', function () {
  console.log(this);
  let btn1 = this.document.querySelector('#btn1');
  btn1.addEventListener('click', function () {
    let box1 = document.querySelector('#box1');
    box1.innerHTML = "배열을 선언합니다.<br>";
    // 배열 : 여러개의 값을 담을 수 있는 자료구조
    // new : 객체를 생성할때 사용되는 키워드
    let array1 = new Array(); // 길이를 정하지 않은 경우[]
    let array2 = new Array(3); // 길이를 정한경우 비어있는 방이 3개 생김
    // 값을 초기화하는 방법
    let array3 = new Array("빨","주","노","초","파","남","보"); // 값을 대입
    let array4 = ["java", "oracle", "html"];

    console.log(array1);
    console.log(array2);
    console.log(array3);
    console.log(array4);

    box1.innerHTML += `array1 : ${array1} <br>`;
    box1.innerHTML += `array2 : ${array2} <br>`;
    box1.innerHTML += `array3 : ${array3} <br>`;
    box1.innerHTML += `array4 : ${array4} <br>`;

    box1.innerHTML += `<br>배열의 길이를 확인하는 방법 : 배열이름.length ${array4.length}`
    box1.innerHTML += `<br>배열의 방에 접근하는 방법 : 배열이름[인덱스] ${array4[0]}`

    box1.innerHTML += "<br><br>배열값 출력하기";
    
    for(let i=0;i<array4.length;i++){
        box1.innerHTML += `<br>array4의 인덱스 ${i}번 값은 : ${array4[i]}입니다.`
    }

    for(let i=2;i<=9;i++) {
        box1.innerHTML += `<br>구구단 ${i}단`
        for(let j=1;j<=9;j++){
            box1.innerHTML += `<br>${i} * ${j} = ${i*j}`
        }
    }
    
  });
});
