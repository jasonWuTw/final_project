# MyBlog

## GAS功能：
1. Send Message 按下去的時候, 將 form的內容，送到Google App Script

2. Google App Script收到之後, 填寫到 google sheets

3. Google App Script 發送email通知給 jason.wu.tw@gmail.com 以及 jasonwutw@hotmail.com

## 串接 Google App Script (GAS) 的實作計畫。
實作步驟摘要：

### Google App Script (後端)：

在您的 Google 試算表中，點選「擴充功能」 > 「Apps Script」。
貼上該檔案中的內容。
點選「部署」 > 「新部署」，類型選擇「網頁應用程式」。
將「誰有權存取」設定為「任何人」。
部署後複製該網頁應用程式的 URL。

### HTML 表單 (前端)：
修改 index.html，讓表單在按下 "Send Message" 時，將資料透過 JavaScript 送到您的 GAS URL，並同時保留原本的「載入中」與「傳送成功」等視覺效果。

請查看 
實作計畫
 並確認是否可以開始執行。如果您已經準備好 GAS 的 URL，請告訴我，我會直接幫您填入程式碼中。