export function headerNotif(token) {
    return {
        'key': 'client01-pb3TVYisCGurD08ks3YW',
        'version': '1.5',
        'device': '1',
        'Authorization': token,
        'Content-Type': 'application/json'
    }
}

export function headerRefresh() {
    return {
        'key': 'client01-pb3TVYisCGurD08ks3YW',
        'version': '1.5',
        'device': '1',
        'Content-Type': 'application/json'
    }
}

export function headerGetToken() {
    return {
        'Accept':'application/json'
    }
}

export const headerSaveIdNotif = {
    'Accept':'application/json',
    'Content-Type':'application/json'
}