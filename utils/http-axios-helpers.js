import axios from 'axios';

export function sendPostx(url, body, header = {}, expectedStatus = 200) {
    return axios.post(url, body, {headers: header})
    .then(response => {
        // If status code is as expected, return the response data
        if (response.status === expectedStatus) {
            return response.data; // Directly return the response body (no need to parse JSON)
        } else {
            throw new Error(`Unexpected status code: ${response.status}`);
        }
    })
    .catch(error => {
        // Handle errors (network errors, invalid JSON, etc.)
        // throw new Error(error.response ? error.response.data : error.message);
        let message = error.message;

        if (error.response) {
            const data = error.response.data;

            if (typeof data === 'string') {
            message = data; // plain string error message
            } else if (data && typeof data === 'object') {
            message = data.message || JSON.stringify(data); // use .message or fallback
            }
        }

        throw new Error(message);
    });
}

// export async function sendPostx(url, body, header = {}, expectedStatus = 200) {
//     try {
//         const response = await axios.post(url, body, {
//             headers: header,
//         });

//         if (response.status === expectedStatus) {
//             return response.data; // Return the response body
//         } else {
//             throw new Error(`Unexpected status code: ${response.status}`);
//         }
//     } catch (error) {
//         throw new Error(error.response ? error.response.data : error.message);
//     }
// }