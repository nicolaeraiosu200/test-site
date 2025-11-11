export const formatPrice = (price: number): string => {
    return price.toLocaleString('ro-RO', {
        style: 'currency',
        currency: 'RON',
    });
};

export const formatDate = (date: Date): string => {
    return date.toLocaleDateString('ro-RO', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
};