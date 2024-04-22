export function formatPhoneNumber(phoneNumber) {
    // إزالة أي مسافات من الرقم
    phoneNumber = phoneNumber ? phoneNumber.replace(/\s/g, '') : phoneNumber

    // إزالة العلامة "+" من بداية الرقم إذا كانت موجودة
    // if (phoneNumber.charAt(0) === '+') {
    //     phoneNumber = '0' + phoneNumber.slice(1);
    // }

    // إعادة الرقم المعدل
    return phoneNumber;
}