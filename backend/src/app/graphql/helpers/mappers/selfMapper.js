module.exports = ctx => {
  const {parent, args = {}} = ctx;
  return {...ctx, args: {...args, id: parent.id}};
};
