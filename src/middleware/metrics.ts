
import { Context, Next } from "../deps.ts";
import Bot from '../modules/ApplicationBot/Bot.ts'
import { BOT_VISITOR_TEMPLATE } from "../utils/hub.ts";


const metrics = async ({request}: Context, next: Next) => {
    const isProduction = true;
    const params =  request.url.searchParams

    const ref = params.get('ref')

    
    
    isProduction && Bot.sendMessage(BOT_VISITOR_TEMPLATE(request.headers.get("X-Real-IP"), request.headers.get('user-agent') ?? 'undefined', request.url, ref ? ref : 'direct'))
    await next()
}

export default metrics;