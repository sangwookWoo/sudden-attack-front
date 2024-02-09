const loginElement = document.getElementById('login-link');
const writeElement = document.getElementById('write-link');
const myStudyElement = document.getElementById('my-study-link');
const myPageElement = document.getElementById('my-page-link');
const logOutElement = document.getElementById('logout')



// 로그인 상태에 따라 헤더 업데이트
// 로그인 상태
const isLoggined = localStorage.getItem('isLoggined');

// 로컬 스토리지에 저장된 토큰 / 서버에서 전달 받은 토큰
const clientToken = localStorage.getItem('clientToken'); 
const serverToken = 'abcdefghijklmnop';

if (isLoggined && clientToken === serverToken) {
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

// 로그아웃 하면
logOutElement.addEventListener('click', function() {
    localStorage.setItem('isLoggined', false);
    localStorage.removeItem('clientToken');
    alert('로그아웃 되었습니다.')
    window.location.href = "Home.html";
});