const inputForm = document.querySelector('.login-form');
inputForm.addEventListener('submit', event => {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (email === '' || password === '') {
        alert('All form fields must be filled in')
    } else {
        const newUser = {};
        newUser.email = email.trim();
        newUser.password = password.trim();
        console.log(newUser);
        form.reset();
    }
});