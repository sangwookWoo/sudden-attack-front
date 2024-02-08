const loginButton = document.getElementById('login-button');
const elementId = document.getElementById('userid');
const elementPassword = document.getElementById('password');

function login() {
    const clientId = elementId.value;
    const clientPassword = elementPassword.value;

    // 받은 아이디로 api 때려서, 받은 거 확인해서 열어서, 서버에서 받은 비밀번호 확인하기
    const serverPassword = "1224"

    if (clientPassword === serverPassword) {
        window.location.href = "Home.html";

        // jwt
        localStorage.setItem('isLoggined', true)
        localStorage.setItem('clientToken', 'abcdefghijklmnop')
    } else {
        alert("아이디 또는 비밀번호가 잘못되었습니다.");
    }
}

function handleKeyPress(event) {
    // 키 코드가 13인 경우 (Enter 키)
    if (event.keyCode === 13) {
        loginButton.click();
    }
}

document.addEventListener('keypress', handleKeyPress);
loginButton.addEventListener('click', function() {
    login()
});
