import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import  AppModule from './app/app.module'; 

//เป็นการบอกให้รู้ว่าเราจะเริ่มจากmodule
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch((err: any) => console.error(err));
