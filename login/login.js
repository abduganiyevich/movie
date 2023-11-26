const username = document.getElementById('username');
const password = document.getElementById('password');
const btn = document.getElementById('btn');

function validation() {
    if (!username.value.trim()) {
        username.style.outlineColor = "red";
        username.focus();
        return false;
    }
    if (!password.value.trim()) {
        password.style.outlineColor = "red";
        password.focus();
        return false;
    }
    return true;
}

btn.addEventListener('click', () => {
    if (!validation()) {
        return;
    }

    let data = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];

    if (data.length) {
        const userFound = data.find(user => user.username === username.value.trim() && user.password === password.value.trim());

        if (userFound) {
        
            alert(`Xush kelibsiz, ${userFound.username}!`);

            window.location.href = "http://127.0.0.1:5500/success/success.html";
        } else {
            alert('Siz ro\'yhatdan otmagansiz');
            window.location.href = "http://127.0.0.1:5500/register/register.html";
        }
    } else {
        alert("Siz ro'yhatdan otmagansiz");
        window.location.href = "http://127.0.0.1:5500/register/register.html";
    }
});
