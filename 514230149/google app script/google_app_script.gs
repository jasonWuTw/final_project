// ============================================================================
// Google Apps Script - 接收表單並發送通知
// 部署時請選擇 "Web app"
// 授權時請選擇 "Deploy as web app"，並勾選 "Execute as: Me"
// ============================================================================

function doPost(e) {
  try {
    // 取得當前的試算表 
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // 取得表單參數
    var data = e.parameter;
    
    // 1. 寫入 Google Sheets
    // 欄位順序：時間, 姓名, Email, 主旨, 內容
    sheet.appendRow([
      new Date(), 
      data.name, 
      data.email, 
      data.subject, 
      data.message
    ]);
    
    // 2. 發送 Email 通知
    var recipients = "514230149@cloud.fju.edu.tw,jason.wu.tw@gmail.com, jasonwutw@hotmail.com";
    var emailSubject = "新聯絡表單通知: " + data.subject;
    var emailBody = "您收到了一則新的聯絡訊息：\n\n" +
                    "姓名: " + data.name + "\n" +
                    "Email: " + data.email + "\n" +
                    "主旨: " + data.subject + "\n\n" +
                    "訊息內容:\n" + data.message;
    
    MailApp.sendEmail({
      to: recipients,
      subject: emailSubject,
      body: emailBody
    });
    
    // 回傳成功訊息給前端
    return ContentService.createTextOutput("OK").setMimeType(ContentService.MimeType.TEXT);
    
  } catch (err) {
    // 發生錯誤時回傳錯誤訊息
    return ContentService.createTextOutput("Error: " + err.toString()).setMimeType(ContentService.MimeType.TEXT);
  }
}
