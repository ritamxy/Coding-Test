# Coding-Test

This web application is built using [React](https://reactjs.org) which supports the following user stories

1. Users can signup /signin with their email.
2. Users can have a button to toggle password visibility
3. Internal users can view the tracked events/pageview from Google Analytics
4. Internal users can view the tracked events/pageview from Mixpanel\* (to be done)

The test website includes four pages: **Landing Page**, **Login Page**, **Sign Up Page** and **Internal Page**.

## Landing Page

This is the home page and it basically contains two links which guide users redirect to **Login Page** and **Sign Up Page**.

## Login Page

This page is for users who already have accounts. They will redirect to the **Internal Page** by clicking the `login` button, only if they enter the correct username and password.
Users who do not have accounts can simply click the `sign up` button and then navigate to **Sign Up Page** to create an account.

## Sign Up Page

The users can create accounts by clicking the `sign up` button if the required fields are fulfilled, including:

- username
- password
- first name
- last name
- gender
- address
- phone

## InternalPage

It is a display page after users sign In successfully.

## Toggle password visibility

This functionality applies to **Login Page** and **Sign Up Page**. Users can tick/untick the checkbox called `Show Password` to see visible/invisible passwords.

## Tracking event - Google Analytics

The `Sign Up` button of **Login Page** is linked to Google Analytics for tracking events.
