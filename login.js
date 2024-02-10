const loginButton = document.getElementById('login-button');
const elementEmail = document.getElementById('email');
const elementPassword = document.getElementById('password');

async function login() {
    const clientEmail = elementEmail.value;
    const clientPassword = elementPassword.value;

    const formData = new FormData();
    formData.append('username', clientEmail);
    formData.append('password', clientPassword);
    
    try {
        const response = await fetch('http://127.0.0.1:8000/login/', {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const { access_token, refresh_token } = await response.json();
        localStorage.setItem('isLoggined', true);
        localStorage.setItem('clientToken', access_token);
        localStorage.setItem('refreshToken', refresh_token);

        window.location.href = "home.html";
    } catch (error) {
        alert('이메일 또는 비밀번호가 잘못되었습니다.');
        console.log(error);
    }
}

// 엔터키 관련 로직
function handleKeyPress(event) {
    // 키 코드가 13인 경우 (Enter 키)
    if (event.keyCode === 13) {
        loginButton.click();
    }
}
document.addEventListener('keypress', handleKeyPress);
loginButton.addEventListener('click', function() {
    login();
});