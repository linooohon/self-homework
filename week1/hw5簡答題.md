### 請解釋後端與前端的差異。 ###
差異很多，最主要的差異，前端忙著使用者可以看得到、可以操控的部分
後端則是顧名思義對使用者來說不是這麼前面的事，包括資料庫設計、整個流程的跑動設計、控管背後需要的功能與資訊。



### 假設我今天去 Google 首頁搜尋框打上：JavaScript 並且按下 Enter，請說出從這一刻開始到我看到搜尋結果為止發生在背後的事情。 ###
這件事包括：使用者的網頁、瀏覽器、處理器、網路卡、IP主機、資料庫

瀏覽器會把使用者輸入的文字及指令透過處理器轉換成訊號，再經由網路卡把訊號內容傳送到 google 所在 IP 的主機上，透過主機的網路硬體接收並解析，然後在資料庫裡根據相關指令搜尋想要的內容，資料庫給出回應並回傳主機，主機根據設定好的指令把回應內容加入版型、連結等指令再轉換成訊號藉由網路主機送回使用者的網路卡，網路卡收到訊號傳給處理器，處理器將訊號轉換成指令後回傳到瀏覽器，瀏覽器根據指令上的內容顯示出正確的版面配置及內容。

之後再補充！

大致流程解析：
首先使用者開啟搜尋引擎的時候，例如 Google 首頁，其實這當下網頁就已經開始運作了，
這個流程與我們輸入網址 (Domain Name) 按下 enter的時候是一樣的，也是一樣開始再運作一次
1.好，按 Enter 的當下，這時候網址會進入 DNS (domain name system) 裡面尋找與網址相對應的 IP
2.然後，會再從找到的 IP 位置去找到網頁伺服器 (web sever) 去跟他拿資料
3.拿到資料後，就會再回傳給瀏覽器，瀏覽器再把資料變成我們所看到的網頁。

-
**DNS**
為 Domain Name System 的縮寫，中文又稱領域名稱解析系統。 是網際網路的一項的服務，是個可將網址和 IP 位址相互對應的資料庫，能夠使人更方便的存取網際網路

**IP位址**
為 Internet Protocol Address 的縮寫，中文被稱為網際協議位址。 是一種在 Internet 上的給主機編址的方式。 IP 位址可以說是網頁伺服器的門牌讓系統可以透過這個號碼找到正確的網頁伺服器在哪裡。

**網頁伺服器**
又叫做 Web Server，網頁伺服器裡頭包含了 Apache 和 DB。 Apache 是接洽的服務員負責將網頁畫面傳遞給瀏覽器，只要網頁中有需要資料的部分 Apache 就會向 DB 索取資料後一起交給瀏覽器。 DB (Data Base) 就是存放資料的地方。
Web Server 的種類有：apache、nginx、iis apache 和 nginx 的差別在於 nginx 可能速度會比較快，用的資源少。 iis 是微軟做的，如果是寫 asp.net  就可用這套 iis ，但環境卻是在 Windows Server 上。

### 請列舉出 3 個「課程沒有提到」的 command line 指令並且說明功用。 ###
`clear` : 清除畫面 <br>
`whoami` : 現在的允許使用者是誰 <br>
`history` : 叫出使用過的指令 <br>
`history | grep git` : 找出紀錄有 git 字眼的 <br>
`find . -name '*.html'` : 尋找後面有.html的檔案 <br>
`find . -name a.txt` :找 a.txt<br>
`find . -mtime -1` :找當前目錄一天內有修改過得檔案<br>
