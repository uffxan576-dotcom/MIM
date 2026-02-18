module.exports.config = {
  name: "random",
  version: "1.0.0",
  permission: 0,
  credits: "farhan",
  description: "Random sad video",
  prefix: true,
  category: "Media",
  usages: "video",
  cooldowns: 5,
  dependencies: {
    "axios": "",
    "fs-extra": "",
    "request": ""
  }
};

module.exports.run = async ({ api, event, args, client, Users, Threads, __GLOBAL, Currencies }) => {
  const axios = global.nodemodule["axios"];
  const request = global.nodemodule["request"];
  const fs = global.nodemodule["fs-extra"];

  var hi = ["༏༏🌺 হাই বাবুরা 𝐑𝐀𝐍𝐃𝐎𝐌 ভিডিও দেখবা তাই না এই নাও বস 🌺༏༏                        ─꯭─⃝͎̽𓆩𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍‣᭄𓆪                                                       =~এর ভয়েস ভিডিও~=                                                                                                         •──༏༏🌺𝐑𝐀𝐍𝐃𝐎𝐌 𝐕𝐈𝐃𝐄𝐎🌺༏༏──•"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
                "https://i.imgur.com/hc8Ed6F.mp4",
		"https://i.imgur.com/rPOCiNG.mp4",
		"https://i.imgur.com/8jJJcfA.mp4",
                "https://i.imgur.com/hc8Ed6F.mp4",
                "https://i.imgur.com/9OlKrSQ.mp4",
                "https://i.imgur.com/rPOCiNG.mp4",
                "https://i.imgur.com/LMx3GRL.mp4",
                "https://i.imgur.com/EpSBt3r.mp4",
                "https://i.imgur.com/1iaf4A8.mp4",
                "https://i.imgur.com/36e6ZGT.mp4",
  ];

  var callback = () => {
    api.sendMessage({ body: `「 ${know} 」`, attachment: fs.createReadStream(__dirname + "/cache/15.mp4") }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/15.mp4"));
  };

  return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/15.mp4")).on("close", () => callback());
};
