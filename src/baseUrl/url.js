export const url = {
    dev : 'https://api-dev-new.femaledaily.net',
    canary : 'https://api-canary.femaledaily.com',
    prod : 'https://api-new.femaledaily.com',
    local: 'http://localhost:3002'
}

export function baseUrl(env){
    return url[env] || url.dev // Default ke 'dev' jika env tidak dikenal
}