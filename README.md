# Name Game

## How To Play

From the home screen when the app is loaded, you are greeted with a `Play` button. Once you click, you have five
rounds of guessing the correct employee from WillowTree out of six possible choices. Once you have made five guesses,
you are taken to the statistics page where you can see how you did. Information such as percentage of correct/incorrect
selection and average selection time are displayed. You are then prompted to navigate back to the home screen
where you can keep playing the game!

## About

This product is a web application built on React and Typescript for front-end user interface that fetches
backend data provided by WillowTree API. How this product was developed:

## React

React was chosen for this particular project because this framework is particularly excellent at selectively
rendering certain components based on state/data changes. This, in turn, improves performance by prevention of
constantly reloading O(N) times for every action performed

## Typescript

Typescript in itself is a methodology of unit testing. If a given prop, function, interface, etc, does not receive
or satisfy the conditions of what it's receiving/returning, there will be compilation errors, which are great
indicators of vulnerabilities/potential bugs in the system. It's ensured that each component/entity is receiving
the necessary data safely without room for error

## CSS Modules

At almost every component-level directory, there exists a module.css file that contains all the necessary local styles
for that given componenet. This provides scalability and flexibility when reusing components for other functionalites/pages
and creates an ease of use when appending onto existing styles

## React Router

In order to transition between the home page and the game page, React Router has been implemented so that
each of these pages have a path that can be navigated to with ease and can be verifed in its url

## Enzyme

Another framework for unit testing, Enzyme simulates a virtual DOM, much of what one sees in the browser
and can be easily used to assert certain components/logic render in the correct way and can also perform
UI-related tasks such as performing a user flow
