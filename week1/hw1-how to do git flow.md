交作業流程
1. 在本地端建立自己的branch，不要在master上做作業，雖然我是自己一個人做操作，但還是練習用branch
git branch week1
2. 在這個branch做完作業
3. 做完放到暫存追蹤
git add .
4. commit 作業到本地 repository
git commmit -am "week1done"
5. push 到 github遠端
git push origin master
6. 發起 PR (pull request)
7. 因為自己一個人沒人批改作業，所以假裝被批改了，在本地更新版本
git pull origin master
8. 地切換到 master branch 刪除本地當週的 branch
git checkout master
git branch -d week1