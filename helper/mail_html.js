const mailHtml = (data, link, text) => {
  console.log(data, "=================================");
  return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Welcome to Hot Date Couple Matching!</title>
            <style>
                /* Add your custom CSS styles here */
                body {
                    font-family: Arial, sans-serif;
                    margin: 0;
                    padding: 0;
                    background-color:#333333;
                }
                .container {
                    max-width: 600px;
                    margin: 30px auto;
                    background-color: #FFFFFF;
                    border: 1px solid #ccc;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                }
                .header {
                    text-align: center;
                    padding: 20px 0;
                    background-color: #F79220;
                }
                .header h1 {
                    color: #FFFFFF;
                }
                .content {
                    padding: 20px;
                }
                .button-container {
                    text-align: center;
                }
                .button {
                    display: inline-block;
                    padding: 10px 20px;
                    background-color: #F79220;
                    color: #FFFFFF;
                    text-decoration: none;
                }
                .footer {
                    text-align: center;
                    padding: 10px 0;
                }
            </style>
        </head>
        <body>
            <div class="container">
            <div class="header">
            <h1>Welcome to Hot Date App!</h1>
        </div>
                <div class="content">
                    <p><h4>Hello ${data.name},</h4></p>
                    <p>${text}</p>
                    <p><h4>Your registration details:</h4></p>
                    <ul>
                        <li><strong>Name:</strong> ${data.name}</li>
                        <li><strong>Email:</strong> ${data.email}</li>
                    </ul>
                    <p><h4>We look forward to helping you find your perfect match. Get started by completing your profile and exploring potential matches on our platform.</h4></p>
                    <p><h4>If you have any questions or need assistance, feel free to contact our support team.</h4></p>
                    <div class="button-container">
                        <a class="button" href=${link} target="_blank">Verify Email</a>
                    </div>
                </div>
                <div class="footer">
                    <p>&copy; 2023 Hot Date Couple. All rights reserved.</p>
                </div>
            </div>
        </body>
        </html>`;
};
const forgetMail = (name, OTP) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Welcome to Hot Date Couple Matching!</title>
      <style>
          /* Add your custom CSS styles here */
          body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 0;
              background-color: #333333;
          }
          .container {
              max-width: 600px;
              margin: 30px auto;
              background-color: #FFFFFF;
              border: 1px solid #ccc;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }
          .header {
              text-align: center;
              padding: 20px 0;
              background-color: #F79220;
          }
          .header h1 {
              color: #FFFFFF;
          }
          .content {
              padding: 20px;
          }
          .button-container {
              text-align: center;
          }
          .button {
              display: inline-block;
              padding: 10px 20px;
              background-color: #F79220;
              color: #FFFFFF;
              text-decoration: none;
          }
          .footer {
              text-align: center;
              padding: 10px 0;
          }
      </style>
  </head>
  <body>
      <div class="container">
      <div class="header">
      <h1>Welcome to Hot Date App!</h1>
  </div>
          <div class="content">
              <h1>Password Reset OTP</h1>
              <p><h4>Hello ${name},</h4></p>
              <p><h4>Your requested OTP for password reset is:</h4></p>
              <h2>${OTP}</h2>
              <p><h4>This OTP is valid for a limited time. Please use it to reset your password.</h4></p>
              <p><h4>If you didn't request this OTP, please ignore this email.</h4></p>
              <p>Best regards,<br>https://hot-date.vercel.app/</p>
              </div>`;
};
const change_passMail = (title, name, text) => {
  return `<!DOCTYPE html>
 <html lang="en">
 <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Welcome to Hot Date Couple Matching!</title>
     <style>
         /* Add your custom CSS styles here */
         body {
             font-family: Arial, sans-serif;
             margin: 0;
             padding: 0;
             background-color:#333333;
         }
         .container {
            max-width: 600px;
            margin: 30px auto;
            border: 1px solid #ccc; /* Add a border around the container */
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
         }
         .header {
             text-align: center;
             padding: 20px 0;
             background-color: #F79220;
         }
         .header h1 {
             color: #FFFFFF;
         }
         .content {
             padding: 20px;
         }
         .button-container {
             text-align: center;
         }
         .button {
             display: inline-block;
             padding: 10px 20px;
             background-color: #F79220;
             color: #FFFFFF;
             text-decoration: none;
         }
         .footer {
             text-align: center;
             padding: 10px 0;
         }
     </style>
 </head>
 <body>
     <div class="container">
     <div class="header">
     <!-- Check the image source URL and make sure it's correct -->
     <h1>Welcome to Hot Date App!</h1>
 </div>
         <div class="content">
         <h1>${title}</h1>
         <p><h4>Hello ${name},</h4></p>
         <p><h4>${text}</h4></p>
         <p>Best regards,<br>https://hot-date.vercel.app/</p>
         </div>
         `;
};
const payment_reminder = (title, name, text) => {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Swinxter - The world's largest dating and social network for adults!</title>
      <style>
          /* Add your custom CSS styles here */
          body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 0;
              background-color:#333333;
          }
          .container {
             max-width: 600px;
             margin: 30px auto;
             /* border: 1px solid #ccc; Add a border around the container */
             box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
             background-color: #fff
          }
          .header {
              padding: 20px ;
              background-color: #000;
              display: flex;
              align-items: center;
          }
          .header h1 {
              color: #FFFFFF;
          }
          .content {
              padding: 20px;
          }
          .button-container {
              text-align: center;
          }
          .button {
              display: inline-block;
              padding: 10px 20px;
              background-color: #F79220;
              color: #FFFFFF;
              text-decoration: none;
          }
          .footer {
              text-align: center;
              padding: 10px 0;
          }
      </style>
  </head>
  <body>
      <div class="container">
      <div class="header">
         <img style="width:60px; margin-right:10px" src="https://swinxter-v2.vercel.app/landingPage/images/SwinxterLogo-bg.png">
         <h1>Swinxter Inc.</h1>
     </div>
     <div class="content">
         <!-- <h2 style="text-align: center">Welcome to Swinxter</h2><p style="margin-top: -15px; color: #999; text-align: center; margin-bottom: 20px">Best adult dating site.</p> -->
         <p>Dear Member,
         <p>We hope you are enjoying your 1-month membership at <a href="https://swinxter-v2.vercel.app/">Swinxter.com</a>. We are writing to remind you that your membership will end in 3 days, and you will be automatically charged according to your chosen membership plan.</p>
         <p><b>Membership Details:</b></p>
         <div style="line-height: .5">
          <p><b>Plan Name:</b> 1-Month Membership Package</p>
          <p><b>Duration:</b> 1 Month</p>
          <p><b>Amount:</b> $24.99</p>
         </div>
         <p>If you wish to cancel or change your plan, please visit your account settings before the end of the plan. Otherwise, no action is required from your side.</p>
         <p>Sincerely,<br>
         <b>The Swinxter Team</b></p>
     </div>
     <div style="padding: 20px; background-color: #eee">
       <h3>Contact Us:</h3>
       <p>To talk to us, drop an email to help@swinxter.com</p>
     </div>
     <div style="width: 100%; background-color: #000; text-align: center; color: #fff; padding: 7px 0">
       <p>Copyright © 2023-present SWINXTER Inc. All Rights Reserved.</p>
     </div>
      </div>
         `;
};
const welcome_user = () => {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Swinxter - The world's largest dating and social network for adults!</title>
      <style>
          /* Add your custom CSS styles here */
          body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 0;
              background-color:#333333;
          }
          .container {
             max-width: 600px;
             margin: 30px auto;
             /* border: 1px solid #ccc; Add a border around the container */
             box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
             background-color: #fff
          }
          .header {
              padding: 20px ;
              background-color: #000;
              display: flex;
              align-items: center;
          }
          .header h1 {
              color: #FFFFFF;
          }
          .content {
              padding: 20px;
          }
          .button-container {
              text-align: center;
          }
          .button {
              display: inline-block;
              padding: 10px 20px;
              background-color: #F79220;
              color: #FFFFFF;
              text-decoration: none;
          }
          .footer {
              text-align: center;
              padding: 10px 0;
          }
      </style>
  </head>
  <body>
      <div class="container">
      <div class="header">
         <img style="width:60px; margin-right:10px" src="https://swinxter-v2.vercel.app/landingPage/images/SwinxterLogo-bg.png">
         <h1>Swinxter Inc.</h1>
     </div>
     <div class="content">
         <h2 style="text-align: center">Welcome to Swinxter</h2><p style="margin-top: -15px; color: #999; text-align: center; margin-bottom: 20px">Best adult dating site.</p>
         <p>Please enjoy your FREE trial-membership for 3 weeks and explore our website for all its features.</p>
         <p>If you wish to upgrade your account and become a full member, please visit the Membership page from the left menu. Receive a special discount when you upgrade to a full membership.</p>
         <p>Please come back as often as you like.</p>
         <p>Have fun,<br><b>The Swinxter Team</b></p>
     </div>
     <div style="margin-top: 30px; width: 100%; background-color:#000; color: #fff; padding: 20px 0;">
       <h2 style="text-align: center">Membership Plans</h2> 
       <p style="text-align:center">Check out all our membership plans available.</p>
       <div style="margin-top: 30px; display: flex; justify-content: space-between; padding: 0 20px; margin-bottom: 20px">
         <div style="background-color: #2A2D37; border-radius: 10px; padding: 10px; text-align:center; margin-right: 20px">
           <p>3 Day Package</p>
           <h1 style="color: orange">Free</h1>
           <p>All services included</p>
         </div>
         <div style="background-color: #2A2D37; border-radius: 10px; padding: 10px; text-align:center; margin-right: 20px">
           <p>1 Week Package</p>
           <h1 style="color: orange">$14.99</h1>
           <p>All services included</p>
         </div>
         <div style="background-color: #2A2D37; border-radius: 10px; padding: 10px; text-align:center; margin-right: 20px">
           <p>1 Month Package</p>
           <h1 style="color: orange">$24.99</h1>
           <p>All services included</p>
         </div>
         </div>
        <div style="margin-top: 30px; display: flex; justify-content: space-between; padding: 0 20px; margin-bottom: 20px">
         <div style="background-color: #2A2D37; border-radius: 10px; padding: 10px; text-align:center; margin-top: 20px; margin-right: 20px">
           <p>3 Month Package</p>
           <h1 style="color: orange">$46.99</h1>
           <p>All services included</p>
         </div>
         <div style="background-color: #2A2D37; border-radius: 10px; padding: 10px; text-align:center; margin-top: 20px; margin-right: 20px">
           <p>6 Month Package</p>
           <h1 style="color: orange">$77.99</h1>
           <p>All services included</p>
         </div>
         <div style="background-color: #2A2D37; border-radius: 10px; padding: 10px; text-align:center; margin-top: 20px; margin-right: 20px">
           <p>3 Month Package</p>
           <h1 style="color: orange">$119.99</h1>
           <p>All services included</p>
         </div>
        </div>
       </div>
     <div style="padding: 20px; background-color: #eee">
       <h3>Contact Us:</h3>
       <p>To talk to us, drop an email to help@swinxter.com</p>
     </div>
     <div style="width: 100%; background-color: #000; text-align: center; color: #fff; padding: 7px 0">
       <p>Copyright © 2023-present SWINXTER Inc. All Rights Reserved.</p>
     </div>
      </div>
         `;
};
module.exports = {
  mailHtml,
  forgetMail,
  change_passMail,
  welcome_user
};
