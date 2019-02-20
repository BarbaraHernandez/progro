# Progro

## Live Demo:
[heroku](https://progro-demo.herokuapp.com/)
### Guest Logins:
#### Manager View:
* e-mail: manager@test.com
* password: 7357password
#### Employee View:
* email: employee@test.com
* password: 7357password

## About Progro:
ProGro empowers employees to bring their ideas to life, and companies to source innovation from within. Employees can post their ideas and vote on others. Companies can selectively endorse ideas, converting them to actionable projects. Employees volunteer for and contribute to projects, then redeem aggregated hours for incentives such as time off. With ProGro, everyone in your workplace has a voice.
* Inspired by Google’s 80/20 policy
* Employees and employers propose ideas and vote on them
* Employers endorse the selected ideas, turning them into projects
* Projects have milestones, roles, and team members
* Employees can apply for roles and become team member once they approved
* Employees can fill out weekly time sheets for each project to aggregate hours
* Hours can be redeemed for incentives, as defined by employers

## Running Locally:

In order to run this application locally, after cloning this repository be sure to install node packages.
> `npm i`

After installing node packages, create a mySQL database. Database values are defined in server > config > config.js. This file assumes that the username is root, the database is titled progro, and the host is 127.0.0.1. The password is intended to be stored in a .env file.
* .env should contain: `DB_LOCAL_PASSWORD=''`

Once your database is created and configured, you will need to start your local development server:
> `npm start`

And then seed the database. This is required for authentication to function.
> `npm run seed`

To see the manager view, update the permissionID of the account to a 2.
> ``UPDATE `progro`.`users` SET `permissionID` = '2' WHERE (`id` = '#');``

## Technologies Used:
* JavaScript
* mySQL
* Express
* React
* Node.js
* Axios
* bcrypt
* Passport-jwt
* SCSS
* bootstrap

## Development Team:
* [Barbara Hernandez](https://github.com/BarbaraHernandez/) - Build Manager
* [Nadine Hernandez](https://github.com/NadineHernandez) - Front-End UX/UI
* [Chris Human](https://github.com/chrishuman0923) - Database Engineer
* [Johnny King](https://github.com/JohnKing93) - Project Manager

