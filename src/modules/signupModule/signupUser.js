export const signupUser = async (name, email, phone, password, password_confirmation, avatar) => {

    const response = await fetch('https://management.cachooapp.com/api/customer/auth/register', {
        method: 'POST',
        body: JSON.stringify({
            name,
            email,
            phone,
            password,
            password_confirmation
        }),
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "X-APP-LOCALE": localStorage.getItem("lang") || "en"
        }
    });

    return response.json();
}
