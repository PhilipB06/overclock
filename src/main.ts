import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { defineCustomElements } from '@ionic/core/loader';
import { setAssetPath } from '@ionic/core/components';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { isDevMode } from '@angular/core';
import { provideServiceWorker } from '@angular/service-worker';

import { addIcons } from 'ionicons';
import { settingsOutline, trendingUpOutline, trendingDownOutline, removeOutline, timeOutline, home, list, barChart, homeOutline, listOutline, statsChartOutline } from 'ionicons/icons';

import { register } from 'swiper/element/bundle';
register();
defineCustomElements(window);
setAssetPath(document.baseURI || '/');

addIcons({
  'home-outline': homeOutline,
  'list-outline': listOutline,
  'stats-chart-outline': statsChartOutline,
  'settings-outline': settingsOutline,

  // Dashboard icons
  'trending-up-outline': trendingUpOutline,
  'trending-down-outline': trendingDownOutline,
  'remove-outline': removeOutline,

  'time-outline': timeOutline,
});

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)), provideServiceWorker('ngsw-worker.js', {
            enabled: !isDevMode(),
            registrationStrategy: 'registerWhenStable:30000'
          }),
  ],
}).catch(err => console.error(err));