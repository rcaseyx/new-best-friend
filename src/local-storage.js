export const loadAuthToken = () => {
    return localStorage.getItem('jwt');
};

export const saveAuthToken = authToken => {
    try {
        localStorage.setItem('jwt', authToken);
    } catch (e) {}
};

export const clearAuthToken = () => {
    try {
        localStorage.removeItem('jwt');
    } catch (e) {}
};
