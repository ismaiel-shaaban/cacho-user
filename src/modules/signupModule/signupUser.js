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
            "Accept": "application/json"
        }
    });

    if (!response.ok) {
        throw new Error('Signup failed');
    }

    return response.json();
}
