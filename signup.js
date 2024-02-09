const signupButton = document.getElementById('signup-button');


function signup() {
    const name = document.getElementById('name').value.trim();
    const username = document.getElementById('nickname').value.trim();
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('password-confirm').value;
    const email = document.getElementById('email').value.trim();
    const role = document.getElementById('role').value;

    if (name === '' || username === '' || password === '' || passwordConfirm === '' || email === '' || role === '') {
        alert('모든 필드를 입력하세요.');
        return;
    }

    if (password !== passwordConfirm) {
        alert('비밀번호와 비밀번호 확인이 일치하지 않습니다.');
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('올바른 이메일 주소를 입력하세요.');
            return;
        }

    // 회원가입 데이터 콘솔에 출력 - 백엔드랑 로직으로 대체
    console.log('회원가입 정보');
    console.log('이름:', name);
    console.log('아이디:', username);
    console.log('비밀번호:', password);
    console.log('이메일 주소:', email);
    console.log('직군:', role);

    alert('회원가입이 성공적으로 완료되었습니다.');
    window.location.href = "login.html";
}

signupButton.addEventListener('click', function () {
    signup()
});

// 엔터키 관련 입력
function handleKeyPress(event) {
    // 키 코드가 13인 경우 (Enter 키)
    if (event.keyCode === 13) {
        signupButton.click();
    }
}
document.addEventListener('keypress', handleKeyPress);
