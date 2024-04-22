export function calculateDiscountPercentage(originalPrice, discountedPrice) {
    // التحقق من أن السعر الأصلي أكبر من السعر المخفض لتجنب القسمة على الصفر
    if (originalPrice > discountedPrice) {
        // حساب الفرق بين السعر الأصلي والسعر المخفض
        const discountAmount = originalPrice - discountedPrice;
        // حساب نسبة الخصم بقسمة الخصم على السعر الأصلي وضربها في 100 للحصول على النسبة المئوية
        const discountPercentage = (discountAmount / originalPrice) * 100;
        // إرجاع نسبة الخصم المحسوبة
        return discountPercentage.toFixed(2);
    } else {
        // إرجاع قيمة خطأ في حالة عدم تطابق البيانات
        return "Invalid data";
    }
}
