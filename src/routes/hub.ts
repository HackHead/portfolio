import { Router, Context, Next } from "../deps.ts";
import AppControllers from '../controllers/hub.ts'
import metrics from "../middleware/metrics.ts";

const router = new Router();

router
    .get("/", metrics,  (ctx) => AppControllers.home(ctx))
    .get("/contacts", metrics,  (ctx) => AppControllers.contacts(ctx))
    .post("/contacts",  (ctx) => AppControllers.contactForm(ctx))
    .get("/about",metrics,  (ctx) => AppControllers.about(ctx))
    .get("/portfolio",metrics,  (ctx) => AppControllers.portfolio(ctx))
    .get("/service",metrics,  (ctx) => AppControllers.service(ctx))
    .get("/projects/screeningpartners",metrics,  (ctx) => AppControllers.screeningpartners(ctx))
    .get("/projects/codertroop",metrics,  (ctx) => AppControllers.codertroop(ctx))
    .get("/projects/domznaniy",metrics,  (ctx) => AppControllers.domznaniy(ctx))
    .get("/projects/cryptohamster",metrics,  (ctx) => AppControllers.cryptohamster(ctx))
    .get("/projects/uarmor",metrics,  (ctx) => AppControllers.uarmor(ctx))
    .get("/projects/al-auto",metrics,  (ctx) => AppControllers.alAuto(ctx))
    .get('/assets/:path+',  (ctx) => AppControllers.serveStatic(ctx));
export default router;