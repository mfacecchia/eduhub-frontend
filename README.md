# EduHub
**THE** platform for schools featuring Lessons scheduling, students' attendance tracking, documents sharing, and quizzes creation.\
This repo refers to the frontend side of the EduHub project, you can find documentation about the Backend side on [this link](https://github.com/mfacecchia/eduhub-backend).\
**Note:** this project is still under development and some functionalities may not work properly or not work at all. Additional updates on both the frontend and the backend side are coming in the following weeks.

## Table of contents
- [Requirements](#requirements)
- [Quick Start](#quick-start)
- [Built In - Technologies](#built-in---technologies)
- [Libraries References](#libraries-references)
- [Environmental Variables](#environmental-variables)
- [Features](#features)

## Requirements
- NodeJS

## Quick Start
A `.env.sample` file is provided in the source code. To acknowledge all the environmental variables used in this project and how you can tweak them, you can refer to [this section](#environmental-variables) of the README.
After you completed the environmental variables configuration, you just need to run your PostgreSQL server and, in your terminal, execute the following:
```zsh
cd eduhub-frontend
npm install
```
This will install all required dependencies which will be used to run the server.
Once you completed the app configuration, all you will have to do is running the application. To do so, all you'll have to do is running the following command
```zsh
npm run dev
```
if you want to run the app in development mode, otherwise
```zsh
npm run build
npm run preview
```
to run the app in a production-like environment.
**Be sure to run this command while on the project's root directory.**

## Built In - Technologies
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)\
![NodeJS](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)\
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)\
![PostCSS](https://img.shields.io/badge/postcss-DD3A0A?style=for-the-badge&logo=postcss&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=shadcnui&logoColor=white)

## Libraries References
- [React](https://react.dev)
- [Tanstack Query](https://tanstack.com/query/latest/docs/framework/react/overview)
- [React Hook Form](https://react-hook-form.com)
- [Zod](https://zod.dev)
- [Axios](https://www.npmjs.com/package/axios)

## Environmental Variables
A `.env.sample` file is provided in the project with all instructions on how to use it in your project and customize it based on your needs. Here is a quick explanation:
- `VITE_BACKEND_ADDRESS`, the address to which the app will make the requests (most likely to be Java server's)
- `VITE_PAGE_TITLE`, which is used as a base title for all the app pages
**Note:** once you are satisfied with the variables configuration, in order for the program to read those values you'll need to update the file name from `.env.sample` to just `.env`.

## Features
- Classes creation
- Lessons scheduling
- Notices sending
- Attendance monitoring
