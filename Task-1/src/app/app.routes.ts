import { Routes } from '@angular/router';
import { AccountSettings } from './components/account-settings/account-settings';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';
import { Container } from './components/account-settings/container/container';
import { ChatBot } from './components/chat-bot/chat-bot';

export const routes: Routes = [
  {path: 'settings', component: Container },
  {path: '', component: Home },
  {path:'about',component:About},
  {path:'contact',component:Contact},
    {
    path: 'chat',
    component: ChatBot,
    outlet: 'chat'
  }
];
