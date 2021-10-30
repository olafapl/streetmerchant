import {Store} from './store';

export const KjellCompanyNO: Store = {
  currency: 'kr.',
  labels: {
    inStock: {
      container: 'button#addToCart > span > div',
      text: ['Legg i handlekurv'],
    },
    outOfStock: {
      container:
        'div > div > div > div > section > div > div > div > div > div > div > div:nth-of-type(2)',
      text: ['Ikke på lager'],
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.kjell.com/no/produkter/videospill-og-gaming/xbox-series-xs/xbox-series-x-1-tb-spillkonsoll-p62914',
    },
    {
      brand: 'microsoft',
      model: 'xbox series x',
      series: 'xboxsx',
      url: 'https://www.kjell.com/no/produkter/videospill-og-gaming/xbox-series-xs/xbox-series-x-1-tb-spillkonsoll-p62914',
    },
  ],
  name: 'kjellcompany-no',
};
