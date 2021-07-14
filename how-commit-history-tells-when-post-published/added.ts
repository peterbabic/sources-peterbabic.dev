import { Repository, Commit, Diff, ConvenientPatch } from "nodegit"
;(async () => {
  const repo = await Repository.open(".")
  const master = await repo.getMasterCommit()
  const history = master.history()

  history.on("commit", async (commit: Commit) => {
    const commitDiff = await commit.getDiff()
    commitDiff.forEach(async (diff: Diff) => {
      console.log(
        "--- COMMIT ---\n",
        commit.sha(),
        commit.author().email(),
        commit.date(),
        commit.message(),
        "deltas: ",
        diff.numDeltas(),
        diff?.getDelta(1)?.oldFile()?.path()
      )

      const patches = await diff.patches()
      patches.forEach(async (patch: ConvenientPatch) => {
        //const hunks = await patch.hunks()
        /*hunks.forEach(async (hunk: ConvenientHunk) => {
          console.log("diff: ", patch.oldFile().path(), patch.newFile().path())
          console.log(hunk.header().trim())

          const lines = await hunk.lines()
          lines.forEach(async (line: DiffLine) => {
            console.log(
              String.fromCharCode(line.origin()) + line.content().trim()
            )

          })
        })*/
      })
    })
  })

  history.start()
})()
