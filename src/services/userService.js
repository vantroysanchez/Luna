const usersData = [
    { id: 1, name: 'Usuario 1' },
    { id: 2, name: 'Usuario 2' },
    { id: 3, name: 'Usuario 3' },
];

const getAll = () => {
    return usersData;
}
  
const getById = (userId) => {
    return usersData.find((user) => user.id === userId);
};


export default {
    getAll,
    getById,
};