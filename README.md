# 🏢 Tattoo Studio Appointment Management System

This project aims to develop the backend system for a tattoo studio appointment management system. The system allows users to register, log in, and access their personal area, where they can view and create appointments for various services offered by the studio.

## 🛠️ Services

The studio offers the following services:

- **Custom Tattoos**: Clients can select unique designs and motifs, personalizing their tattoo experience according to their preferences and tastes.
- **Catalog Tattoos**: The studio offers a variety of pre-designed tattoos from its catalog, allowing clients to choose from a range of stylized and proven options.
- **Tattoo Restoration and Rejuvenation**: The studio specializes in restoring and rejuvenating existing tattoos, working to improve and revitalize old tattoos.
- **Piercing and Dilator Placement**: The studio offers professional piercing and dilator placement services, guaranteeing safe procedures and varied styles to satisfy individual client preferences.
- **Piercing and Merchandise Sales**: In addition to its application services, the studio offers a selection of piercings and other body art-related products, allowing clients to purchase quality items to complement their unique style.

## Local installation option

1. Clone the repository from the url
2. `$ npm install`
3. Connect the cloned repo with our Database
4. `$ Execute the migrations`
5. `$ Execute the seeders`
6. `$ npm run dev` to elevate our server
7. ...

## 🗄️ Database Schema

<img src="./img/DB_Schema.png">

## ⚙️ Stack

**IDE** <br><br>
<img alt="vsc" src="https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white">

**Database** <br><br>
<img alt="mysql" src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white">

**Language** <br><br>
<img alt="typescript" src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white">

**Lybrary** <br><br>
<img alt="jwt" src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white">

**Framework** <br><br>
<img alt= "express" src="https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white"> <img alt="nodejs" src="https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white">

**Other tools** <br><br>
<img alt="npm" src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white"> <img alt="docker" src="https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white">

## 🌐 Endpoints

### 🔑 Authentication
| Method | URI               | Action         | Authentication | Permissions | Body                                  |
|--------|-------------------|----------------|----------------|-------------|---------------------------------------|
| POST   | /api/auth/register| Register user  | No             | Public      | `{ "user": "Name", "email": "yourmail@mail.com", "password": "123456789" }` |
| POST   | /api/auth/login   | Login user     | No             | Public      | `{ "email": "yourmail@mail.com", "password": "123456789" }`                |

### 👥 Users
| Method | URI                                    | Action                  | Authentication | Permissions | Body                                  |
|--------|----------------------------------------|-------------------------|----------------|-------------|---------------------------------------|
| GET    | /api/users/all                         | View all users          | Yes            | Superadmin  | N/A                                   |
| GET    | /api/users/profile                     | View user profile       | Yes            | User        | N/A                                   |
| PUT    | /api/users/profile/update              | Update user profile     | Yes            | User        | `{ "field_to_update": "newValue" }`     |
| GET    | /api/users?email=example@example.com   | Filter user by email    | Yes            | Superadmin  | N/A                                   |
| DELETE | /api/users/:id                         | Delete user             | Yes            | Superadmin  | N/A                                   |
| PUT    | /api/users/:id/role                    | Change user role        | Yes            | Superadmin  | `{ "role_id": newRoleId }`            |

### 📅 Appointments
| Method | URI                             | Action                | Authentication | Permissions | Body                                  |
|--------|---------------------------------|-----------------------|----------------|-------------|---------------------------------------|
| POST   | /api/appointments/create        | Create appointment    | Yes            | User        | `{ "appointment_date": "2024-07-10T15:30:00Z
", "service_id": 2 }` |
| PUT    | /api/appointments/update        | Update my appointment | Yes            | User        | `{ "id": appointmentId, "fieldToUpdate": "newValue" }`  |
| GET    | /api/appointments/:id           | Retrieve appointment  | Yes            | User        | N/A                                   |
| GET    | /api/appointments/scheduled     | View my appointments  | Yes            | User        | N/A                                   |
| DELETE | /api/appointments/delete        | Delete appointment    | Yes            | User        | `{ "id": appointmentId }`             |

### 🛎️ Services
| Method | URI                         | Action                | Authentication | Permissions | Body                                  |
|--------|-----------------------------|-----------------------|----------------|-------------|---------------------------------------|
| GET    | /api/services/all           | View all services     | Yes            | User        | N/A                                   |
| POST   | /api/services/create        | Create service        | Yes            | Superadmin  | `{ "service_name": "ServiceA", "description": "example" }` |
| PUT    | /api/services/update/:id    | Update service        | Yes            | Superadmin  | `{ "service_name": "ServiceB", "description": "example" }` |
| DELETE | /api/services/delete/:id    | Delete service        | Yes            | Superadmin  | N/A                                   |

### 🛡️ Roles
| Method | URI                          | Action                | Authentication | Permissions | Body                                  |
|--------|------------------------------|-----------------------|----------------|-------------|---------------------------------------|
| GET    | /api/roles/all               | View all roles        | Yes            | Superadmin  | N/A                                   |
| POST   | /api/roles/create            | Create role           | Yes            | Superadmin  | `{ "id": number, "name": "roleName" }` |
| PUT    | /api/roles/update/:id        | Update role           | Yes            | Superadmin  | `{ "field_to_update": "newValue" }`     |
| DELETE | /api/roles/delete/:id        | Delete role           | Yes            | Superadmin  | N/A                                   |


## 📞 Contact

<a href=https://www.linkedin.com/in/morena-peralta-almada target="blank">![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)</a> <a href=https://www.github.com/More-Pe target="blank">![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)</a>
