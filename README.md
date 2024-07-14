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

1. Clone the repository from the url
2. `$ npm install`
3. Connect the cloned repo with our Database3. Connect the cloned repo with our Database3. Connect the cloned repo with our Database
4. `$ Execute the migrations`
5. `$ Execute the seeders`
6. `$ npm run dev` to elevate our server


## Deploy 🚀

<div align="center">
    <a href="https://tattooshop.zeabur.app"><strong> Tattoo Studio Deploy </strong></a>
</div>

## 🗄️ Database Schema

<img src="./img/DB_Schema.png">

## 🌐 Endpoints

<h3>🔑 Authentication</h3>

| Method | URI                    | Action           | Auth           | Body                                              |
|--------|------------------------|------------------|----------------|---------------------------------------------------|
| POST   | /api/auth/register     | Register user    | N/A (Public)   | `{ "email": "youremail@email.com",`<br>`"password_hash": "yourPassword" }` |
| POST   | /api/auth/login        | Login user       | N/A (Public)   | `{ "email": "youremail@email.com",`<br>`"password_hash": "yourPasswordHashed" }` |

<h3>👥 Users</h3>

| Method | URI                        | Action              | Auth               | Body                                              |
|--------|----------------------------|---------------------|--------------------|---------------------------------------------------|
| GET    | /api/users                 | View all users      | Token (Superadmin) | N/A                                               |
| GET    | /api/users/profile         | View user profile   | Token (User)       | N/A                                               |
| PUT    | /api/users/profile         | Update user profile | Token (User)       | `{ "first_name": "newFirstName",`<br>`"last_name": "newLastName",`<br>`"email": "newEmail",`<br>`"password_hash": "newPassword" }` |
| DELETE | /api/users/:id             | Delete user         | Token (Superadmin) | N/A                                               |

<h3>📅 Appointments</h3>

| Method | URI                        | Action                | Permissions      | Body                                              |
|--------|----------------------------|-----------------------|------------------|---------------------------------------------------|
| POST   | /api/appointments          | Create appointment    | Token (User)     | `{ "appointment_date": year-month-dayThour:minute:secondZ
,`<br>`"service_id": 2 }` |
| PUT    | /api/appointments          | Update my appointment | Token (User)     | `{ "id": appointmentId,`<br>`"appointment_date": "newDate",`<br>`"service_id": "newService" }` |
| GET    | /api/appointments/:id      | Retrieve appointment  | Token (User)     | N/A                                               |
| GET    | /api/appointments          | View my appointments  | Token (User)     | N/A                                               |
| DELETE | /api/appointments          | Delete appointment    | Token (User)     | `{ "id": appointmentId }`                         |

<h3>🛎️ Services</h3>

| Method | URI                        | Action            | Permissions        | Body                                              |
|--------|----------------------------|-------------------|--------------------|---------------------------------------------------|
| GET    | /api/services              | View all services | User               | N/A                                               |
| POST   | /api/services              | Create service    | Token (Superadmin) | `{ "service_name": "serviceName",`<br>`"description": "serviceDescription" }` |
| PUT    | /api/services/:id          | Update service    | Token (Superadmin) | `{ "service_name": "newServiceName",`<br>`"description": "newDescription" }` |
| DELETE | /api/services/:id          | Delete service    | Token (Superadmin) | N/A                                               |

<h3>🛡️ Roles</h3>

| Method | URI                        | Action         | Permissions        | Body                                              |
|--------|----------------------------|----------------|--------------------|---------------------------------------------------|
| GET    | /api/roles                 | View all roles | Superadmin         | N/A                                               |
| POST   | /api/roles                 | Create role    | Token (Superadmin) | `{ "id": roleId,`<br>`"name": "roleName" }`       |
| PUT    | /api/roles/:id             | Update role    | Token (Superadmin) | `{ "id": newRoleId,`<br>`"name": "newRoleName" }`         |
| DELETE | /api/roles/:id             | Delete role    | Token (Superadmin) | N/A                                               |


## 📞 Contact

<a href=https://www.linkedin.com/in/morena-peralta-almada target="blank">![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)</a> <a href=https://www.github.com/More-Pe target="blank">![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)</a>
