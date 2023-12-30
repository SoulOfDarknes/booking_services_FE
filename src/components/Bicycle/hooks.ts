export const getStatusClassName = (status: string) => {
    switch (status) {
        case 'available':
            return 'available';
        case 'Available':
            return 'available';
        case 'Busy':
            return 'busy';
        case 'Unavailable':
            return 'unavailable';
        default:
            return '';
    }
};
