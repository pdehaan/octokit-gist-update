const gh = require("./gh-client");
const dotenv = require("dotenv");

dotenv.config();

main();

async function main() {
  const gist_id = process.env.GH_GIST_ID;

  // await gh.getGist({ gist_id });

  const files = {
    "sfw.json": {
      content: JSON.stringify({
        funny: "/r/funny/",
        askreddit: "/r/askreddit/",
        gaming: "/r/gaming/",
      }),
    },
  };

  await gh.updateGist({
    gist_id,
    description: "Fancy Gist-based backup for redditlist",
    files,
  });
}
