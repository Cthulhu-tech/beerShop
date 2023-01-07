import { IStore } from '../../types/StoreType';
import { CountType } from './type';
import { Module } from "vuex";

export const countModuleOperation: Module<CountType, IStore> = {
    state: {
        countState: 0
    },
    mutations: {
        countMutationIncrement(state) {
            state.countState++
        },
        countMutationDicrement(state) {
            state.countState--
        }
    },
}
