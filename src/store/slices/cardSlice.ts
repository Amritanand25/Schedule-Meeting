import { createSlice } from '@reduxjs/toolkit';
import { CardDataModel } from '../../models/CardDataModel';
import { cardData } from '../../helper/constant';
import { RootState } from '../store';

interface Props {
    selectTime: CardDataModel[]
}

const initialState: Props = {
    selectTime: cardData
}

const cardSlice = createSlice({
    name: 'select time',
    initialState: initialState,
    reducers: {
        setActiveTime: (state, action) => {
            state.selectTime = state.selectTime.map(item => item.id === action.payload ? { ...item, isActive: true } : { ...item, isActive: false })
        },
        reSetTime : (state) => {
            state.selectTime = cardData
        }
    }
});
export const { setActiveTime, reSetTime } = cardSlice.actions;
export const selectTime = (state: RootState) => state.selectTime.selectTime;
export default cardSlice.reducer;