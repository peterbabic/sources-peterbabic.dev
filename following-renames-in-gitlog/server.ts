import gitlog, { GitlogOptions } from "gitlog"

const options: GitlogOptions = {
  repo: ".",
  fields: ["subject", "authorName", "authorDate"] as const,
  branch: "--follow",
  file: "renamed-blog-post.md",
}

gitlog(options).forEach(entry => console.log(entry))
