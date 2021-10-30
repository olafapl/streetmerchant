import {Store} from './store';

export const CdonNO: Store = {
  currency: 'kr.',
  labels: {
    inStock: {
      container: '#buy-area > #buy-btn > #buy-btn-text',
      text: ['Legg i handlekurven'],
    },
    outOfStock: {
      container: '#buy-area > #monitorable-btn',
      text: ['Overvåke'],
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://cdon.no/elektronikk/xbox-series-x-p47900241',
    },
    {
      brand: 'microsoft',
      model: 'xbox series x',
      series: 'xboxsx',
      url: 'https://cdon.no/elektronikk/xbox-series-x-p47900241',
    },
  ],
  name: 'cdon-no',
};
