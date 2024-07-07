# 🏢 Tattoo Studio Appointment Management System


This project aims to develop the backend system for a tattoo studio appointment management system. The system allows users to register, log in, and access their personal area, where they can view and create appointments for various services offered by the studio.

## 🛠️ Services

The studio offers the following services:

- **Custom Tattoos**: Clients can select unique designs and motifs, personalizing their tattoo experience according to their preferences and tastes.
- **Catalog Tattoos**: The studio offers a variety of pre-designed tattoos from its catalog, allowing clients to choose from a range of stylized and proven options.
- **Tattoo Restoration and Rejuvenation**: The studio specializes in restoring and rejuvenating existing tattoos, working to improve and revitalize old tattoos.
- **Piercing and Dilator Placement**: The studio offers professional piercing and dilator placement services, guaranteeing safe procedures and varied styles to satisfy individual client preferences.
- **Piercing and Merchandise Sales**: In addition to its application services, the studio offers a selection of piercings and other body art-related products, allowing clients to purchase quality items to complement their unique style.

## 📌 Endpoints

### 🔑 Authentication
| Method | URI               | Action         |
|--------|-------------------|----------------|
| POST   | /api/auth/register| Register user  |
| POST   | /api/auth/login   | Login user     |

### 👥 Users
| Method | URI                                        | Action                |
|--------|--------------------------------------------|-----------------------|
| GET    | /api/users                                 | View all users        |
| GET    | /api/users/profile                         | View user profile     |
| PUT    | /api/users/profile                         | Update user profile   |
| GET    | /api/users?email=example@example.com       | Filter user by email  |
| DELETE | /api/users/{id}                            | Delete user           |
| PUT    | /api/users/{id}/role                       | Change user role      |

### 📅 Appointments
| Method | URI                      | Action                  |
|--------|--------------------------|-------------------------|
| POST   | /api/appointments        | Create appointment      |
| PUT    | /api/appointments        | Update my appointment   |
| GET    | /api/appointments/{id}   | Retrieve appointment    |
| GET    | /api/appointments        | View my appointments    |
| DELETE | /api/appointments/{id}   | Delete appointment      |

### 🛎️ Services
| Method | URI                      | Action             |
|--------|--------------------------|--------------------|
| GET    | /api/services            | View all services  |
| POST   | /api/services            | Create service     |
| PUT    | /api/services/{id}       | Update service     |
| DELETE | /api/services/{id}       | Delete service     |

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

## 📞 Contact

<a href=https://www.linkedin.com/in/morena-peralta-almada target="blank">![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)</a> <a href=https://www.github.com/More-Pe target="blank">![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)</a>
