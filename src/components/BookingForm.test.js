import { render, screen , fireEvent , waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BookingForm from './BookingForm';
import React from 'react';


const mockDispatch = jest.fn();
const mockAvailableTimes = ['17:00', '18:00', '19:00', '20:00'];

const mockDispatch1 = jest.fn();
const mockSubmitAPI = jest.fn();

const mockAvailableTimes1 = ['17:00', '18:00', '20:00'];

// دالة Render مساعدة لتجنب تكرار الكود
const renderBookingForm = () => {
    return render(
        <BookingForm 
            availableTimes={mockAvailableTimes} 
            dispatch={mockDispatch} 
        />
    );
};

const setupForm = () => {
    render(
        <BookingForm 
            availableTimes={mockAvailableTimes1} 
            dispatch={mockDispatch1} 
            
        />
    );
    const nameInput = screen.getByLabelText(/Enter Your Name/i);
    const emailInput = screen.getByLabelText(/Enter Your E-Mail/i);
    const dateInput = screen.getByLabelText(/Choose date/i);
    const guestsInput = screen.getByLabelText(/Number of guests/i);
    const submitButton = screen.getByRole('button', { name: /On Click/i });

    return { nameInput, emailInput, dateInput, guestsInput, submitButton };
};

const fillAllValid = async (elements) => {
    await userEvent.type(elements.nameInput, 'Sara Ali');
    await userEvent.type(elements.emailInput, 'sara@test.com');
    
   
    fireEvent.change(elements.dateInput, { target: { value: '2025-12-25' } });
    
    
    fireEvent.change(elements.guestsInput, { target: { value: '5' } });
};

describe('BookingForm HTML5 Validation Attributes', () => {

    test('1. Name input should have required and minLength attributes', () => {
        renderBookingForm();
        
        // البحث عن حقل الاسم باستخدام التسمية (label)
        const nameInput = screen.getByLabelText('Enter Your Name');
        
        // التحقق من السمات
        expect(nameInput).toHaveAttribute('required');
        expect(nameInput).toHaveAttribute('minlength', '2'); 
    });

// ---------------------------------------------------------------------

    test('2. Email input should have type="email" and required attribute', () => {
        renderBookingForm();
        
        // البحث عن حقل البريد الإلكتروني باستخدام التسمية (label)
        const emailInput = screen.getByLabelText('Enter Your E-Mail');
        
        // التحقق من السمات
        expect(emailInput).toHaveAttribute('type', 'email');
        expect(emailInput).toHaveAttribute('required');
    });

// ---------------------------------------------------------------------

    test('3. Date input should have type="date" and required attribute', () => {
        renderBookingForm();
        
        // البحث عن حقل التاريخ باستخدام التسمية (label)
        const dateInput = screen.getByLabelText('Choose date');
        
        // التحقق من السمات
        expect(dateInput).toHaveAttribute('type', 'date');
        expect(dateInput).toHaveAttribute('required');
    });

// ---------------------------------------------------------------------

    test('4. Time select field should have required attribute', () => {
        renderBookingForm();
        
        // البحث عن حقل اختيار الوقت باستخدام التسمية (label)
        const timeSelect = screen.getByLabelText('Choose time');
        
        // التحقق من السمات
        expect(timeSelect).toHaveAttribute('required');
    });

// ---------------------------------------------------------------------

    test('5. Guests input should have required, min, and max attributes', () => {
        renderBookingForm();
        
        // البحث عن حقل عدد الضيوف باستخدام التسمية (label)
        const guestsInput = screen.getByLabelText('Number of guests');
        
        // التحقق من السمات
        expect(guestsInput).toHaveAttribute('required');
        expect(guestsInput).toHaveAttribute('min', '1');
        expect(guestsInput).toHaveAttribute('max', '10');
    });

// ---------------------------------------------------------------------

    test('6. Occasion select field should exist', () => {
        renderBookingForm();
        
        // التحقق من وجود حقل المناسبة (Occasion)
        const occasionSelect = screen.getByLabelText('Occasion');
        
        // التحقق من وجوده (قد لا يكون مطلوبًا *Required* في كل الحالات، لذا نكتفي بوجوده)
        expect(occasionSelect).toBeInTheDocument();
    });
    test('1. Submit button should be disabled initially', () => {
        const { submitButton } = setupForm();
        
        // التحقق من أن الزر معطل عند التحميل (لأن الحقول مطلوبة وفارغة)
        expect(submitButton).toBeDisabled();
    });

    test('2. Submit button should be ENABLED when all fields are valid', async () => {
        const { nameInput, emailInput, dateInput, guestsInput, submitButton } = setupForm();
        
        await fillAllValid({ nameInput, emailInput, dateInput, guestsInput });
        
        // التحقق من أن الزر أصبح مُفعّلاً بعد ملء جميع الحقول بشكل صحيح
        expect(submitButton).toBeEnabled();
    });
    test('3. Submit button should be DISABLED if Name is missing (Required check)', async () => {
        const { emailInput, dateInput, guestsInput, submitButton } = setupForm();
        
        // ملء كل الحقول ماعدا الاسم
        await userEvent.type(emailInput, 'valid@test.com');
        fireEvent.change(dateInput, { target: { value: '2025-12-25' } });
        fireEvent.change(guestsInput, { target: { value: '5' } });
        
        // يجب أن يظل الزر مُعطّلاً
        expect(submitButton).toBeDisabled();
    });

    test('4. Submit button should be DISABLED if Name is too short (minLength check)', async () => {
    const { nameInput, emailInput, dateInput, guestsInput, submitButton } = setupForm();
    
    // 1. ملء جميع الحقول بشكل صحيح لتفعيل الزر
    await fillAllValid({ nameInput, emailInput, dateInput, guestsInput });
    expect(submitButton).toBeEnabled(); // تأكيد أنه مُفعَّل

    // 2. إدخال اسم غير صالح (حرف واحد)
    await userEvent.clear(nameInput);           // 🛑 تأكد من المسح الكامل
    await userEvent.type(nameInput, 'A');       // إدخال قيمة قصيرة (طولها 1)
     
    nameInput.blur();
    // 3. التحقق من التعطيل
    await waitFor(() => {
        expect(submitButton).toBeDisabled();
    }, { timeout: 1500 });; // يجب أن يصبح مُعطّلاً
});

    test('5. Submit button should be DISABLED if Email is invalid (Format check)', async () => {
        const { nameInput, emailInput, dateInput, guestsInput, submitButton } = setupForm();
        
        // ملء جميع الحقول بشكل صحيح
        await fillAllValid({ nameInput, emailInput, dateInput, guestsInput });
        
        // إدخال بريد إلكتروني غير صالح (لا يحتوي على نقطة)
        await userEvent.clear(emailInput);
        await userEvent.type(emailInput, 'invalid@email'); 

        // يجب أن يعود الزر مُعطّلاً
        expect(submitButton).toBeDisabled();
    });

    test('6. Submit button should be DISABLED if Guests is too low (min=1 check)', async () => {
        const { nameInput, emailInput, dateInput, guestsInput, submitButton } = setupForm();
        
        // ملء جميع الحقول بشكل صحيح
        await fillAllValid({ nameInput, emailInput, dateInput, guestsInput });
        
        // إدخال عدد ضيوف غير صالح (0)
        fireEvent.change(guestsInput, { target: { value: '0' } });

        // يجب أن يعود الزر مُعطّلاً
        expect(submitButton).toBeDisabled();
    });
    
    test('7. Submit button should be DISABLED if Guests is too high (max=10 check)', async () => {
        const { nameInput, emailInput, dateInput, guestsInput, submitButton } = setupForm();
        
        // ملء جميع الحقول بشكل صحيح
        await fillAllValid({ nameInput, emailInput, dateInput, guestsInput });
        
        // إدخال عدد ضيوف غير صالح (11)
        fireEvent.change(guestsInput, { target: { value: '11' } });

        // يجب أن يعود الزر مُعطّلاً
        expect(submitButton).toBeDisabled();
    });
});
