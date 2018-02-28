# Swagger 2.0 to Postman 2.0

Convert local Swagger 2.0 file to Postman 2.0, and then update Postman collection using Postman API

### To get started

* Get a Postman API key from here: [https://app.getpostman.com/dashboard/integrations](https://app.getpostman.com/dashboard/integrations)
* Create a new file with your key called `local.js` in the root of this directory. For example:
```javascript
module.exports = {
       "key": "e3da74f605fa422b9323c0d6dad39771"
   };
```
* To update an existing collection, retrieve the `collection_uid` and `collection_id` by submitting a `GET` request using the Postman API: [https://docs.api.getpostman.com/#3190c896-4216-a0a3-aa38-a041d0c2eb72](https://docs.api.getpostman.com/#3190c896-4216-a0a3-aa38-a041d0c2eb72). Use this information to update the relevant sections of the `config.js` file.

### To run the `converter.js` script

Once the previous steps are in place, run the following command to convert the `swagger.json` file to a `postman-collection.json` file, and then update your existing collection in the cloud using the Postman API.

From the command line:

    $ node converter.js