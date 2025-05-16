import http from 'http';

export function sendPosts(url, body, header={}, expectedStatus = 200){
    const options = {
        hostname: url,
        // port: 3002,
        path: '/posts',
        method: 'POST',
        headers: header
    };
    const req = http.request(options, (res) => {
        let responseData = ''; // to collect the response data

        res.on('data', (chunk) => {
            responseData += chunk; // append each chunk
        });

        res.on('end', () => {
            console.log('Full Response:', responseData); // output the full response
        });
    });

    req.on('error', (error) => {
    console.error('Error:', error);
    });

    req.write(body); // send the request body
    req.end(); // finalize the request
}