import CocktailView from '../views/CocktailView.vue'
import WhiskeyView from '../views/WhiskeyView.vue'
import CognacView from '../views/CognacView.vue'
import SnackView from '../views/SnackView.vue'
import WineView from '../views/WineView.vue'
import HomeView from '../views/HomeView.vue'
import BeerView from '../views/BeerView.vue'

export const routerArray = [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/beer',
      name: 'beer',
      component: BeerView
    },
    {
      path: '/cocktail',
      name: 'cocktail',
      component: CocktailView
    },
    {
      path: '/cognac',
      name: 'cognac',
      component: CognacView
    },
    {
      path: '/snack',
      name: 'snack',
      component: SnackView
    },
    {
      path: '/whiskey',
      name: 'whiskey',
      component: WhiskeyView
    },
    {
      path: '/wine',
      name: 'wine',
      component: WineView
    },
]