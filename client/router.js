Router.configure({
  layoutTemplate: 'main'
});

Router.route('/register');
Router.route('/login');
Router.route('/', {name: 'home', template: 'home'});

Router.route('/list/:_id', {
  name: 'listPage',
  template: 'listPage',
  data: function () {
    return Lists.findOne({_id: this.params._id});
  }
});