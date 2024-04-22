export const signupUser = async (name, phone, password, password_confirmation, avatar) => {
    const formDataApi = new FormData();
    formDataApi.append("avatar", avatar);
    formDataApi.append("name", name);
    formDataApi.append("phone", phone);
    formDataApi.append("password", password);
    formDataApi.append("password_confirmation", password_confirmation);

    const response = await fetch('https://caco-dev.mimusoft.com/api/customer/auth/register', {
        method: 'POST',
        body: formDataApi
    });

    if (!response.ok) {
        throw new Error('Signup failed');
    }

    return response.json();
}
