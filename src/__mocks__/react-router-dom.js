// هذا الملف سيعمل كبديل لمكتبة react-router-dom في بيئة Jest

// إنشاء دالة وهمية لـ useNavigate
export const useNavigate = jest.fn(() => jest.fn());

// يمكنك محاكاة أي شيء آخر تحتاجه (مثل useLocation)
export const useLocation = jest.fn(() => ({ pathname: '/' }));

// يمكنك إرجاع المكونات كما هي إذا لم تكن بحاجة لاختبارها
export const BrowserRouter = ({ children }) => <div>{children}</div>;
export const Link = ({ children }) => <a>{children}</a>;