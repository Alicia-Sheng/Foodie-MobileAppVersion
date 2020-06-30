# Foodie

A React food ordering app, Foodie, designed to provide university students with quick and easy food ordering from restaurants and cafes on campus.

Here is the mobile app version of Foodie. Please check the web version here: https://github.com/Alicia-Sheng/Foodie-WebVersion.

Please check the apollo server we are using here: https://github.com/L-Pang/React-Apollo-Server.

## Table of Contents

- [Foodie](#Foodie)
  - [Table of Contents](#table-of-contents)
  - [Background](#background)
    - [What is Foodie](#what-is-foodie)
    - [Why is Foodie](#why-is-foodie)
  - [Features](#features)
    - [Basic features](#basic-features)
    - [Advanced Features](#advanced-features)
    - [Features need help with](#features-need-help-with)
  - [Usage](#usage)
    - [Install](#install)
    - [Run](#run)
  - [Demo](#demo)
  - [Contributors](#contributors)
  - [License](#license)

## Background

### What is Foodie

A food ordering app specifically designed for university students to order from foor courts and cafes on campus.

### Why is Foodie

- Current food ordering apps do not cover university services
- Need of social distancing during COVID-19 period

## Features

### Basic features

- ***For Food Providers***

  - Add food options
  - Receive orders

- ***For Customers***

  - Browse food and beverage options
    - View food details (image, description, price, etc.)
    - Display by restaurant, category, etc
  - Order meals
  - Search meals or restaurants
  - Manage user account, including user login, logout and register
  - View restaurant information (open time, location, etc)
  - Rate the food
  - Browse the comments added by other customers

### Advanced Features

- ***For Food Providers***

  - Edit daily recommendations

- ***For Customers***

  - Rank food and beverage options by rating, price
  - View order status
  - See order history
  - Add comments
  - Browse the comments added by other customers

### Features need help with

- Add admin view / show different view to food providers
- Server setup

## Usage

### Install

First please go to the link and download the latest version of Node.js.
https://nodejs.org/en/download/

After downloading it successfully, please install npm on your computer.
Type the sentences below in command line or powershell if your are using windows.

```sh
$ npm install
```

### Run

Default port: 8080

```sh
$ npm start
```

## Demo

![Main Page 1](   )
![Main Page 2](   )
1.  Nav Bar
    1.  Home
        * Users can use links to go to other pages
    2.  Restaurant
        * Users can search for the restaurant details and the food that they have
    3.  Order
        * Users can click to check the status of their shopping cart
    4.  Provider Page
        * Users can go to the account page and do the login/register operation
2.  Restaurant Pages
    * By clicking the logos, users can jump to the restaurant infomation page
3.  Food/Beverage Options
    * Users can browse all food/beverage options here
4.  Food Search Bar
    * Users can search for the food they want
4.  Account
    * Users can browse setting and all the operation related to this account

![Restaurant Page]( )

  * Food and beverage options are displayed by restaurant

![Detail Page]( )

  * Users can see food details and comment here.
  * Previous comment list of the food is included as well

![Shopping Cart]( )

  * Customers can view, add or remove items they put in the shopping cart.
  * They can place an order here
  
![Provider Page]( )

  * Provider can add the information of the food they serve
  
![Account Page]( )
  
  * Users can browse setting and all the operation related to this account
  1.   ![Profile Page]( )
     * Users can see their own profile
  2.   ![Order Page]( )
     * Users can see their order information
  3.   ![Review Page]( )
     * Users can see their previous review
  4.   ![Log Out]( )
     * Users can log out and it will lead them back to the login page

  
![Login Page]( )

  * Users can login into our app. If one doesn't have a account, one can create the account
  1.   ![login Page]( )
     * If users have a account, he or she can login into our app
  2.   ![register Page]( )
     * If users doesn't have a account, he or she can register for an account
  

## Contributors

[@AliciaSheng](https://github.com/Alicia-Sheng).
[@ChenWei](https://github.com/MRSA-J).
[@WenxuanJiang](https://github.com/wenxuanjiang93).
[@LinPang](https://github.com/L-Pang).

## License

[MIT](LICENSE)
