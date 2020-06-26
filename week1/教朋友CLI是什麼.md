## 狀況 ##
有天，你的麻吉 h0w 哥跑來找你說：「欸！能不能教我 command line 到底是什麼，然後怎麼用啊？我想用 command line 建立一個叫做 wifi 的資料夾，並且在裡面建立一個叫 afu.js 的檔案。就交給你了，教學寫好記得傳給我，ㄅㄅ」

## 解惑: ##

在沒有作業軟體以前，電腦還只能用打字控制操作的時候，我們必須要電腦能懂的語言去跟他溝通，現在的作業軟體背後還是有用這種方式運作，只是做出了更容易使用的 " 圖形使用者介面 " 常見出現在電腦的那個黑黑的框框就是它的一種，基本上電腦上都會有它，而有些功能其實只能在那黑黑的裡面使用。
當然不只黑黑的，你也可以改樣式，用其他的 CLI

## Command Line : ##

- 別稱：命令列、命令行、cmd、terminal 終端機 、prompt、CLT(command line tools)

- （Graphical User Interface，GUI）圖形使用者介面，其實背後也都是命令列介面（Command Line Interface，CLI）所構成的

## 用 command line 建立叫做 wifi 的資料夾 ##
## 並且在裡面建立一個叫 afu.js 的檔案 ##

建立一個 wifi 的資料夾，並且在裡面建立一個叫 afu.js 的檔案：
這很簡單，用一般的方式就是右鍵新增資料夾，再在資料夾裡右鍵新增檔案
而用 command line 的話 ，其實也很簡單就是輸入指令：
1. `mkdir wifi`
2. `cd wifi`
3. `ls`
4. `pwd`
5. `touch afu.js`
6. `ls`

其實只要 `mkdir wifi` `cd wifi` `touch afu.js` 就可以了，
`pwd`只是確認現在位置，`ls`了解目前資料夾有什麼

