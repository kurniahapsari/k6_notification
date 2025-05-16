export const urlRef = 'www.femaledaily.com';
export const testingToken = '530ec607b1e73e922f3767aa2ca64f05b5a1dc31';

// export const pubKey = '-----BEGIN PUBLIC KEY-----\n' +
//     'MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAzfVEKm5wblCD2nrc5NmN\n' +
//     '/vm96Jbd1eRGOhiwu78pr9zx+gSz6Gsm3Gl2zgDP/stS8+sWRnKwWkRHoxvFkf1H\n' +
//     'V4zWalhTKgPNEeyol07FzF3KFB5nekn4szl8utgfdTx3NB8yLYKrgqSXSGhSqjyp\n' +
//     'v+sdjohhCBspr8rR6I+rAVgSK7zsmu5nR479qBmkj5b4L8YMODFxOIknYKV5P8dS\n' +
//     'Q6EcmxBuO7Q+Ed0EpmymgfsK/lQgO3tQ5BMtpmtVCZXeEQ2V389XVb9bYiWvWkoc\n' +
//     '98q/UHJxnfb3QznMF9lOTqUCdGLm+BHnUi8l9hV7G3+gYQFAkmOJmrqJQrTuwgBc\n' +
//     'tPzp5mQ0WS6I34uWTDwMXU84W+BL2RAcUE+/98YI37j53IwsvFsP2ZmU9FHF/ZH2\n' +
//     'fPrhICav3pZygrzTbXoARcv9F/4gKlbtdz/4hiT3sHYF0GJcw1pIaFfAqcZO3veZ\n' +
//     'J49um7D1EJjDLISyFnYiqUmPr5vU572EBhxM0QaW1Aj2U3kW7zwriW0YQ9gvq7kH\n' +
//     'ye8boPdUQyu7MTi5/puXULpEovv12Hm2jysV8kEn1zDnKqWUiKeQEDFfocOdgPqz\n' +
//     'OT9rltoEJIxWzFLSemYcVQvRbtcPya8oCxnSxGawrjoT3aIQaNdJxzR9YVJdL2gN\n' +
//     'c+azii4GHIuOehDcvwCLOycCAwEAAQ==\n' +
//     '-----END PUBLIC KEY-----\n';

export const pubKey = `-----BEGIN PUBLIC KEY-----
    MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAzfVEKm5wblCD2nrc5NmN
    /vm96Jbd1eRGOhiwu78pr9zx+gSz6Gsm3Gl2zgDP/stS8+sWRnKwWkRHoxvFkf1H
    V4zWalhTKgPNEeyol07FzF3KFB5nekn4szl8utgfdTx3NB8yLYKrgqSXSGhSqjyp
    v+sdjohhCBspr8rR6I+rAVgSK7zsmu5nR479qBmkj5b4L8YMODFxOIknYKV5P8dS
    Q6EcmxBuO7Q+Ed0EpmymgfsK/lQgO3tQ5BMtpmtVCZXeEQ2V389XVb9bYiWvWkoc
    98q/UHJxnfb3QznMF9lOTqUCdGLm+BHnUi8l9hV7G3+gYQFAkmOJmrqJQrTuwgBc
    tPzp5mQ0WS6I34uWTDwMXU84W+BL2RAcUE+/98YI37j53IwsvFsP2ZmU9FHF/ZH2
    fPrhICav3pZygrzTbXoARcv9F/4gKlbtdz/4hiT3sHYF0GJcw1pIaFfAqcZO3veZ
    J49um7D1EJjDLISyFnYiqUmPr5vU572EBhxM0QaW1Aj2U3kW7zwriW0YQ9gvq7kH
    ye8boPdUQyu7MTi5/puXULpEovv12Hm2jysV8kEn1zDnKqWUiKeQEDFfocOdgPqz
    OT9rltoEJIxWzFLSemYcVQvRbtcPya8oCxnSxGawrjoT3aIQaNdJxzR9YVJdL2gN
    c+azii4GHIuOehDcvwCLOycCAwEAAQ==
    -----END PUBLIC KEY-----`;

export function fileContent(){
    const generatePhoneNumber = () => {
        const prefix = '08';
        const randomPart = Math.floor(100000000 + Math.random() * 900000000); // Generates a 9-digit random number
        return `${prefix}${randomPart}`;
    };

    const uniqueId = new Date().getTime();
    const phoneNumber = generatePhoneNumber();

    return {
        channel: 'sms',
        date_of_birth: '1995-02-28',
        email: `notification-${uniqueId}@test.fd`,
        password: 'Welcome321!',
        phone_number: phoneNumber,
        fullname: 'QA Tester',
        username: `notif_${uniqueId}`,
        verification_code: '111111'
    }
}