export const validatePostForm = (name: string, description: string, price: number): boolean => {
    if (!name || name.trim().length === 0) {
        alert("Te rog să introduci un nume pentru produs.");
        return false;
    }
    if (!description || description.trim().length === 0) {
        alert("Te rog să introduci o descriere pentru produs.");
        return false;
    }
    if (isNaN(price) || price <= 0) {
        alert("Te rog să introduci un preț valid pentru produs.");
        return false;
    }
    return true;
};

export const validatePassword = (inputPassword: string): boolean => {
    const correctPassword = "musca";
    if (inputPassword !== correctPassword) {
        alert("Parola introdusă este incorectă.");
        return false;
    }
    return true;
};