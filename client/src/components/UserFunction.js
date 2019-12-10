import axios from 'axios'

export const register = newUser => {
    return axios
        .post('users/register', {
            login: newUser.login,
            email: newUser.email,
            password: newUser.password
        })
        .then(response => {
            console.log('Utilisateur enregistré !')
        })
}

export const login = user => {
    return axios
        .post('users/login', {
            login: user.login,
            password: user.password
        })
        .then(response => {
            localStorage.setItem('usertoken', response.data)
            return response.data
        })
        .catch(err => {
            console.log(err)
        })
}

export const getProfile = token => {
    return axios
        .get('users/profile', {
            headers: {
                Authorization: ` ${token}`
            }
        })
        .then(response => {
            console.log(response)
            return response.data
        })
        .catch(err => {
            console.log(err)
        })
}