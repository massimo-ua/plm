module.exports = (targetPropertyName = 'accountId') => ctx => {
  const { parent, args = {} } = ctx;
  return { ...ctx, args: { ...args, id: parent[targetPropertyName] } };
};
