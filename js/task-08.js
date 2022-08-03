const form = document.querySelector('.login-form')
form.addEventListener("submit", onFormSubmit)

function onFormSubmit(event) {
    event.preventDefault();

    const email = form.email.value
    const password = form.password.value

    const formData = {
        email: email,
        password: password,
    }
    console.log(formData)
    form.reset()

    if (email === '' || password === '') {
        alert('пустые поля')
        return
    }
}
