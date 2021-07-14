import { Repository, Revwalk, Commit } from "nodegit"
import { format } from "date-fns"

enum STATUS {
  "UNMODIFIED",
  "ADDED",
  "DELETED",
  "MODIFIED",
}

const fileName = "added.ts"
const maxCount = 500

;(async () => {
  const repo = await Repository.open(".")
  const master = await repo.getMasterCommit()
  const walker = repo.createRevWalk()
  walker.push(master.id())
  walker.sorting(Revwalk.SORT.REVERSE)
  const fileHistory = await walker.fileHistoryWalk(fileName, maxCount)

  let created: Date = new Date()
  let modified: Date = new Date()
  created.setTime(0)
  modified.setTime(0)

  fileHistory.forEach(file => {
    const commit: Commit = file?.commit
    const date = commit.date()
    const status = file?.status

    if (status === STATUS.ADDED && date.getTime() > created.getTime()) {
      created = date
    }

    if (
      status === STATUS.MODIFIED &&
      date.getTime() > modified.getTime()
    ) {
      modified = date
    }

    /*console.log(
      commit.sha(),
      commit.date(),
      commit.author().email(),
      "status: ",
      STATUS[status]
    )*/
  })

  const formatDate = (date: Date) => format(date, "dd-MM-yyyy")

  console.log(
    fileName,
    "created:",
    formatDate(created),
    "modified:",
    formatDate(modified)
  )
})()
