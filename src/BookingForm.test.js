import { render, screen } from '@testing-library/react';
import BookingForm from './components/BookingForm';

// إعداد دالة وهمية لـ dispatch
const mockDispatch = jest.fn(); 
// قائمة وهمية للأوقات المتاحة
const mockAvailableTimes = ['17:00', '18:00']; 

// الاختبار
test('Renders the Choose date label in BookingForm', () => {
    
    // 1. تصيير المكون وتمرير الخصائص الوهمية
    render(
        <BookingForm 
            availableTimes={mockAvailableTimes} 
            dispatch={mockDispatch} 
        />
    );
    
    // 2. البحث عن تسمية (label) "Choose date"
    // نستخدم queryByText لأننا نريد التحقق مما إذا كان العنصر موجودًا أم لا (أكثر أمانًا)
    const dateLabel = screen.getByText("Choose date");
    
    // 3. التحقق من وجود العنصر في DOM
    expect(dateLabel).toBeInTheDocument();
});