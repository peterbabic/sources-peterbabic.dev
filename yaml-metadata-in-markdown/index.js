const fs = require("fs")
const yaml = require("js-yaml")
const unified = require("unified")
const parse = require("remark-parse")
const stringify = require("remark-stringify")
const frontmatter = require("remark-frontmatter")
const select = require("unist-util-select").select

let tree

unified()
  .use(parse)
  .use(stringify)
  .use(frontmatter, ["yaml"])
  .use(() => t => (tree = t))
  .process(fs.readFileSync("example.md"))

const yamlNode = select("yaml", tree)
const parsedYaml = yaml.safeLoad(yamlNode.value)

console.log(parsedYaml)

module.exports = parsedYaml
