# Cinema Ticket Booking System API Documentation

## Installation

1. Clone the repository.
2. Run `npm install` to install the dependencies.
3. Create a database and update the `config/config.json` file with the database credentials.
4. Run `sequelize db:migrate` to create the database tables.
5. Run `npm start` to start the server.

## Endpoints :

List of available endpoints:

Studios:

- [GET /studios](#1-get-studios)
- [POST /studios](#2-post-studios)
- [GET /studios/:studioId](#3-get-studiosid)
- [PUT /studios/:studioId](#4-put-studiosid)
- [DELETE /studios/:studioId](#5-delete-studiosid)

Films:

- [GET /films](#1-get-films)
- [POST /films](#2-post-films)
- [GET /films/:filmId](#3-get-filmsid)
- [PUT /films/:filmId](#4-put-filmsid)
- [DELETE /films/:filmId](#5-delete-filmsid)

Showtimes:

- [GET /showtimes](#1-get-showtimes)
- [POST /showtimes](#2-post-showtimes)
- [GET /showtimes/:showtimeId](#3-get-showtimesid)
- [PUT /showtimes/:showtimeId](#4-put-showtimesid)
- [DELETE /showtimes/:showtimeId](#5-delete-showtimesid)

Tickets:

- [GET /tickets](#1-get-tickets)
- [POST /tickets](#2-post-tickets)
- [GET /tickets/:ticketId](#3-get-ticketsid)
- [PUT /tickets/:ticketId](#4-put-ticketsid)
- [DELETE /tickets/:ticketId](#5-delete-ticketsid)

&nbsp;

## 1. GET /studios

Description:

- Get a list of all studios

Request:

_Response (200 - OK)_

```json
[
  {
    "id": 1,
    "title": "10 Tips for Improving Your Productivity",
    "content": "Ut enim ad minim veniam",
    "imgUrl": "http://dummyimage.com",
    "CategoryId": 2,
    "UserId": 1,
    "createdAt": "2024-07-22T11:56:51.461Z",
    "updatedAt": "2024-07-22T11:56:51.461Z",
    "User": {
      "id": 1,
      "username": "admin",
      "email": "admin@mail.com",
      "role": "Admin",
      "phoneNumber": "08123456789",
      "address": "Jl. Raya",
      "createdAt": "2024-07-22T11:18:06.045Z",
      "updatedAt": "2024-07-22T11:18:06.045Z"
    }
  }
  ...,
]
```

_Response (500 - internal Server Error)_

```json
{
  "message": "Server error"
}
```

&nbsp;

## 2. POST /studios

Description:

- Create a new studio.

Request:

- body:

```json
{
  "name": "string"
}
```

_Response (201 - Created)_

```json
{
  "data": {
    "id": 6,
    "name": "D-1",
    "updatedAt": "2024-10-07T06:46:01.356Z",
    "createdAt": "2024-10-07T06:46:01.356Z"
  }
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "name are required"
}
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Server error"
}
```

&nbsp;

## 3. GET /studios/:id

Description:

- Get a specific studio by ID.

Request:

- params:

```json
{
  "studioId": "integer (required)"
}
```

_Response (200 - OK)_

```json
{
  "data": {
    "id": 1,
    "name": "A-1",
    "createdAt": "2024-09-09T00:00:00.000Z",
    "updatedAt": "2024-09-09T00:00:00.000Z",
    "Films": [
      {
        "id": 21,
        "title": "title",
        "description": "description",
        "releaseDate": "2024-10-07T04:27:12.000Z",
        "studioId": 1,
        "createdAt": "2024-10-07T03:57:36.000Z",
        "updatedAt": "2024-10-07T04:27:12.000Z"
      }
    ]
  }
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Studio with id not found"
}
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Server Error"
}
```

&nbsp;

## 4. PUT /studios/:id

Description:

- Update a specific studio by ID.

Request:

- params:

```json
{
  "studioId": "integer (required)"
}
```

- body:

```json
{
  "name": "string"
}
```

_Response (200 - OK)_

```json
{
  "message": "Studio with id ${studioId} updated"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "studio with id ${studioId} not found"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "name are required"
}
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Server Error"
}
```

&nbsp;

## 5. DELETE /studios/:id

Description:

- Delete a specific studio by ID.

Request:

- params:

```json
{
  "studioId": "integer (required)"
}
```

_Response (200 - OK)_

```json
{
  "message": "Studio with id ${studioId} deleted"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "studio with id ${studioId} not found"
}
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Server error"
}
```

&nbsp;

## 1. GET /films

Description:

- Get a list of all films.

Request:

_Response (200 - OK)_

```json
[
  {
    "data": [
      {
        "id": 21,
        "title": "&lt;&gt;dd&amp;",
        "description": "3",
        "releaseDate": "2024-10-07T04:27:12.000Z",
        "studioId": 1,
        "createdAt": "2024-10-07T03:57:36.000Z",
        "updatedAt": "2024-10-07T04:27:12.000Z",
        "Showtimes": [
          {
            "id": 9,
            "filmId": 21,
            "studioId": 1,
            "showTime": "2024-10-06T21:27:12.000Z",
            "createdAt": "2024-10-07T04:38:04.000Z",
            "updatedAt": "2024-10-07T04:38:04.000Z"
          }
        ]
      }
    ]
  }
  ...,
]
```

_Response (500 - internal Server Error)_

```json
{
  "message": "Server error"
}
```

&nbsp;

## 2. POST /films

Description:

- Create a new film.

Request:

- body:

```json
{
  "title": "string",
  "description": "string",
  "studioId": "integer"
}
```

_Response (201 - Created)_

```json
{
  "data": {
    "id": 23,
    "title": "string",
    "description": "string",
    "releaseDate": "2024-10-07T11:55:01.688Z",
    "studioId": 2,
    "updatedAt": "2024-10-07T11:55:01.688Z",
    "createdAt": "2024-10-07T11:55:01.688Z"
  }
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "title are required"
}
OR
{
  "message": "description are required"
}
OR
{
  "message": "studioId are required"
}
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Server error"
}
```

&nbsp;

## 3. GET /films/:id

Description:

- Get a specific film by ID.

Request:

- params:

```json
{
  "filmId": "integer (required)"
}
```

_Response (200 - OK)_

```json
{
  "data": {
    "id": 21,
    "title": "title",
    "description": "description",
    "releaseDate": "2024-10-07T04:27:12.000Z",
    "studioId": 1,
    "createdAt": "2024-10-07T03:57:36.000Z",
    "updatedAt": "2024-10-07T04:27:12.000Z"
  }
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Film with id 200 not found"
}
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Server Error"
}
```

&nbsp;

## 4. PUT /films/:id

Description:

- Update a specific film by ID.

Request:

- params:

```json
{
  "filmId": "integer (required)"
}
```

- body:

```json
{
  "title": "string",
  "description": "string",
  "studioId": "integer"
}
```

_Response (200 - OK)_

```json
{
  "message": "Film with id updated"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Film with id not found"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "title are required"
}
OR
{
  "message": "description are required"
}
OR
{
  "message": "studioId are required"
}
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Server Error"
}
```

&nbsp;

## 5. DELETE /films/:id

Description:

- Delete a specific film by ID.

Request:

- params:

```json
{
  "filmId": "integer (required)"
}
```

_Response (200 - OK)_

```json
{
  "message": "Film with id deleted"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Film with id not found"
}
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Server error"
}
```

&nbsp;

## 1. GET /showtimes

Description:

- Get a list of all showtimes.

Request:

_Response (200 - OK)_

```json
[
  {
    "data": [
      {
        "id": 9,
        "filmId": 21,
        "studioId": 1,
        "showTime": "2024-10-06T21:27:12.000Z",
        "createdAt": "2024-10-07T04:38:04.000Z",
        "updatedAt": "2024-10-07T04:38:04.000Z",
        "Film": {
          "id": 21,
          "title": "&lt;&gt;dd&amp;",
          "description": "3",
          "releaseDate": "2024-10-07T04:27:12.000Z",
          "studioId": 1,
          "createdAt": "2024-10-07T03:57:36.000Z",
          "updatedAt": "2024-10-07T04:27:12.000Z"
        },
        "Tickets": [
          {
            "id": 5,
            "showtimeId": 9,
            "seatNumber": "F-2",
            "price": 75000,
            "createdAt": "2024-10-07T04:56:29.000Z",
            "updatedAt": "2024-10-07T04:56:29.000Z"
          },
          ...
        ]
      }
    ]
  }
  ...,
]
```

_Response (500 - internal Server Error)_

```json
{
  "message": "Server error"
}
```

&nbsp;

## 2. POST /showtimes

Description:

- Create a new showtimes.

Request:

- body:

```json
{
  "filmId": "integer",
  "studioId": "integer",
  "showTime": "string"
}
```

_Response (201 - Created)_

```json
{
  "data": {
    "id": 11,
    "filmId": 21,
    "studioId": 2,
    "showTime": "2024-09-09T00:00:00.000Z",
    "updatedAt": "2024-10-07T12:04:23.206Z",
    "createdAt": "2024-10-07T12:04:23.206Z"
  }
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "filmId are required"
}
OR
{
  "message": "studioId are required"
}
OR
{
  "message": "showTime are required"
}
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Server error"
}
```

&nbsp;

## 3. GET /showtimes/:id

Description:

- Get a specific showtimes by ID.

Request:

- params:

```json
{
  "showtimeId": "integer (required)"
}
```

_Response (200 - OK)_

```json
{
  "data": {
    "id": 9,
    "filmId": 21,
    "studioId": 1,
    "showTime": "2024-10-06T21:27:12.000Z",
    "createdAt": "2024-10-07T04:38:04.000Z",
    "updatedAt": "2024-10-07T04:38:04.000Z",
    "Film": {
      "id": 21,
      "title": "&lt;&gt;dd&amp;",
      "description": "3",
      "releaseDate": "2024-10-07T04:27:12.000Z",
      "studioId": 1,
      "createdAt": "2024-10-07T03:57:36.000Z",
      "updatedAt": "2024-10-07T04:27:12.000Z"
    },
    "Studio": {
      "id": 1,
      "name": "A-1",
      "createdAt": "2024-09-09T00:00:00.000Z",
      "updatedAt": "2024-09-09T00:00:00.000Z"
    }
  }
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Showtime with id 200 not found"
}
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Server Error"
}
```

&nbsp;

## 4. PUT /showtimes/:id

Description:

- Update a specific showtimes by ID.

Request:

- params:

```json
{
  "showtimeId": "integer (required)"
}
```

- body:

```json
{
  "filmId": "integer",
  "studioId": "integer",
  "showTime": "string"
}
```

_Response (200 - OK)_

```json
{
  "message": "showtime with id updated"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "showtime with id not found"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "filmId are required"
}
OR
{
  "message": "studioId are required"
}
OR
{
  "message": "showTime are required"
}
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Server Error"
}
```

&nbsp;

## 5. DELETE /showtimes/:id

## 1. GET /tickets

Description:

- Get a list of all tickets.

Request:

_Response (200 - OK)_

```json
{
  "data": [
    {
      "id": 4,
      "showtimeId": 9,
      "seatNumber": "Z-2",
      "price": 75000,
      "createdAt": "2024-10-07T04:56:22.000Z",
      "updatedAt": "2024-10-07T04:57:24.000Z",
      "Showtime": {
        "id": 9,
        "filmId": 21,
        "studioId": 1,
        "showTime": "2024-10-06T21:27:12.000Z",
        "createdAt": "2024-10-07T04:38:04.000Z",
        "updatedAt": "2024-10-07T04:38:04.000Z"
      }
    },
    ...
  ]
}
```

_Response (500 - internal Server Error)_

```json
{
  "message": "Server error"
}
```

&nbsp;

## 2. POST /tickets

Description:

- Create a new tickets.

Request:

- body:

```json
{
  "showtimeId": "integer",
  "seatNumber": "string",
  "price": "integer"
}
```

_Response (201 - Created)_

```json
{
  "data": {
    "id": 7,
    "showtimeId": 9,
    "seatNumber": "Z-1",
    "price": 78000,
    "updatedAt": "2024-10-07T12:33:39.780Z",
    "createdAt": "2024-10-07T12:33:39.780Z"
  }
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "showtimeId are required"
}
OR
{
  "message": "seatNumber are required"
}
OR
{
  "message": "price are required"
}
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Server error"
}
```

&nbsp;

## 3. GET /tickets/:id

Description:

- Get a specific showtimes by ID.

Request:

- params:

```json
{
  "ticketId": "integer (required)"
}
```

_Response (200 - OK)_

```json
{
  "data": {
    "id": 4,
    "showtimeId": 9,
    "seatNumber": "Z-2",
    "price": 75000,
    "createdAt": "2024-10-07T04:56:22.000Z",
    "updatedAt": "2024-10-07T04:57:24.000Z"
  }
}
```

_Response (404 - Not Found)_

```json
{
  "message": "ticketId with id not found"
}
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Server Error"
}
```

&nbsp;

## 4. PUT /tickets/:id

Description:

- Update a specific tickets by ID.

Request:

- params:

```json
{
  "ticketId": "integer (required)"
}
```

- body:

```json
{
  "showtimeId": "integer",
  "seatNumber": "string",
  "price": "integer"
}
```

_Response (200 - OK)_

```json
{
  "message": "ticketId with id updated"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "ticketId with id not found"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "showtimeId are required"
}
OR
{
  "message": "seatNumber are required"
}
OR
{
  "message": "price are required"
}
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Server Error"
}
```

&nbsp;

## 5. DELETE /tickets/:id

Description:

- Delete a specific tickets by ID.

Request:

- params:

```json
{
  "ticketId": "integer (required)"
}
```

_Response (200 - OK)_

```json
{
  "message": "ticket with id deleted"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "ticket with id not found"
}
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Server error"
}
```

&nbsp;

## Global Error

_Response (500 - Internal Server Error)_

```json
{
  "message": "Server error"
}
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
