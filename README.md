# Gnosis App

#### Bringing you informed and accessible research from around the world

The Gnosis App project was conceived and implemented at Craft Academy by the June 2019 cohort.  Team members include Julie Ahlquist, Daria Lykova, Max Aubain, Pedro Bras, Erik Westerberg and Seth NeJame.

The purpose of this application is to bring the latest research of acadamia to the interested layperson in a friendly, readable format.  Readers who are passionate about everything from climate change to cancer research can visit Gnosis for summaries on all of the latest issues.  They can also leave feedback and offer support in the form of donations to the causes they are passionate about.

Another aspect of Gnosis is the ability to broadcast important issues facing the world today.  Prominent research rroups associated with universities around the globe can sign up and submit their research so that readers can review it and make their own informed decisions on things concerning the environemtn, medicine, outreach programs.


## Agile Project Management

This project utilizes the Agile approach to software development.  We found this type of approach useful and efficient as it allows for requirements and solutions evolve through the collaborative effort of self-organizing and cross-functional teams and their customer(s)/end user(s).

The project design and implementation process for Gnosis can be viewed via our [Pivotal Tracker dashboard](https://www.pivotaltracker.com/n/projects/2384164).  

Pivotal Tracker (PT) a popular softward development project management tool.  If you have never used PT before, the dashboard can be initially disorienting.  To make sense of the dashboard, it is useful to keep a few key ideas in mind.

1. The unit of "progress" in an Agile development sprint is the "User Story".  A User Story is a three-line description of a requirement of the application under development.  For example, a story could be,
```
As a Vistor,
In order to get an overview of the content on Gnosis,
I would like to be able to see a list of research articles.
```
2. User Stories are stored on the dashboard in the...
* **Icebox**, where they are stored upon first creation.
* The **Current Iteration / Backlog**, when they are voted upon by the team and made a priority.
* And **Done** section, when they are merged with the shippable code base.

3. Each story title on the dashboard can be expanded to reveal the full User Story, acceptance criteria Model-Controller-View diagrams, resource links, difficulty points, etc.

4. The User Stories are organized into Epics, which describe the types of functionality to be implemented in the application, such as "content-creation" or "monetization".  Epics are assigned to User Stories as tags, so they are not mutually exclusive categories.

## Code Repositories 

Gnosis utilizes to code-base repositories hosted by Github.  One code-base consists of a back-end API that manages business logic and data management, and the other comprises a front-end client which is largely devoted to controlling what the user interacts with in the browser window.  These two repositories are connected and work together to create a working web application.

#### Gnosis Client-Side GitHub Repository
https://github.com/CraftAcademy/gnosis-client


#### Gnosis API-Side GitHub Repository
https://github.com/CraftAcademy/gnosis-api


## Deployment

The front and back-end of the Gnosis App is deployed at the following location:

Front-End Deployment @ Netlify:
https://gnosis-app.netlify.com/

Back-End Deployment @ Heroku:
https://gnosis-api.herokuapp.com/

To interact with the Gnosis app, *visit the Netlify link* provided above and begin browsing your favorite topics.


## Gnosis User Walk-Through
The Gnosis site is designed to accomodate four types of visitors: University administrators who manage their university's account; Research groups that are able to post content on Gnosis when their parent University has obtained a subscription; Visitors who are interested in reading content; and Readers, who are registered Visitors.


## Test Driven Development for peace of mind




