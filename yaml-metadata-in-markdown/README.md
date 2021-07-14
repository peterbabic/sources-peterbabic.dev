# YAML metadata in Markdown

This is a source code repository for the blog post

<https://peterbabic.dev/blog/yaml-metadata-in-markdown>

## Setup

```bash
git clone https://git.peterbabic.dev/demo/yaml-metadata-in-markdown.git
cd yaml-metadata-in-markdown
npm install
node .
```

This should produce the JSON ouput containing parsed Front Matter in a form
of YAML from the [example.md](example.md)

```json
{
  "Title": "Post about the Front Matter",
  "Category": "programming",
  "Tags": ["markdown", "yaml", "metadata"]
}
```

## License

MIT
