# Usage Guide

The easiest way to use this CLI is to create your payload files on the [payload folder](#folders) and therefore run the [generate command](#Generate), so you can trigger your lambda function using your payload.

## Payload file

For create your payload file you need to create a `json` file inside the `tests/payloads` folder, the `json` file needs to have this structure. 

```json
{
  "template": "sqs",
  "payloads": [
    {
      "name": "Serverless Triggers"
    }
  ]
}
```

Use the `template` field to set the tool you want to use to wrap your payload and define your payload at the `payloads` field.

The `payloads` field is an `Array`, it means you can pass more than one payload and simulate batch size trigger.


?> **Tip** look the templates availables in [templates](templates.md#templates).

## Triggering your function

```bash
serverless invoke local -f myFunction --path tests/triggers/myFunction.json
```

## Comands

### Generate

```bash
serverless-triggers generate
```

This command will compile all your files that are in folder `tests/payloads` and will generate a corresponding file for each one of them in folder `tests/triggers` with your payload compiled according to the chosen template.

### Version

```bash
serverless-triggers --version
``` 
