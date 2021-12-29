import * as Slack from "typed-slack";

export const fetchSlack = async (msg: string) => {
  let slack = new Slack.IncomingWebhook(`${process.env.SLACK_URL}`);
  slack
    .send({ text: msg })
    .then((e: any) => {
      console.log("success");
    })
    .catch((e: any) => {
      console.error(e);
    });
};
