const test = require("tape")
const actual = require("../index")

const expected = {
  Title: "Post about the Front Matter",
  Category: "programming",
  Tags: ["markdown", "yaml", "metadata"],
}

test("equal", t => {
  t.deepEqual(actual, expected)
  t.end()
})
