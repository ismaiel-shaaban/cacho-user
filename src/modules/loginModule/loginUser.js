export const loginUser = async (username, password) => {
    const response = await fetch('https://management.cachooapp.com/api/customer/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "Accept": "application/json",
            "X-APP-LOCALE": localStorage.getItem("lang") || "en"
        },
        body: JSON.stringify({ username, password }),
    });
    return response.json();
}