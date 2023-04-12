import { createSlice } from '@reduxjs/toolkit';
import { Availability } from '../../models/AvailabilityModel';
import { filterAvailability } from '../../helper/helper';

interface Props {
    selectedDate: string,
    availability: Availability[] | undefined
}

const initialState: Props = {
    selectedDate: "",
    availability: []
}

const calenderSlice = createSlice({
    name: 'calender',
    initialState: initialState,
    reducers: {
        updateSelectedDate: (state, action) => {

            state.selectedDate = action.payload.selectedDate;
        },
        updateAvailability: (state, action) => {
            const { selectedDate, selectedDuration, appointmentList } = action.payload;
            state.selectedDate = selectedDate;
            state.availability = filterAvailability(selectedDate, selectedDuration, appointmentList);
        },
        changeStatus: (state, action) => {
            state.availability = state.availability?.map(item => (item.id === action.payload.id && item.time === action.payload.time) ? { ...item, isSelected: true } : { ...item, isSelected: false })
        }
    }
});
export const { updateSelectedDate, updateAvailability, changeStatus } = calenderSlice.actions;
export default calenderSlice.reducer;