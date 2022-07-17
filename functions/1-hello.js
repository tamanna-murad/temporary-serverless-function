// domain/.netlify/functions/1-hello//e.g =>http://localhost:8888/.netlify/functions/1-hello
//  npm run netlify
// const person = { name: 'Tamanna' }
exports.handler = async (event, context) => {
    // console.log(event); //show in terminal
    // console.log(context); //show in terminal
    return {
        statusCode: 200,
        body: 'hello world ',
        // body: JSON.stringify(person),
    }
}

// OR
// exports.handler = (event, context, cb) => {
//     cb(null, {
//         statusCode: 200, body: 'Our first netlify function example'
//     });
// }