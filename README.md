# AlbaAlicunde

This is an Angular application featuring two screens. The app consists of a login form on the first screen with validation and a success screen displaying a random GIF.

## Features
Login Form (First Screen):

The login form contains two inputs: email and password.
Both inputs are required.
The password must be at least 6 characters long.
The submit button is disabled until all input fields are correctly filled.
Upon successful validation, the user is redirected to the success screen.


Success Screen (Second Screen):

Displays a random GIF.
Includes a button that generates a new random GIF each time it is clicked.
The random GIFs are selected from a predefined set of images, excluding the current one.

## Technologies Used
Angular: The main framework for building the application.
Reactive Forms: Used for form control and validation.
Angular Router: Handles routing between the login and success screens.

## Tests
The project includes unit tests written in Jasmine and executed using Karma. These tests ensure that the application behaves as expected, including form validation, button behavior, and navigation.
To run the unit tests, use the following command 'ng test'

