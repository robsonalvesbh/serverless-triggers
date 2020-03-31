## Problem that we solved
 
When you send a message to the SQS Queue that will trigger a Lambda, the AWS will wrap your message into a standard SQS payload, so when you need to simulate the SQS trigger locally to invoke your Lambda, you'll need to wrap your message into a standard SQS payload too, and this is not an intuitive thing and the same happens with others Lambda Triggers like SNS, S3 and etc...

## Example

If you send this message to SQS Queue:

```json
{
  "name": "Serverless Triggers"
}
```

You will receive in your Lambda function a payload like this and your message will be available within body field:

```json
{
	"Records": [
		{
			"messageId": "serverless-trigger-1585320039967",
			"receiptHandle": "serverlessTriggerHandle",
			"body": "{\"name\":\"Serverless Triggers\"}",
			"attributes": {
				"ApproximateReceiveCount": "1",
				"SentTimestamp": "1585320039967",
				"SenderId": "0.030470054664925694",
				"ApproximateFirstReceiveTimestamp": "1585320039967"
			},
			"messageAttributes": {},
			"md5OfBody": "7b270e59b47ff90a553787216d55d91d",
			"eventSource": "aws:sqs",
			"eventSourceARN": "arn:aws:sqs:us-east-1:375164415270:serverlessTriggerQueue",
			"awsRegion": "us-east-1"
		}
	]
}
```

The purpose of this package is wrapping your message in the payload of the tool that you want to simulate the trigger.