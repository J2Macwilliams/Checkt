import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store} from './store'

import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';

import {
  applyPolyfills,
  defineCustomElements,
} from '@aws-amplify/ui-components/loader';

import './style/tailwind.css'

Amplify.configure(aws_exports);
applyPolyfills().then(() => {
  defineCustomElements(window);
});

createApp(App).use(router).use(store).mount('#app')
