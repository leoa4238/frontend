function login(){
    const email = document.querySelector('#email');
    const pw = document.querySelector('#pass');

    // 입력되지 않고 클릭이 되면 비어있는 문자열 값이 들어있다
    // console.log(email.value);
    // console.log(pw.value);
    //console.log(!'')
    //email.value가 입력되지 않았다면
    if(!email.value || !pw.value){// email.value === ''
        alert('아이디와 비밀번호는 필수입력 값입니다!');
        return;
    }

    if(request.login(email.value, pw.value)){
        //로그인 성공!
        //main 페이지로 이동 (window 객체) (location)
        //console.log(window.location.href);
        
        // href경로를 main화면으로 이동시키기
        window.location.href = './02_facebook_main.html';

        return;
    }

    //로그인 실패
    alert('아이디 또는 비밀번호가 틀렸습니다!');
    email.value = '';
    pw.value = '';

    

}