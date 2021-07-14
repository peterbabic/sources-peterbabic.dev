# Using CSS selectors on Markdown in JS

This is a source code repository for the blog post

<https://peterbabic.dev/blog/using-css-selectors-on-markdown>

## Setup

```bash
git clone https://git.peterbabic.dev/demo/css-selectors-markdown.git
cd css-selectors-markdown
npm install
node .
```

This should produce the JSON ouput containing all the level 2 headings
(`##`) from the [post.md](post.md)

```json
[
  {
    "type": "heading",
    "depth": 2,
    "children": [
      {
        "type": "text",
        "value": "Second level heading A",
        "position": {
          "start": {
            "line": 5,
            "column": 4,
            "offset": 48
          },
          "end": {
            "line": 5,
            "column": 26,
            "offset": 70
          }
        }
      }
    ],
    "position": {
      "start": {
        "line": 5,
        "column": 1,
        "offset": 45
      },
      "end": {
        "line": 5,
        "column": 26,
        "offset": 70
      }
    }
  },
  {
    "type": "heading",
    "depth": 2,
    "children": [
      {
        "type": "text",
        "value": "Second level heading B",
        "position": {
          "start": {
            "line": 9,
            "column": 4,
            "offset": 86
          },
          "end": {
            "line": 9,
            "column": 26,
            "offset": 108
          }
        }
      }
    ],
    "position": {
      "start": {
        "line": 9,
        "column": 1,
        "offset": 83
      },
      "end": {
        "line": 9,
        "column": 26,
        "offset": 108
      }
    }
  }
]
```

## License

MIT
