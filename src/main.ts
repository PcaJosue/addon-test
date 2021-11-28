import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import Amplify from '@aws-amplify/core';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

Amplify.configure({
  'aws_appsync_graphqlEndpoint': 'https://zswrpfpfkrfwbgrsi23rtwnf2a.appsync-api.ap-southeast-2.amazonaws.com/graphql',
  'aws_appsync_region': 'ap-southeast-2',
  'aws_appsync_authenticationType': 'API_KEY',
  'aws_appsync_apiKey': 'da2-uootzhfrufhmjhuz4bd6ealele',
});
if (environment.production) {
  enableProdMode();
}
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
