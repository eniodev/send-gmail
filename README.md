# Send Gmail

**Send Gmail** is a single-endpoint API that allows you to send emails using your personal Gmail account from anywhere via a dedicated endpoint.

## How to Use

Send Gmail combines **Nodemailer** and **Gmail** into a simple interface served through an endpoint. All you need to do is provide the email body, and *voilà*, **email sent**!

### 1. Get an App Password

To authorize the app to send emails on your behalf, you'll need to generate an **App Password** (this is only available after enabling 2FA on your Google account).  
👉 [Get App Password](https://myaccount.google.com/u/2/apppasswords)

### 2. Clone the Project

Clone the repository so you can host it wherever you'd like. Feel free to modify it to fit your needs.

### 3. Host It Anywhere

Deploy the app to your preferred environment.  
⚠️ Don't forget to set the required environment variables on your server.

### 4. Send Emails

Once the app is deployed, you can send emails by making a `POST` request to: 
`<YOUR-HOSTED-APP-URL>/api/mail/new`


Your request should include a JSON body with the following format:

```json
{
  "to": "<recipient email>",
  "subject": "<email subject>",
  "text": "<plain text message>",
  "html": "<HTML content>"
}
```

*📝 The html field is useful when you want to use templates or rich content in your emails.*

# Bye?
I created this because I was bored and found it hard to be useful in the real world. But if, by any chance, I'm wrong and it turns out to be useful for you, feel free to open an issue so I can improve it. PRs (Pull Requests) are also welcome! :=)


