function requestValidator(input) {

    if (input.hasOwnProperty('method')) {
        let method = input.method;
        if (method !== 'GET' && method !== 'POST' && method !== 'DELETE' && method !== 'CONNECT') {
            throw new Error('Invalid request header: Invalid Method');
        } 
    } else {
        throw new Error('Invalid request header: Invalid Method');
    } 
    
    if (input.hasOwnProperty('uri')) {
        let uri = input.uri;
        if (uri !== '') {
            let regExp = /^([a-z0-9.]+)$/gm;
            let match = regExp.exec(uri);
            if (!match) {
                throw new Error('Invalid request header: Invalid URI');
            }
        } else {
            throw new Error('Invalid request header: Invalid URI');
        }
    } else {
        throw new Error('Invalid request header: Invalid URI');
    } 
    
    if (input.hasOwnProperty('version')) {
        let version = input.version;
        if (version !== 'HTTP/0.9' && version !== 'HTTP/1.0' && version !== 'HTTP/1.1' && version !== 'HTTP/2.0') {
            throw new Error('Invalid request header: Invalid Version');
        }
    } else {
        throw new Error('Invalid request header: Invalid Version');
    }
    
    if (input.hasOwnProperty('message')) {
        let message = input.message;
        let newRegExp = /^[^<>&\\'"]+$/gm;
        let newMatch = newRegExp.exec(message);
        if (!newMatch) {
            if (!message == '') {
                throw new Error('Invalid request header: Invalid Message');
            }
        }
    } else {
        throw new Error('Invalid request header: Invalid Message');
    }
    return input;
}

requestValidator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: '1'
});


// requestValidator({
//     method: 'OPTIONS',
//     uri: 'git.master',
//     version: 'HTTP/1.1',
//     message: '-recursive'
// });

requestValidator({   
    method: 'POST',
    uri: 'home.bash',   
    message: 'rm -rf /*' });
