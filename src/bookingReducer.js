import { fetchAPI } from './api';

export const initializeTimes = () => {
    // 🛑 يجب أن تُغلق بـ } قبل البدء بـ export التالي
    return fetchAPI(new Date());
};

    export const updateTimes = (state, action) => {
        switch (action.type) {
            case 'UPDATE_TIMES':
                {
                    const selectedDateObject = new Date(action.payload);
                    // 🚀 استخدام fetchAPI مباشرة
                    return fetchAPI(selectedDateObject);
                }


            default:
                return state;
        }
    };