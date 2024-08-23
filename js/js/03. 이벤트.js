// window.onload = function(){

//     btn.addEventListener('click',function(){
//         alert('클릭!')

//         let box = document.querySelector('#box');
//         box.innerHTML += "추가추가\n";
//     })
// }

// 버튼을 클릭했을때 반가워요~!라는 메세지를 출력 하세요!
// 이벤트 이름, 이벤트 발생시 실행 할 함수
// 이름있는 함수를 전달 할 때는 ()를 붙이면 안된다.
// 파라메터가 있는 경우, 익명의 함수를 이용하여 코드를 작성
// 페이지가 모두 로딩된 후 실행
// window.addEventListener('load',function(){
//     init(1);
// });
// 화면 초기화
window.addEventListener("load", init);

function init() {
  btn1.addEventListener("click", function () {
    // id가 입력되지 않은 경우

    if (id.value == "") {
      box1.innerHTML = "아이디를 입력해주세요.";
    }
  });

  // 고전이벤트 모델 - 중복적용이 안됨
  // 이벤트 객체 - 매개변수로 이벤트 객체를 받아 올 수 있다.
  //   이벤트 객체 : 이벤트가 발생한 정보를 담고있는 객체
  btn2.onclick = function (e) {
    console.log(e);
    // 어떤객체가 클릭되었는지 확인
    console.log(e.target);
    // 웹브라우져의 개발자도구의 Console창을 확인!!
    alert("버튼2가 클릭되었습니다.");
  };

  //   이벤트가 중복된 경우 마지막에 작성된 이벤트만 적용
  // 중복적용이 불가능함!!!
  btn2.onclick = function () {
    console.log("버튼2가 클릭되었다고!!!");
  };

  //   this : window
  btn2.onclick = (e) => {
    console.log("버튼2가 클릭!");
    console.log(e);
    console.log(e.target);
    console.log(this);
  };

  btn3.addEventListener("click", function (e) {
    console.log("표준이벤트모델 실행");
    console.log(e);
    console.log(e.target);
    console.log(this);
  });
  btn3.addEventListener("click", (e) => {
    console.log("표준이벤트모델 실행 ===> 화살표함수");
    console.log(e);
    console.log(e.target);
    console.log(this);
  });

  btn4.addEventListener("click", (e) => {
    // if (userId1.value == '')

    // 정규식을 이용한 패턴체크
    let regExp = /^[a-zA-Z-0-9]{5,12}$/;
    // 패턴검사
    if(!regExp.test(userId1.value)){
        alert('아이디는 영어 대소문자와 숫자만 입력가능합니다.\n길이는 5~12까지 입력 가능 합니다.')
        e.preventDefault();
    }
    // 기본이벤트를 제거하는 함수
  });
}

function print(target) {
    console.log(target);
    console.log(target.innerText);
    target.style.display='none';
  console.log("print");
}

// 유효성검사 후 반환값에 따라 폼을 전송할 지 결정
// submit이벤트를 실행할지 결정
// 반환값이 false이면 이벤트를 실행하지 않음
function fn_checkForm() {
  if (userId.value == "") {
    alert("아이디를 입력해주세요.");
    return false;
  }
  if (userPw.value == "") {
    alert("비밀번호를 입력해주세요.");
    return false;
  }
  return true;
}
