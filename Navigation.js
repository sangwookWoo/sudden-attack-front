const loginElement = document.getElementById('login-link');
const writeElement = document.getElementById('write-link');
const myStudyElement = document.getElementById('my-study-link');
const myPageElement = document.getElementById('my-page-link');
const logOutElement = document.getElementById('logout');

// 로그인 상태 확인
const isLoggined = localStorage.getItem('isLoggined');

// 로그아웃 버튼 클릭 시 처리
logOutElement.addEventListener('click', function() {
    // 로그아웃 처리: 모든 토큰 삭제
    localStorage.removeItem('isLoggined');
    localStorage.removeItem('clientToken');
    localStorage.removeItem('refreshToken');
    
    // 홈 페이지로 이동
    window.location.href = "Home.html";
});

// 로그인 상태에 따라 네비게이션 표시 조정
if (isLoggined) {
    // 로그인 상태일 때
    loginElement.classList.add('hidden');

    writeElement.classList.remove('hidden');
    myStudyElement.classList.remove('hidden');
    myPageElement.classList.remove('hidden');
    logOutElement.classList.remove('hidden');
} else {
    // 로그인 상태가 아닐 때
    loginElement.classList.remove('hidden');

    writeElement.classList.add('hidden');
    myStudyElement.classList.add('hidden');
    myPageElement.classList.add('hidden');
    logOutElement.classList.add('hidden');
}