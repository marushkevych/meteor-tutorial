
Template.todoItem.helpers({
  checked: function () {
    return this.completed ? 'checked' : '';
  }
});

Template.todoItem.events({
  'click .delete-todo': function (event) {
    Todos.remove({_id: this._id})
  },

  'keyup [name=todoItem]': function(event){
    if(event.which == 13 || event.which == 27){
      $(event.target).blur();
      return;
    }
    var name = event.target.value;
    Todos.update({ _id: this._id }, {$set: { name: name }});
  },

  'change [type=checkbox]': function (event) {
    Todos.update({ _id: this._id }, {$set: { completed: !this.completed }});
  }
});
