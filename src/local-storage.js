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

export const loadCurrentUser = () => {
    return localStorage.getItem('currentUser');
};

export const saveCurrentUser = currentUser => {
    try {
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
    } catch (e) {}
};

export const clearCurrentUser = () => {
    try {
        localStorage.removeItem('currentUser');
    } catch (e) {}
};
