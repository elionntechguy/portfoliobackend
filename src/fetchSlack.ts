import * as Slack from "typed-slack";

export const fetchSlack = async (msg: string) => {
  let slack = new Slack.IncomingWebhook(
    "https://hooks.slack.com/services/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"
  );
  slack
    .send({ text: msg })
    .then((e: any) => {
      console.log("success");
    })
    .catch((e: any) => {
      console.error(e);
    });
};
