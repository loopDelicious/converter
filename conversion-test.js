var fs = require('fs'),
	Converter = require('swagger2-postman2-converter'),
	swaggerObject  = JSON.parse(
		fs.readFileSync('swagger.json', 'utf8')
	),
	conversionResult = Converter.convert(swaggerObject);
	
fs.writeFileSync("postman-collection.json", JSON.stringify(conversionResult.collection,null, 2));

console.log('Converted the Swagger spec to a Postman Collection!');
