const Ajv = require("ajv")
const ajv = new Ajv()

const schema = {
    "type": "object",
    "properties": {
        "firstName":{
            "type":"string",
            "nullable": false,
        },
        "lastName":{
            "type":"string",
            "nullable": false,
        },
        "userName":{
            "type":"string",
            "nullable": false,
            "minLength":8,
            "pattern":"[a-z]+[1-9]*"
        },
        "email":{
            "type":"string",
            "pattern":".+\@.+\..+"
        },
        "phoneNumber":{
            "type":"string",
            "nullable": false,
            "minLength":11
        },
        "role":{
            enum:["farmer", "engineer"]
        },
        "workField":{
            "type":"string",
            "nullable": false,
        },
        "usageTarget":{
            "type":"string",
            "nullable": false,
        },
        "streetName": {
            "type": "string",
            "nullable": false
        },
        "city": {
            "type": "string",
            "nullable": false
        },
        "state": {
            "type": "string",
            "nullable": false
        },
        "country": {
            "type": "string",
            "nullable": false
        },
        "postCode": {
            "type": "string",
            "nullable": false
        }
    }
}

module.exports = ajv.compile(schema)