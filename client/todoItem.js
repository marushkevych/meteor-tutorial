Template.todoItem.events({
  'click .delete-todo': function (event) {
    Todos.remove({_id: this._id})
  }
});
