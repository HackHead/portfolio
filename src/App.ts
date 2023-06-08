import { Application, viewEngine, oakAdapter, ejsEngine} from "./deps.ts";
import AppRoutes from './routes/hub.ts';

class App {
  private APP: Application;
  private PORT: number;

  constructor() {
    this.PORT = 9999;
    this.APP = new Application();
    this.boot();
  }

  private setupRoutes(): void {
    this.APP.use(AppRoutes.routes());
    this.APP.use(AppRoutes.allowedMethods());
  }

  private setupTemplateEngine(): void {
    this.APP.use(
        viewEngine(oakAdapter, ejsEngine, {
          viewRoot: `${Deno.cwd()}/templates`,
        })
      );
  }
  
  private async boot(): Promise<void> {
    this.setupTemplateEngine();
    this.setupRoutes();
    
    try {
      this.APP.listen({
        port: this.PORT,
      });
      console.log(`Server is running on http://localhost:${this.PORT}`);
    } catch (error) {
      console.error("An error occurred while setting up the server...");
    }
  }
}

new App();
