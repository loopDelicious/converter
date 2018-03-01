# Automate Swagger 2.0 to Postman 2.0 updates

Convert local Swagger 2.0 file to Postman 2.0, and then update Postman collection using Postman API


### To get started

* Get a Postman API key from the [Postman integrations dashboard](https://app.getpostman.com/dashboard/integrations)
* Keep your key secret by creating a new file with your key called `secrets.js` in the root of this directory. For example:
```javascript
module.exports = {
       "key": "e3da74f605fa422b9323c0d6dad39771"
   };
```
* To update an existing collection, retrieve the `collection_uid` and `collection_id` by submitting a [`GET` request using the Postman API](https://docs.api.getpostman.com/#3190c896-4216-a0a3-aa38-a041d0c2eb72). Use this information to update the relevant sections of the `config.js` file.
* Install your dependencies. 


From the command line:

    $ npm install

### To run the `converter.js` script

Once you've completed the previous steps, run the following command to convert `swagger.json` to `postman-collection.json`, and then update your existing collection in the cloud using the Postman API.

From the command line:

    $ node converter.js