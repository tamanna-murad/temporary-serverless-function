require('dotenv').config()
const Airtable = require('airtable-node');
const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
    .base('app8exaACWytFDMNJ')
    .table('products')

exports.handler = async (event, context, cd) => {
    try {
        const { records } = await airtable.list();
        const products = records.map((product) => {
            const { id } = product;
            const { name, image, price } = product.fields;
            const url = image[0].url;
            return { id, name, url, price };
        })
        // console.log(data);
        return {
            statusCode: 200,
            body: JSON.stringify(products),//http://localhost:8888/api/3-airtable
        }
    } catch (error) {
        return {
            statusCode: 500,
            body: 'Server error',//http://localhost:8888/api/3-airtable
        }
    }

}