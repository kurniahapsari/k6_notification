export function bodyRegister() {
    const uniqueId = new Date().getTime();
    return {
        username: `user-${uniqueId}`,
        password: 'password',
        name: 'FDN QA'
    }
}

export function bodyLogin(username){
    return {
        username: username,
        password: 'password'
    }
}