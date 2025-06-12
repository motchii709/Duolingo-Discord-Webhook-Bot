// main.gs

function sendSixCharacterMessage() {
  const webhookUrl = "https://discord.com/api/webhooks/XXX/YYY";
  
  const characters = [
    {
      name: "duo",
      avatar: "https://pbs.twimg.com/media/GtDDFDVaYAAiVZu?format=png&name=small",
      messages: ["デュオリンゴはもうやったのか？え？", "お前たち、1日5分すら惜しいのか？"]
    },
    {
      name: "duo",
      avatar: "https://pbs.twimg.com/profile_images/1869497839530700800/8j9e6URb_400x400.jpg",
      messages: ["今日のデュオリンゴは終わらせた？"]
    },
    {
      name: "duo",
      avatar: "https://pbs.twimg.com/media/GsyfEl8WsAAalOz?format=jpg&name=small",
      messages: ["今日のでゅんごりおはもうやった？"]
    },
    {
      name: "duo",
      avatar: "https://pbs.twimg.com/media/GsHK4SqaUAUfwA2?format=jpg&name=small",
      messages: ["今日のデュオリンゴをやっていない場合、あなたは死ぬ必要があります。"]
    },
    {
      name: "duo",
      avatar: "https://pbs.twimg.com/media/GrPUAAlXMAA_ajP?format=jpg&name=small",
      messages: ["デュオリンゴ、今日はもうやったの？ねぇ？"]
    },
    {
      name: "duo",
      avatar: "https://pbs.twimg.com/media/Gp8cqQCa4AAJdrJ?format=jpg&name=240x240",
      messages: ["デュオリンゴをやりなさい"]
    }
  ];

  const character = characters[Math.floor(Math.random() * characters.length)];
  const message = character.messages[Math.floor(Math.random() * character.messages.length)] + " @everyone";

  const payload = JSON.stringify({
    content: message,
    username: character.name,
    avatar_url: character.avatar
  });

  const options = {
    method: "POST",
    contentType: "application/json",
    payload: payload
  };

  UrlFetchApp.fetch(webhookUrl, options);
}
