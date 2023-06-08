// @ts-nocheck
import { Context, send, path } from "../deps.ts";
import Bot from '../modules/ApplicationBot/Bot.ts'
import { BOT_EMAIL_TEMPLATE } from "../utils/hub.ts";

export default class Controllers {
    public static async home(ctx: Context){
        return ctx.render('home.ejs')
    }
    public static async contacts(ctx: Context){
        return ctx.render('contacts.ejs')
    }
    public static async about(ctx: Context){
        return ctx.render('about.ejs')
    }
    public static async portfolio(ctx: Context){
        return ctx.render('portfolio.ejs')
    }
    public static async service(ctx: Context){
        return ctx.render('service.ejs')
    }
    public static async screeningpartners(ctx: Context){
        return ctx.render('screeningpartners.ejs')
    }
    public static async cryptohamster(ctx: Context){
        return ctx.render('cryptohamster.ejs')
    }
    
    public static async codertroop(ctx: Context){
        return ctx.render('codertroop.ejs')
    }
    public static async domznaniy(ctx: Context){
        return ctx.render('domznaniy.ejs')
    }
    public static async alAuto(ctx: Context){
        return ctx.render('al-auto.ejs')
    }
    public static async uarmor(ctx: Context){
        return ctx.render('uarmor.ejs')
    }
    
    public static async contactForm(ctx: Context){
        try {
            if(!ctx.request.hasBody) {return true;}
          const val = await ctx.request.body().value;
          const [name, email, message] = [val.get('john'),val.get('email'),val.get('message')]
          return await Bot.sendMessage(BOT_EMAIL_TEMPLATE(name, email, message));
        } catch (error) {
            throw new Error('Message error')
        }
    }
    public static async serveStatic(ctx: Context) {
        return await send(ctx, ctx.request.url.pathname, {
            root: path.join(Deno.cwd(), '')
        });
    }
}