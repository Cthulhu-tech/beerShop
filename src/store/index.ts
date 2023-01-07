import { countModuleOperation } from './modules/count/countOperation';
import { IStore } from './types/StoreType';
import { createStore } from 'vuex';

export const store = createStore<IStore>({
  modules: {
    countModuleOperation
  }
})
