[![robsonalvesbh](https://circleci.com/gh/robsonalvesbh/serverless-triggers.svg?style=shield)](<LINK>)

# serverless-triggers 

`serverless-triggers` is a CLI to generate event payloads to help you simulate AWS tool triggers (like SQS, SNS, S3, and others) to test your lambdas locally.

## CLI

```bash
serverless-triggers --help
```

?> **Tip** you can use `sls-triggers` or `slst` as alias.

## Install

It is recommended to install `serverless-triggers` globally:

#### Install via Yarn

```bash
yarn global add serverless-triggers 
```

#### Install via NPM

```bash
npm i -g serverless-triggers 
```

## Initialize

```bash
serverless-triggers init
```

This command will create the `tests/payloads` folder and create an example payload file:

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

## How to use

Read the [Usage Guide](usage-guide.md#usage-guide) on our website for detailed instructions on how to use Serverless Triggers CLI.

## Templates availabes

Check the templates available on the [Templates Page](templates.md)

