# droom-frontend

## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Contributing](../CONTRIBUTING.md)

## About <a name = "about">DROOM</a>

    The droom app is LinkedIn meets Tinder for the professional
    job seeker looking for their first job, or making a career change.

    On the flip side, it is also for medium to small businesses who
    are tired of the endless search for good employees... Search
    no more, let Droom do the heavy lifting!

## Getting Started <a name = "getting_started"></a>

Github Repo: <https://github.com/BuildWeek-Droom2-Lambda>

To hack our app:

1. fork and clone the repo into a directory on your computer.

2. cd into root directory of project

3. checkout your own branch with the name: `feature <your-name-here`>

4. run `yarn install` or `npm install` to install project dependencies.

5. get a development server spinning up on localhost://3000.

6. start making desired changes/ additions and hit save to trigger hot reload.

7. push changes to your remote branch on origin

8. initiate a pull request and add one of the project admins as a reviewer

9. you will be notified once your code is reviewded and the changes are implemented

10. check the `issues` tab periodically to see what updates and functionality are needed

See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites

#### yarn package installer

`npm install yarn`

#### axios

`yarn add axios`

#### redux

`yarn add redux`

#### react-router-dom

`yarn add react-router-dom`

#### formik

`yarn add formik`

#### react-redux

`yarn add reaxct-redux`


## Usage

### State

```javascript

  users: {
    userType: {
      company: [
        {
          company_id: null,
          username: "",
          password: "",
          name: "",
          location: "",
          bio: ""
        }
      ],
      seeker: [
        {
          seeker_id: null,
          username: "",
          password: "",
          name: "",
          location: "",
          skills: "",
          experience: ""
        }
      ]
    }
  },

  jobs: [
    {
      name: "",
      location: "",
      description: "",
      salary: null,
      company_id: null,
      job_id: null
    }
  ],

  isLoading: false,

  isUpdating: false,

  message: ""
};

```
