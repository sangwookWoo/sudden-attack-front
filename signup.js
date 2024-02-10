const signupButton = document.getElementById('signup-button');

async function signup() {
    const name = document.getElementById('name').value.trim();
    const nickname = document.getElementById('nickname').value.trim();
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('password-confirm').value;
    const email = document.getElementById('email').value.trim();
    const role = document.getElementById('role').value;

    if (name === '' || nickname === '' || password === '' || passwordConfirm === '' || email === '' || role === '') {
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

    const userData = {
        username: name,
        email,
        password,
        nickname,
    }

    try {
        const response = await fetch('http://127.0.0.1:8000/signup/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const responseData = await response.json();
        alert('회원가입이 성공적으로 완료되었습니다.');
        window.location.href = "login.html";
    } catch (error) {
        alert('알 수 없는 이유로 회원가입에 실패했습니다.');
        console.log(error);
    }
}
// 엔터키 관련 입력
async function handleKeyPress(event) {
    // 키 코드가 13인 경우 (Enter 키)
    if (event.keyCode === 13) {
        signupButton.click();
    }
}

document.addEventListener('keypress', handleKeyPress);
signupButton.addEventListener('click', signup);