# Following renames in gitlog

This demo serves as a minimal working example for the blog post

<https://peterbabic.dev/blog/following-renames-in-gitlog>

The method outlined here is curently used in my blog to determine when the
markdown blog post file was published and also when it was last edited.

## Setup

```bash
git clone https://git.peterbabic.dev/demo/following-renames-gitlog.git
cd following-renames-gitlog
npm install
npm run dev
```

This should produce the following output:

```js
{
  status: [ 'M' ],
  files: [ 'renamed-blog-post.md' ],
  subject: 'add additional sentence to to blog post',
  authorName: 'Peter Babič',
  authorDate: '2020-12-03 22:07:31 +0100'
}
{
  status: [ 'M' ],
  files: [ 'renamed-blog-post.md' ],
  subject: 'insert a chapter into post',
  authorName: 'Peter Babič',
  authorDate: '2020-12-03 21:51:19 +0100'
}
{
  status: [ 'R100', 'D' ],
  files: [ 'renamed-blog-post.md', 'blog-post.md' ],
  subject: 'rename blog post',
  authorName: 'Peter Babič',
  authorDate: '2020-12-03 21:49:27 +0100'
}
{
  status: [ 'A' ],
  files: [ 'blog-post.md' ],
  subject: 'insert blog post file to track',
  authorName: 'Peter Babič',
  authorDate: '2020-12-03 20:54:27 +0100'
}
```

Which is equivalent to the command

```bash
git log --follow --name-status renamed-blog-post.md
```

Producing the output

```
commit 48831b93a453f7c88838620509ccae6f9feaf851
Author: Peter Babič <peter@peterbabic.dev>
Date:   Thu Dec 3 22:07:31 2020 +0100

    add additional sentence to to blog post

M       renamed-blog-post.md

commit f6732cbfb7d787f62190b983f73901dd05f749e5
Author: Peter Babič <peter@peterbabic.dev>
Date:   Thu Dec 3 21:51:19 2020 +0100

    insert a chapter into post

M       renamed-blog-post.md

commit 70955f7c2ecdec469226f8226a10ad313497972e
Author: Peter Babič <peter@peterbabic.dev>
Date:   Thu Dec 3 21:49:27 2020 +0100

    rename blog post

R100    blog-post.md    renamed-blog-post.md

commit 86b45b4a5a7aee4726834e70f0ede60ac961abc5
Author: Peter Babič <peter@peterbabic.dev>
Date:   Thu Dec 3 20:54:27 2020 +0100

    insert blog post file to track

A       blog-post.md
```

With the difference that the former is already parsed and ready to use in a
script.

## License

MIT
