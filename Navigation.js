const loginElement = document.getElementById('login-link');
const writeElement = document.getElementById('write-link');
const myStudyElement = document.getElementById('my-study-link');
const myPageElement = document.getElementById('my-page-link');
const logOutElement = document.getElementById('logout')



// 로그인 상태에 따라 헤더 업데이트
// 로그인 상태
const isLoggined = localStorage.getItem('isLoggined');
const clientToken = localStorage.getItem('clientToken'); 

async function getProtectedResource() {
    const clientToken = localStorage.getItem('clientToken'); 
    const url = 'http://127.0.0.1:8000/protected-resource/';

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${clientToken}`
            }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

if (isLoggined && getProtectedResource()) {
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


