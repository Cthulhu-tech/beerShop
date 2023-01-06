export const countMutationIncrement = (state: {countState: number}) => {
    state.countState++
}

export const countMutationDicrement = (state: {countState: number}) => {
    state.countState--
}
