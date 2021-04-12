# Phase 2 React Project

## Objectives

1. Build a React single page application from scratch
2. Apply your knowledge of components, props and state management
3. Incorporate client-side routing
4. Use data from external APIs
5. Persist data in a mock up backend

## Introduction

Now that you've learned the fundamentals of React, it's time to practice and
expand your skills by making a React project from scratch!

This assignment is open-ended when it comes to the actual content. You are free to create
whatever you'd like, as long as it incorporates the requirements listed in these instructions.

## Requirements

### Frontend Requirements

1. You must make a single page application (only one `index.html` file) using
   `create-react-app`
2. Your app should use multiple components in a way that keeps your code well
   organized
3. There should be multiple client-side routes using
   [react-router](https://reactrouter.com/web/guides/quick-start)

### Backend Requirements

1. You should use `json-server` to create a RESTful API for your backend
2. You must have full CRUD on at least one resource

### Stretch Goals

Once you have met the minimum requirements, feel free to explore! These are only
the basic requirements — you're free to add on as much stuff as you'd like.

Some ideas for stretch goals:

- Incorporate data from an external API. User
  [this list of APIs](https://apilist.fun/) if you need some inspiration!
- Add some styling: you're encouraged to write your CSS from scratch, either by
  using [styled-components](https://styled-components.com/) or writing CSS files
  and using id/className to style your elements. You can also incorporate a UI
  framework (like [react-bootstrap](https://react-bootstrap.github.io/),
  [semantic-ui](https://react.semantic-ui.com/)
  [material-ui](https://material-ui.com/)) if you prefer.

## Setup

For this project, you will need two separate repositories: one for your frontend
and one for your backend. This will make it easier to deploy your project later,
should you choose to do so.

### Frontend Setup

Use `create-react-app` to generate starter code for your your project. Follow
the instructions on this site to get started: [create-react-app](https://create-react-app.dev/docs/getting-started)

### Backend Setup

Use
[this json-server template](https://github.com/learn-co-curriculum/json-server-template)
to generate your backend code. Using this template will make it easier to deploy
your backend later on.

## Strategy, Timeline, and Tips

### Planning

- Plan out your features
- Develop user stories
  - “As [ a user ], I want [ to perform this action ] so that [ I can accomplish this goal ].”
  - Features should not need you there to explain them to users
- Plan out the structure of your resource(s) within the `db/seeds.json` file

## Deploying

When your project is complete, you are encouraged to deploy it! You'll need to
deploy your frontend and backend repos to their own standalone servers.

For your backend, you will need a service capable of running a Node.js server.
We recommend using
[Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs).

For your frontend, we recommend using
[Netlify](https://docs.netlify.com/#get-started); however, there are a number of
free services you can use if you'd like to explore alternatives.

### Deploying Tips & Tricks

#### Routing

If you're using React Router, you'll also need to set up a `_redirects` file as
specified here:

- [Netlify Redirects](https://docs.netlify.com/routing/redirects/)

Your redirects file should be placed in the public folder. It look like this:

```txt
/*    /index.html   200
```

#### Environment Variables

When working on your app, it's useful to consider which environment you're
working on:

- Development: when working locally
- Test: when running tests
- Production: when deployed to server

You'll likely have some variables that change depending on what environment
you're working in. For example, after deploying your site to production, you
won't be able to access your backend on `localhost` anymore.

To handle these kind of **environment variables**, we can use `.env` files.

`create-react-app` has some tools for working with `.env` files that you can
read about here:

[Custom Environment Variables](https://create-react-app.dev/docs/adding-custom-environment-variables/)

You can make a `.env.development` and `.env.production` file to keep track of
separate environment variables. Note that these files should be in the **root**
of your application directory (not in `/src`). For example, you might set up a
`.env.development` file with your local development server URL:

```env
REACT_APP_API_URL=http://localhost:4000
```

And a `.env.production` file with your deployed backend URL:

```env
REACT_APP_API_URL=https://my-awesome-project.herokuapp.com
```

To use these environment variables in your code, you can access them at
`process.env.REACT_APP_VARIABLE_NAME`:

```js
fetch(`${process.env.REACT_APP_API_URL}/cats`)
  .then((r) => r.json())
  .then(setCats);
```

#### What Happens When I Deploy?

Glad you asked! Deploying your site involves taking the code that lives on your
machine, and setting it up to run on someone else's machine.

As you'll recall, our frontend applications are a type of app known as a
**Single Page Application**. What that means is that there is only **one** HTML
file, along with a handful of JavaScript, CSS, fonts, images, and other static
assets. So when our site is deployed, the main thing we need is a server to host
all of those files and let other people from around the world access those files
with their browsers.

![static file server](http://galileo.phys.virginia.edu/compfac/courses/geek-hours/web-server.png)

In order to generate those files, `create-react-app` comes with a special
`build` script that uses another tool, `webpack`, to take all of our JavaScript,
CSS, and other assets from the `src` directory and optimize them by **bundling**
(merging files together) and **minifying** (shortening the lines of code) so
that the files load as fast as possible.

![webpack bundle](https://hackernoon.com/hn-images/1*0V9PsiedHEzXJRlouOazZA.gif)

You can try this out on your own by running `npm run build`. This will create a
new directory with your bundled and minified source code!

When you upload your project to Netlify, this `build` script will run
automatically on Netlify's server, so that they can host the content for you.
Any time you update your code and push the changes up to Netlify, the build
script will run again and create a new bundle on the server.

Netlify can be configured to use **Continuous Deployment**, which typically
works by connecting your Git repository with Netlify's build process. Then, any
time you push up changes to your main branch, your deployed site will
automatically update! This makes it very easy to add features even after you've
deployed.