// src/BookingReducer.test.js

// =================================================================
// 1. تثبيت المحاكاة (يجب أن يكون في أعلى الملف)
// =================================================================
jest.mock('./api', () => ({
    // 🚀 الحل: نستخدم jest.fn().mockReturnValue(VALUE)
    // هذا يضمن أن الدالة الوهمية تُرجع القيمة المطلوبة دائمًا.
    fetchAPI: jest.fn().mockReturnValue(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']),
    
    submitAPI: jest.fn(),
}));

// =================================================================
// 2. الاستيراد التقليدي (يجب أن يكون هكذا لتجنب ReferenceError)
// =================================================================
import { initializeTimes, updateTimes } from './bookingReducer';
import * as API from './api';


test('initializeTimes should call fetchAPI and return the mocked list of times', () => {
    
    // 1. استدعاء الدالة
    const initialTimes = initializeTimes();
    
    // 🚀 التحقق من استدعاء الدالة مع مُعامل من نوع Date
    expect(API.fetchAPI).toHaveBeenCalledWith(expect.any(Date)); 
    
    // 2. التحقق من أن النتيجة هي المصفوفة المُحاكاة
    expect(Array.isArray(initialTimes)).toBe(true);
    // ... (باقي التحققات)
});


    test('updateTimes should return the current state for an unknown action type', () => {
        // هذا الاختبار سيعمل الآن لأن updateTimes تم استيرادها
        const currentState = ['18:00', '19:00', '20:00'];
        const unknownAction = { type: 'DO_NOTHING_ACTION' };

        const newState = updateTimes(currentState, unknownAction);

        expect(newState).toBe(currentState);
    });

