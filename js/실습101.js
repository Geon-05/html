window.addEventListener('load',function(){
    btn1.addEventListener('click', function(){
        alert('버튼누르기!')
    })
    btn2.addEventListener('click',function(){
        confirm('확인하세요!')
    })

    let i = 0;
    btn3.addEventListener('click',function(){
        let box1 = document.querySelector('#box1');
        if(i==0){
            box1.style.backgroundColor = "pink"
        } else if(i==1){
            
            box1.style.backgroundColor = "black"
        } else if(i==2){
            
            box1.style.backgroundColor = "yellow"
        } else if(i==3) {
            i=-1
        }
        console.log(i);
        i++;
    })

    btn4.addEventListener('click',function(){
        let newp = document.createElement("p");
        let textNode = document.createTextNode("반갑습니다");
        let body = document.querySelector("body");
    
        newp.appendChild(textNode);
        body.appendChild(newp);
    })




})