## 交作業流程 ##
1. 在本地端建立自己的branch，不要在master上做作業，雖然我是自己一個人做操作，但還是練習用branch
`git branch week1`
2. 在這個branch做完作業，用什麼編輯器應該都行，主要作業要用.md做，練習markdown語法
`git checkout week1`
3. 做完放到暫存追蹤
`git add .`
4. commit 作業到本地 repository
`git commit -am "week1hw1"` 這是假設hw1（hw2 - hwx 都是一樣流程，只是最後完成全部的commit可以註解 "hwall")
5. push 到 github遠端，建立遠端branch
`git push origin week1`
6. 發起 PR (pull request) ，要求merge回遠端master
7. 因為自己一個人沒人批改作業，所以假裝被批改了，在github上准許merge
，並順勢刪除遠端名為week1的branch，這時候遠端master已被更新
8. 回到本地，把本地branch切換到master
`git checkout master`
9. 再回到本地更新版本，把遠端master，pull下來
`git pull origin master`
10. 本地切換到 master branch 刪除本地當週的 branch
`git checkout master`
`git branch -d week1`
11. 之後交作業流程就是重複上述步驟