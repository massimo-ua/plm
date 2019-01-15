const users = [
  {
    id: 1,
    name: 'Massimo',
  },
  {
    id: 2,
    name: 'Test',
  },
];

const getUser = ({ id }) => {
  const [selectedUser] = users.filter(user => user.id === id);
  return selectedUser;
};

const getUsers = () => users;


module.exports = (core) => {
  core.registerAPI({
    namespace: 'Users',
    api: {
      getAll: getUsers,
      findById: getUser,
    },
  });
};
