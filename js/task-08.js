const form = document.querySelector('.login-form');

class acc {
    constructor({ email, password }) {
        this.email = email;
        this.password = password;
    }
}
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const { email, password } = event.currentTarget;
    const user = new acc({email: email.value, password: password.value});
    if (email.value && password.value) {
        console.log(user);
    } else {
        alert('wtf man ?')
    }
    event.currentTarget.reset();
})