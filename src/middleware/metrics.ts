
import { Context, Next } from "../deps.ts";
import Bot from '../modules/ApplicationBot/Bot.ts'
import { BOT_VISITOR_TEMPLATE } from "../utils/hub.ts";


const metrics = async ({request}: Context, next: Next) => {
    const isProduction = true;
    isProduction && Bot.sendMessage(BOT_VISITOR_TEMPLATE(request.headers.get("X-Real-IP"), request.headers.get('user-agent') ?? 'undefined', request.url))
    await next()
}

export default metrics;