//
const login = (name = 'admin', password = 'admin', resolve, reject) => {
    if (name === 'admin' && password === 'admin') {
        resolve('Login success')
    } else {
        reject('Login failed')
    }
}

login('admin', 'admin', function (status) {
    console.log(status)
}, function (err) {
    console.log(err)
})

login('admin', 'admin', status => console.log(status), err => console.log(err))