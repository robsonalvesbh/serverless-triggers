# Templates 

## SQS

#### Template name

> sqs

#### Input (Folder `tests/payloads`) 

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

#### Output (Folder `tests/triggers`) 

```json
{
	"Records": [
		
		{
			"messageId": "serverless-trigger-1585607868095",
			"receiptHandle": "serverlessTriggerHandle",
			"body": "{\"name\":\"Serverless Triggers\"}",
			"attributes": {
				"ApproximateReceiveCount": "1",
				"SentTimestamp": "1585607868095",
				"SenderId": "0.1261713761061889",
				"ApproximateFirstReceiveTimestamp": "1585607868095"
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

#### Getting Message

```js
exports.handler = async function(event) {
  event.Records.forEach(record => {
    const { body } = record
    console.log(body)
  })
  
  return {}
}
```

## SNS

#### Template name

> sns

#### Input (Folder `tests/payloads`) 

```json
{
  "template": "sns",
  "payloads": [
    {
      "name": "Serverless Triggers"
    }
  ]
}
```

#### Output (Folder `tests/triggers`) 

```json
{
	"Records": [
		
		{
			"EventSource": "aws:sns",
			"EventVersion": "1.0",
			"EventSubscriptionArn": "arn:aws:sns:us-east-1:{{{accountId}}}:serverlessTriggerTopic",
			"Sns": {
				"Type": "Notification",
				"messageId": "serverless-trigger-1585607868091",
				"TopicArn": "arn:aws:sns:us-east-1:123456789012:serverlessTriggerTopic",
				"Subject": "",
				"Message": "{\"name\":\"Serverless Triggers\"}",
				"Timestamp": "1585607868091",
				"SignatureVersion": "1",
				"Signature": "serverlessTriggerSignature",
				"SigningCertUrl": "https://sns.us-east-1.amazonaws.com/ServerlessTriggerService-f3ecfb7224c7233fe7bb5f59f96de52f.pem",
				"UnsubscribeUrl": "https://sns.us-east-1.amazonaws.com/?Action=Unsubscribe&SubscriptionArn=arn:aws:sns:us-east-1:123456789012:serverlessTriggerTopic:c9135db0-26c4-47ec-8998-413945fb5a96",
				"MessageAttributes": {
					"AWS.SNS.SMS.SenderID": {
						"DataType": "String",
						"StringValue": "serverlessTrigger"
					}
				}
			}
		}
		
	]
}

```

#### Getting Message

```js
exports.handler = async function(event) {
  event.Records.forEach(record => {
    const { Sns: { Message } } = record
    console.log(Message)
  })
  
  return {}
}
```

## SNS-TO-SQS

#### Template name

> sns-to-sqs

#### Input (Folder `tests/payloads`) 

```json
{
  "template": "sns-to-sqs",
  "payloads": [
    {
      "name": "Serverless Triggers"
    }
  ]
}
```

#### Output (Folder `tests/triggers`) 

```json
{
	"Records": [
		
		{
			"messageId": "serverless-trigger-1585607868084",
			"receiptHandle": "serverlessTriggerHandle",
			"body": "{
				\"Type\": \"Notification\",
				\"messageId\": \"serverless-trigger-1585607868084\",
				\"TopicArn\": \"arn:aws:sns:us-east-1:123456789012:serverlessTriggerTopic\",
				\"Subject\": \"\",
				\"Message\": \"{\\\"name\\\":\\\"Serverless Triggers\\\"}\",
				\"Timestamp\": \"1585607868084\",
				\"SignatureVersion\": \"1\",
				\"Signature\": \"serverlessTriggerSignature\",
				\"SigningCertUrl\": \"https://sns.us-east-1.amazonaws.com/ServerlessTriggerService-f3ecfb7224c7233fe7bb5f59f96de52f.pem\",
				\"UnsubscribeUrl\": \"https://sns.us-east-1.amazonaws.com/?Action=Unsubscribe&SubscriptionArn=arn:aws:sns:us-east-1:123456789012:serverlessTriggerTopic:c9135db0-26c4-47ec-8998-413945fb5a96\",
				\"MessageAttributes\": {
					\"AWS.SNS.SMS.SenderID\": {
						\"DataType\": \"String\",
						\"StringValue\": \"serverlessTrigger\"
					}
				}
			}",
			"attributes": {
				"ApproximateReceiveCount": "1",
				"SentTimestamp": "1585607868084",
				"SenderId": "0.9296246448079732",
				"ApproximateFirstReceiveTimestamp": "1585607868084"
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

#### Getting Message

```js
exports.handler = async function(event) {
  event.Records.forEach(record => {
    const { body: { Message } } = record
    console.log(Message)
  })
  
  return {}
}
```