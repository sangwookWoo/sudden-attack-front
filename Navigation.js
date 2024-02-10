
// navBar 엘리먼트
const studyGroupElements = document.querySelectorAll('.study-group');
const myStudyElements = document.querySelectorAll('.my-study');
const myPageElements = document.querySelectorAll('.my-page');
const loginElements = document.querySelectorAll('.login');


const isLoggined = localStorage.getItem('isLoggined');

// 로그인 후 이용 가능 서비스
async function handleLinkClick(event, link) {
    event.preventDefault();
    
    if (isLoggined) {
        window.location.href = link.href;
    } else {
        alert('로그인 후 이용 가능한 서비스입니다.');
    }
}
studyGroupElements.forEach(element => {
    element.addEventListener('click', handleLinkClick);
})
myStudyElements.forEach(element => {
    element.addEventListener('click', handleLinkClick);
});
myPageElements.forEach(element => {
    element.addEventListener('click', handleLinkClick);
});


// 로그아웃 버튼 클릭 시 처리 함수
async function handleLogOut() {
    localStorage.removeItem('isLoggined');
    localStorage.removeItem('clientToken');
    localStorage.removeItem('refreshToken');
    alert('성공적으로 로그아웃 되었습니다.');
    window.location.href = "home.html";
}


// 로그인 상태에 따라 네비게이션 표시 조정
if (isLoggined) {
    loginElements.forEach(loginElement => {
        loginElement.textContent = '로그아웃';
        loginElement.classList.add('text-base', 'font-semibold', 'leading-7', 'text-gray-900', 'ml-10');
        loginElement.style.fontSize = '14px'
    });
}

loginElements.forEach(loginElement => {
    if (loginElement.textContent === '로그아웃') {
        loginElement.addEventListener('click', handleLogOut);
    }
})

// 모바일 메뉴 버튼 클릭
const menuContainer = document.getElementById('mobile-menu-container');
const closeButton = document.getElementById('close-menu-button');
const openbutton = document.getElementById('open-mobile-menu');

closeButton.addEventListener('click', function() {
    menuContainer.style.display = 'none'; 
});
openbutton.addEventListener('click', function() {
    menuContainer.style.display = 'block'; 
});