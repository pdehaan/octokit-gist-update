const { Octokit } = require("@octokit/rest");
const dotenv = require("dotenv");

dotenv.config();

const gh = new Octokit({
  auth: process.env.GH_API_KEY,
});

main();

async function main() {
  const gist_id = process.env.GH_GIST_ID;

  // const gist = await getGist({ gist_id });

  const files = {
    "sfw.json": {
      content: JSON.stringify({funny: "/r/funny/", askreddit: "/r/askreddit/", gaming: "/r/gaming/"})
    }
  };

  const gist2 = await updateGist({
    gist_id,
    description: "Fancy Gist-based backup for redditlist",
    files
  });
}

async function getGist({ gist_id = "" }) {
  return gh.gists.get({ gist_id });
}

async function updateGist(params = {}) {
  return gh.gists.update(params);
}

// async function getAuthScopes() {
//   const { headers } = await gh.request("/");
//   return headers["x-oauth-scopes"];
// }
