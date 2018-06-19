import * as types from './ActionTypes'

export const increment = () => ({
    type: types.INCREMENT
})

export const decrement = () => ({
    type: types.DECREMENT
})

export const setColor = (color:any) => ({
    type: types.SET_COLOR,
    color
})