//브라우저상에 모든 element(태그들,...)들이 모두 로딩 되고 난 후에
// 실행시키고자 하는 함수를 전달한다
window.onload = function(){
    let cardTemplate = document.querySelector('#temp-card');
    console.log(cardTemplate.innerHTML);
    let html = cardTemplate.innerHTML;
    // html은 실질적으로 추가하고자 하는 요소
    console.log(typeof html);

    let li = document.createElement('li');
    li.innerHTML = html;

    //추가할 ul태그 찾아오기
    let ul = document.querySelector('.list');
    console.log(ul);
    // ul.appendChild(li);
    // ul.appendChild(li);
    // ul.appendChild(li);
    // ul.appendChild(li);o
    // ul.appendChild(li);

    // ul.appendChild(li.cloneNode(true));
    // ul.appendChild(li.cloneNode(true));
    // ul.appendChild(li.cloneNode(true));
    // ul.appendChild(li.cloneNode(true));
    console.log(li.cloneNode(true).innerHTML);

    const data = request.getPostList();

    data.forEach(element => {
        let newNode = li.cloneNode(true); // 나중에 ul태그 자식으로 추가할 노드
        let temp = newNode.innerHTML;
        temp = temp.replace('{pIcon}', element.pIcon);
        temp = temp.replace('{pTitle}', element.pTitle);
        temp = temp.replace('{pContent}', element.pContent);
        temp = temp.replace('{pImage}', element.pImage);
        temp = temp.replace('{pCompany}', element.pCompany);
        temp = temp.replace('{pText}', element.pText);
        temp = temp.replace('{pDetail}', element.pDetail);
        newNode.innerHTML = temp;

        ul.appendChild(newNode);
    });

}