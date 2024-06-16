export const signupUser = async (name, email, phone, password, password_confirmation, avatar) => {
    const formDataApi = new FormData();
    formDataApi.append("avatar", avatar);
    formDataApi.append("name", name);
    formDataApi.append("email", email);
    formDataApi.append("phone", phone);
    formDataApi.append("password", password);
    formDataApi.append("password_confirmation", password_confirmation);

    const response = await fetch('https://management.cachooapp.com/api/customer/auth/register', {
        method: 'POST',
        body: formDataApi
    });

    if (!response.ok) {
        throw new Error('Signup failed');
    }

    return response.json();
}
