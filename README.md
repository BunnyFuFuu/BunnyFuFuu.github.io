# Welcome to my website!
This is a website created using React, and is meant to showcase myself both as a person and shine a little more light on any professional or project experience I may have gained as a software developer. I partially automated the project updates to work with Github's API so I don't always need to return here to manually make a card and update the site. I basically just get all the public repositories from my account and if they're enabled to be shown on this site (which I implement in each repository by a file containing the data necessary to create the card) then a card will be automatically generated on my Projects tab!

## Update 12/21/2020:
After I discovered that Github limits unauthenticated API requests, I decided that it's probably a lot easier to just redesign the structure to allow a universal script I can use project side to send a site.json config file to this repo and push/redeploy. The reasoning for this is because it's not a collection of data that particularly scales, as I'm the only one adding projects to the website, and that creating an entire backend for it is unnecessary as a result.

## Update 12/26/2020:
After holiday eating, I've made the executive decision to go ahead with just making a full backend for this thing and also probably deploying on Heroku (going to save me money) and also be good REST API experience in addition to what I've already done in the past. I plan on making some form of authentication for myself only so I can add things to the site without actually changing the codebase now that I'm going to probably experiment further with MongoDB to hold my projects and profile. I'll stick with that idea for now.

## Update 12/27/2020: 
Researched a bit today on some form of authentication, probably going to use Auth0 with a single user (myself) that has any form of access when authenticated. Currently working on that. Also created a MongoDB cluster that I'll be using as my backend to store the actual website data. Working on refamiliarizing myself with this as it's been years since I've touched it. This database is currently lower priority as I still need to make the client-facing stuff work for it to be any good, and will be in its own repo anyway. This is more for my QoL so I don't necessarily need to ever mess with the source code again just to add a project or two.

The plan for the backend is to have Create, Update, and Delete functionality be gated behind the Auth0 Management API, where I can verify that:
- The user is logged in
- That user is me, the administrator 
before actually going and modifying the database. Read will be unrestricted as everyone's going to need to see the data I put in this database for the website to have a purpose.

I also plan on just sticking my resume in local storage available for download, so for my management page, I need to be able to have a way to replace the resume every so often OR having GDocs fire off a PDF of the resume on request via an API call if possible. Will look into this.

Progress today: 
- Got some baseline implementation for Auth0, not fully working yet but at least no errors 
- Did some research into authentication and decided on Auth0
- Set up MongoDB for backend, have yet to actually lay out skeleton code for backend
- Home page has at least the Intro blurb as well as a still-empty image location (soon)

## Update 12/30/2020:
Since I'm already making a backend for my database, I had an idea that in order to make authenticated API requests, I can just make an endpoint on the backend do that for me, utilizing my credentials on something that won't necessarily be client-side accessible, with just the results visible to everyone. For now, I've just got it saved in the assets folder where since I'm already trying to get my resume out there, I won't care if it's secure or not unless a malicious entity tries to tamper with it.