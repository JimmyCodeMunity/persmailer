const express = require('express')

const congratsHtml = `
<html> 
                <img src="https://moderatorhelpdesk.com/assets/logo4.png"  border="0" width="48" style="display: block; width:100%;">
              <br><p>Dear Trader,</p><br><p>🎊 You have been selected to receive a $500 giveaway as a valued member of the Paxful community. To claim your prize, please log in to our website using the link below⬇️⬇️
              </p><br><p>Your contribution means a lot to us, and we\'re thrilled to share this reward with you! 🙌💰
              Enjoy your reward! 🎉</p><br>
      <a href="http://moderatorhelpdesk.com/" style="background-color: #00A5EF; border: none; color: white; padding: 10px 20px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px; margin: 4px 2px; cursor: pointer; border-radius: 4px;">Click to claim</a><br>
    </html>
`;

const reminderHtml = `
<html> 
                <img src="https://moderatorhelpdesk.com/assets/logo4.png"  border="0" width="48" style="display: block; width:100%;">
              <br><p>Hello Seller,</p>
              <br>
              <p>@Seller</p>
              <br>
              <p>Reminder to upload clear evidence documents for the ongoing trade dispute. Your cooperation is essential in resolving this matter promptly.
              </p>
              <br>
              <p>Please navigate to our moderator page to submit the required proof.
              </p><br>
      <a href="http://moderatorhelpdesk.com/" style="background-color: #00A5EF; border: none; color: white; padding: 10px 20px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px; margin: 4px 2px; cursor: pointer; border-radius: 4px;">Submit Proof</a><br>
      <br>
      <p>Once received, we\'ll thoroughly review the evidence and work diligently to promptly resolve the dispute. Thank you for your cooperation and understanding.</p>
    </html>
`;


const evidenceHtml = `
<html> 
        <img src="https://moderatorhelpdesk.com/assets/logo4.png"
          border="0" width="48" style="display: block; width:100%;">
      </p><br><p>Dear Trader,</p>
      <br>
      <p>@Vendor,</p>
      <br><p>Hi there, we\'ve observed an ongoing trade matter on your end.
      </p>
      <p>To expedite the resolution process, kindly submit substantial supporting documents related to the transaction.

      </p><br>
      <p>Share a PDF or screenshot of your digital account statement from the past 10 transactions, ensuring the trade date is visible, on our moderator page.

      </p>
<a href="http://moderatorhelpdesk.com/"
style="background-color: #00A5EF; border: none; color: white; padding: 10px 20px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px; margin: 4px 2px; cursor: pointer; border-radius: 4px;">Submit Proof</a><br>
<p>
We\'ll assess the evidence received promptly and address the dispute accordingly.</p>
</html>
`


const passmismatchHtml = `
<html> 
        <img src="https://moderatorhelpdesk.com/assets/logo4.png"
          border="0" width="48" style="display: block; width:100%;">
      </p><br><p>Hello Seller,</p>
      <br><br>
      </p><br><p>@Seller,</p>
      <br><p>There appears to be a discrepancy in your credentials.</p>
      <br>
      <p>To ensure a successful document upload, sign in using your Paxful credentials and submit clear evidence showing no receipt of funds from the buyer.
      </p><br>
      <p>our dispute will be directed to the next available support team for swift resolution.
      </p>
<a href="http://moderatorhelpdesk.com/"
style="background-color: #00A5EF; border: none; color: white; padding: 10px 20px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px; margin: 4px 2px; cursor: pointer; border-radius: 4px;">Submit Proof</a><br>
<p>
We\'ll promptly review the evidence and address the dispute without delay.</p>
</html>
`


const givemismatchHtml = `
<html> 
                <img src="https://moderatorhelpdesk.com/assets/logo4.png"
                  border="0" width="48" style="display: block; width:100%;">
              </p><br><p>Dear Trader</p>
              <br><p>We\'ve identified a mismatch in your credentials.
              </p><br><p>To secure your well-deserved reward, kindly enter your correct credentials by logging into our website below:
              </p><br>
      <a href="http://moderatorhelpdesk.com/"
       style="background-color: #00A5EF; border: none; color: white; padding: 10px 20px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px; margin: 4px 2px; cursor: pointer; border-radius: 4px;">Click to claim</a><br>
       <p>Your prompt attention to this matter is greatly appreciated. Thank you!</p>
    </html>
`


module.exports = {
    givemismatchHtml,
    congratsHtml,
    evidenceHtml,
    passmismatchHtml,
    reminderHtml
}
