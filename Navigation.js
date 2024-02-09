// navBar 엘리먼트
const loginElement = document.getElementById('login-link');
const studyGroupElement = document.getElementById('study-group-link');
const myPageElement = document.getElementById('my-page-link');
const logOutElement = document.getElementById('logout');

// 로그인 상태 확인
const isLoggined = localStorage.getItem('isLoggined');

// 로그인 후 이용 가능 서비스
function handleLinkClick(event, link) {
    event.preventDefault();
    
    if (isLoggined) {
        window.location.href = link.href;
    } else {
        alert('로그인 후 이용 가능한 서비스입니다.');
    }
}

// 로그인 후 이용 가능한 서비스
studyGroupElement.addEventListener('click', function(event) {
    handleLinkClick(event, this);
});
myPageElement.addEventListener('click', function() {
    handleLinkClick(event, this);
});


// 로그아웃 버튼 클릭 시 처리
logOutElement.addEventListener('click', function() {
    // 로그아웃 처리: 모든 토큰 삭제
    localStorage.removeItem('isLoggined');
    localStorage.removeItem('clientToken');
    localStorage.removeItem('refreshToken');
    
    // 홈 페이지로 이동
    window.location.href = "home.html";
});

// 로그아웃 버튼 클릭 시 처리
logOutElement.addEventListener('click', function() {
    // 로그아웃 처리: 모든 토큰 삭제
    localStorage.removeItem('isLoggined');
    localStorage.removeItem('clientToken');
    localStorage.removeItem('refreshToken');
    
    // 홈 페이지로 이동
    alert('성공적으로 로그아웃 되었습니다.')
    window.location.href = "home.html";
});


// 로그인 상태에 따라 네비게이션 표시 조정
if (isLoggined) {
    console.log('로그인중');
    // 로그인 상태일 때
    loginElement.classList.add('hidden');
    logOutElement.classList.remove('hidden');
} else {
    // 로그인 상태가 아닐 때
    loginElement.classList.remove('hidden');
    logOutElement.classList.add('hidden');
}
