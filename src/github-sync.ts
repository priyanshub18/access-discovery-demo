import { Octokit } from "@octokit/rest";

export async function loadRepository(owner: string, repo: string) {
  const token = process.env.GITHUB_TOKEN;
  if (!token) return null;

  const github = new Octokit({ auth: token });
  return github.rest.repos.get({ owner, repo });
}
