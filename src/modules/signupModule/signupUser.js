export const signupUser = async (username , phone, password ,password_confirmation) => {
    const response = await fetch('https://caco-dev.mimusoft.com/api/customer/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, phone, password, password_confirmation })
    });

    if (!response.ok) {
        throw new Error('Login failed');
    }
    return response.json();
}