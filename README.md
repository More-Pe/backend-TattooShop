# 🏢 Tattoo Studio Appointment Management System

This project aims to develop the backend system for a tattoo studio appointment management system. The system allows users to register, log in, and access their personal area, where they can view and create appointments for various services offered by the studio.

<div align="center">
  <img src="./img/tattoo_giphy.webp" alt="via GIPHY">
</div>

## 🛠️ Services

The studio offers the following services:

- **Custom Tattoos**: Clients can select unique designs and motifs, personalizing their tattoo experience according to their preferences and tastes.
- **Catalog Tattoos**: The studio offers a variety of pre-designed tattoos from its catalog, allowing clients to choose from a range of stylized and proven options.
- **Tattoo Restoration and Rejuvenation**: The studio specializes in restoring and rejuvenating existing tattoos, working to improve and revitalize old tattoos.
- **Piercing and Dilator Placement**: The studio offers professional piercing and dilator placement services, guaranteeing safe procedures and varied styles to satisfy individual client preferences.
- **Piercing and Merchandise Sales**: In addition to its application services, the studio offers a selection of piercings and other body art-related products, allowing clients to purchase quality items to complement their unique style.

## ⚙️ Stack

<img alt="vsc" src="https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white"><img alt="mysql" src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white"><img alt="typescript" src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"><img alt="jwt" src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white"><img alt= "express" src="https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white"> <img alt="nodejs" src="https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"><img alt="npm" src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white"> <img alt="docker" src="https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white">

## Local installation option

1. Clone this repository:

`$ git clone https://github.com/More-Pe/backend-TattooShop.git`

2. Install node modules:
`$ npm install -y`
3. If you don't have one, create a MySQL container in Docker:
`$ docker run -d --name mysqlc -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root  -v mysql_data:/var/lib/mysql mysql`
4. Connect this repository with our database. Create an `.env` file in the root of the project with the following content, ensuring that these credentials match those set in the MySQL container:
- `DB_HOST=localhost`
- `DB_USER=root`
- `DB_PASSWORD=root`
- `DB_NAME=your_database_name`
- `DB_PORT=3306`
5. Execute the migrations:
`$ npm run migrations`
6. If you want, execute the seeders:
`$ npm run db:seed` or introduce the information manually.
7. Elevate our server:
`$ npm run dev`

## Deploy 🚀

<div align="center">
    <a href="https://tattooshop.zeabur.app"><strong> Tattoo Studio Deploy </strong></a>
</div>

## 🗄️ Database Schema

<img src="./img/DB_Schema.png">

## 🌐 Endpoints

<h3>🔑 Authentication</h3>

| Method | URI                    | Action           | Auth           | Body                                              |
|:------:|:----------------------:|:----------------:|:--------------:|:---------------------------------------------------:|
| POST   | /api/auth/register     | Register user    | <center>N/A (public)</center>   | `{ "email": "youremail@email.com",`<br>`"password_hash": "yourPassword" }` |
| POST   | /api/auth/login        | Login user       | <center>N/A (public)</center>   | `{ "email": "youremail@email.com",`<br>`"password_hash": "yourPasswordHashed" }` |

<h3>👥 Users</h3>

| Method | URI                        | Action              | Auth               | Body                                              |
|:------:|:--------------------------:|:-------------------:|:------------------:|:---------------------------------------------------:|
| GET    | /api/users                 | View all users      | Token (superadmin) | <center>N/A</center>                                               |
| GET    | /api/users/profile         | View user profile   | Token (user)       | <center>N/A</center>                                               |
| PUT    | /api/users/profile         | Update user profile | Token (user)       | `{ "first_name": "newFirstName",`<br>`"last_name": "newLastName", "email": "newEmail",`<br>`"password_hash": "newPassword" }` |
| DELETE | /api/users/:id             | Delete user         | Token (superadmin) | <center>N/A</center>                                               |

<h3>📅 Appointments</h3>

| Method | URI                        | Action                | Permissions      | Body                                              |
|:------:|:--------------------------:|:---------------------:|:----------------:|:---------------------------------------------------:|
| POST   | /api/appointments          | Create appointment    | Token (user)     | `{ "appointment_date": "year-month-dayThour:minute:secondZ",`<br>`"service_id": 2 }` |
| PUT    | /api/appointments          | Update my appointment | Token (user)     | `{ "id": appointmentId,`<br>`"appointment_date": "newDate",`<br>`"service_id": "newService" }` |
| GET    | /api/appointments/:id      | Retrieve appointment  | Token (user)     | <center>N/A</center>                              |
| GET    | /api/appointments          | View my appointments  | Token (user)     | <center>N/A</center>                              |
| DELETE | /api/appointments          | Delete appointment    | Token (user)     | `{ "id": appointmentId }`                         |

<h3>🛎️ Services</h3>

| Method | URI                        | Action            | Permissions        | Body                                              |
|:------:|:--------------------------:|:-----------------:|:------------------:|:-------------------------------------------------:|
| GET    | /api/services              | View all services | <center>N/A (public)</center>       | <center>N/A</center>  |
| POST   | /api/services              | Create service    | Token (superadmin) | `{ "service_name": "serviceName",`<br>`"description": "serviceDescription" }` |
| PUT    | /api/services/:id          | Update service    | Token (superadmin) | `{ "service_name": "newServiceName",`<br>`"description": "newDescription" }` |
| DELETE | /api/services/:id          | Delete service    | Token (superadmin) | <center>N/A</center>                              |


<h3>🛡️ Roles</h3>

| Method | URI                        | Action         | Permissions        | Body                                              |
|:------:|:--------------------------:|:--------------:|:------------------:|:-------------------------------------------------:|
| GET    | /api/roles                 | View all roles | Token (superadmin) | <center>N/A</center>                              |
| POST   | /api/roles                 | Create role    | Token (superadmin) | `{ "id": roleId,`<br>`"name": "roleName" }`       |
| PUT    | /api/roles/:id             | Update role    | Token (superadmin) | `{ "id": newRoleId,`<br>`"name": "newRoleName" }` |
| DELETE | /api/roles/:id             | Delete role    | Token (superadmin) | <center>N/A</center>                              |


## 📞 Contact

<a href=https://www.linkedin.com/in/morena-peralta-almada target="blank">![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)</a> <a href=https://www.github.com/More-Pe target="blank">![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)</a>
