function regist(){
    let lastName = document.querySelector('input[name="lastname"]');
    let firstName = document.querySelector('input[name="firstname"]);

    // 8개의 입력 태그 들에 들어있는 값을 받아온다

    //받아온 값들을 저장하고있는 User() 객체를 한 개 만들어서
    // 그 User 객체를 user_request.js 안에 있는 userList에다 추가 해야한다
    let newUser = new User(인풋태그로 입력받은 값들);
    request.regist(newUser);

}

