const items = require('../assets/data');
exports.handler = async (event, context, cb) => {
    return {
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        statusCode: 200,
        // body: 'Our Basic API Example',//http://localhost:8888/api/2-basic-api
        body: JSON.stringify(items),
    }
}


// const items = [
//     { name: 'susan' },
//     { name: 'anna' }
// ];
// exports.handler = async (event, context, cb) => {
//     return {
//         statusCode: 200,
//          body: JSON.stringify(items),
//     }
// }
