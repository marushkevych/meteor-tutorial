Template.todos.helpers({
  todo: function () {
    return Todos.find({listId: this._id}, {sort: {createdAt: -1}});
  }
});