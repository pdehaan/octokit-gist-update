const { Octokit } = require("@octokit/rest");
const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  // Gists
  getGist,
  updateGist,
  // Auth
  getAuthScopes,
};

const gh = new Octokit({
  auth: process.env.GH_API_KEY,
});

async function getGist({ gist_id = "" }) {
  return gh.gists.get({ gist_id });
}

async function updateGist(params = {}) {
  return gh.gists.update(params);
}

async function getAuthScopes() {
  const { headers } = await gh.request("/");
  return headers["x-oauth-scopes"];
}
