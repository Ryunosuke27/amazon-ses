// @ts-nocheck
import {
  SESClient,
  SendEmailCommand,
  SendEmailCommandInput,
} from "@aws-sdk/client-ses";
const client = new SESClient({});

(async () => {
  /**
   * Send email.
   */
  const domain = "kokorozashi-master.com";
  const accountid = "291138884554";
  const input: SendEmailCommandInput = {
    Source: `no-reply@${domain}`,
    SourceArn: `arn:aws:ses:ap-northeast-1:${accountid}:identity/${domain}`,
    Destination: { ToAddresses: ["ryunosuke.engineer@gmail.com"] },
    Message: {
      Subject: {
        Data: "Email title.",
        Charset: "UTF-8",
      },
      Body: {
        Text: {
          Data: "Email body.",
          Charset: "UTF-8",
        },
      },
    },
  };
  const command = new SendEmailCommand(input);
  const response = await client.send(command);
  console.log("response:", response);
})();
