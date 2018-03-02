var secret = require('./secrets.js');

module.exports = {
    "collections": [
        {
            "from": "swagger",
            "to": "postman-collection",
            "name": "Swagger Petstore",
            "collection_uid": "1559979-81f30228-c4e1-8a05-948a-da9cc9bd07db",
            "collection_id": "81f30228-c4e1-8a05-948a-da9cc9bd07db"
        },
        {
            "from": "uber",
            "to": "postman-collection-uber",
            "name": "Uber API",
            "collection_uid": "1559979-6845a672-eaae-4e65-8db3-6bb86868e851",
            "collection_id": "6845a672-eaae-4e65-8db3-6bb86868e851"
        }
    ],
    "key": secret.key
};