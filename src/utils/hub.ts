import { name } from "https://deno.land/x/view_engine@v10.5.1/lib/engines/ejs/lib/ejs.js";

export const BOT_EMAIL_TEMPLATE = (name: string, email: string, message: string) => {
    return (`
📬 New Message Received! 

👤 Name: ${name}
📧 Email: ${email}
📝 Message: ${message}
        
🚀 Take action and respond promptly. 💪`    
    )
}

export const BOT_VISITOR_TEMPLATE = (ip: string, userAgent: string, url: URL) => {
    return (`
🎉 New visitor alert! 🎉
    
🌐 IP Address: ${ip}
🌎 Browser:  ${userAgent}
🔍 Page Visited: ${url}`)
}