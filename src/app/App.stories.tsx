import React from 'react';
import App from './App';
import {
  ReduxStoreProviderDecorator
} from '../store/ReduxStoreProviderDecorator';

export default {
  title: 'TODOLISTS/App',
  component: App,
  decorators: [ReduxStoreProviderDecorator]
};

export const AppStory = (props: any) =>
    <App demo={true} />




