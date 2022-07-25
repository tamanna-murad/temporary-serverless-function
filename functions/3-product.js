// http://localhost:8888/api/3-airtable
// http://localhost:8888/examples/3-airtable/index.html
// http://localhost:8888/api/3-product?id=recMSHbDGS1Zuna7p

require('dotenv').config()
const Airtable = require('airtable-node');
const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
    .base('app8exaACWytFDMNJ')
    .table('products')

exports.handler = async (event, context) => {
    // console.log(event);//http://localhost:8888/api/3-product?id=1
    const { id } = event.queryStringParameters;
    if (id) {

        try {
            const product = await airtable.retrieve(id);
            // console.log(product);
            if (product.error) {
                return {
                    statusCode: 404,
                    body: `No product with id:${id} `,
                }
            }
            return {
                statusCode: 200,
                body: JSON.stringify(product),
            }
        } catch (error) {
            return {
                statusCode: 500,
                body: `Sever Error `,
            }
        }
    }
    return {
        statusCode: 400,
        body: 'Please provide product id',//http://localhost:8888/api/3-product

    }
}