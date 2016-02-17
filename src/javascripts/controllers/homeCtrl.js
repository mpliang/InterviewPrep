
'use strict';

//index, navbar controller
app.controller('homeCtrl', function($scope, $state, postService) {

  $scope.loggedIn = true;
  postService.getAll().then(
    data => {
      $scope.allPosts = data;
    }, error => {
      console.error(error);
    }
  )
  // $scope.topPosts = [
  //   {
  //     title: '## Build an Angular app like Heroku’s Scheduler:',
  //     body: "Heroku's Scheduler is a small web app that lets you add jobs. It shows you your current jobs which includes the name of the job, the amount of dynos, the frequency (hourly, daily, etc.), last time the job ran, and the next date the job is due to run.
  //     Below that, each job has an edit & remove button. When you click edit, all of the fields become inputs to change the values.
  //     At the very bottom of all of your jobs is an “Add new job” button, when you click it the button disappears and a new incomplete form is appended. When you fill in the inputs and hit save, the form is appended and appears just how every other one does, when you click cancel the form disappears and the button reappears.
  //     Sign in/create an account with Heroku and create an app. Add “Heroku Scheduler” (a free add-on) to your app. You can then see how the Heroku Scheduler app works as well as use my explanation.
  //     Recreate this app using Angular.js. You don’t need to plugin a backend (just send HTTP requests to static .json files/mock HTTP requests). We are looking to see how you tackle this problem with code. Please use directives, filters, or whatever Angular.js feature belongs (rather than jQuery or plain JavaScript) where possible, and make it as interactive and single page-app-ish as possible.
  //     Please take your time and ask if you have any questions, this should take no longer than 1-2 hours. Please do all work on GitHub (publicly).
  //     Commit often. Write understandable code. Test your code."
  //   },
  //   {
  //     title: 'Vulcun Chat App',
  //     body: "Part 1
  //
  //     Create an users table with the following fields and insert 10 million random rows into the table
  //
  //     id
  //     full_name
  //     email
  //     city
  //     Find all the users who have john in their name so John smith, Smith john, Johnny etc should all be returned
  //
  //     Optimize query so it doesn’t take more than few milli seconds.
  //
  //     Part 2
  //
  //     Make a chat application using PHP, nodejs/socket.io. It should be simple chat application with
  //     one public channel.
  //
  //     Populate chat with 1000 random messages by random users every 5 seconds.
  //
  //     Make a list of 100 words. These words should be blocked on public channel.
  //
  //     Deploy chat on a server."
  //   }
  // ]

});
