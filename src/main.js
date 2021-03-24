import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Card from 'primevue/card';
import RadioButton from 'primevue/radiobutton';
import InputSwitch from 'primevue/inputswitch';
import InputMask from 'primevue/inputmask';

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css'

const app = createApp(App);

app.use(PrimeVue);
app.component("Button", Button);
app.component("Card", Card);
app.component("InputText", InputText);
app.component("InputMask", InputMask);
app.component("InputSwitch", InputSwitch);
app.component("RadioButton", RadioButton);

app.mount('#app');
