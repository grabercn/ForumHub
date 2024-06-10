## Forum Hub

Forum Hub is a website that provides a list of different clickable forums for users to engage in discussions.

### Backend Technologies

1. **Setting up Backend**: Create a Java - Spring Boot project with Maven dependencies.
2. **Database Integration**: Use Hibernate/JPA for database interaction to avoid writing SQL queries.
3. **Backend to Frontend Communication**: Implement RESTful APIs to handle CRUD operations using HTTP methods.
4. **Security**: Implement encryption service for passwords in the login screen.

### Frontend Technologies

1. **Setting up Frontend**: Set up a React project.
2. **Building the Frontend**: Use React components and hooks to build the user interface.
3. **Displaying Data**: Utilize Apollo client to handle HTTP requests and responses and GraphQL to specify the received data.

### Deployment Options

1. **Preferable Option**: Host the website on your own server.
2. **Free Hosting Platforms**: Consider platforms like Heroku or Firebase.
3. **Cloud Services, Free-Tier**: Explore options like DigitalOcean, GCP, or Azure. Be aware of hidden costs.

### Testing

Integration testing for the frontend is recommended.

### Best Practices

- Use version control and provide descriptive commit messages.
- Follow programming paradigms like OOP for Java and functional programming for React.js.
- Maintain consistent code comments and variable naming.
## Forum Hub

Forum Hub is a website that provides a list of different clickable forums for users to engage in discussions.

### Backend Stuff

1. **Setting up Backend**: Create a Java - Spring Boot project with Maven dependencies.
2. **Database Integration**: Use Hibernate/JPA for database interaction to avoid writing SQL queries.
3. **Backend to Frontend Communication**: Implement RESTful APIs to handle CRUD operations using HTTP methods.
4. **Bonus**: Implement encryption service for passwords in the login screen.

### Frontend Stuff

1. **Setting up Frontend**: Set up a React project.
2. **Building the Frontend**: Use React components and hooks to build the user interface.
3. **Displaying Data**: Utilize Apollo client to handle HTTP requests and responses and GraphQL to specify the received data.
4. **Bonus**: Make the website mobile responsive using Tailwind or Bootstrap.
5. **Bonus**: Implement user authentication and authorization around the backend logic.

### Deployment Options

1. **Preferable Option**: Host the website on your own server.
2. **Free Hosting Platforms**: Consider platforms like Heroku or Firebase.
3. **Cloud Services, Free-Tier**: Explore options like DigitalOcean, GCP, or Azure. Be aware of hidden costs.

### Testing

Integration testing for the frontend is recommended.

### Best Practices

- Use version control and provide descriptive commit messages.
- Follow programming paradigms like OOP for Java and functional programming for React.js.
- Maintain consistent code comments and variable naming.
- Document APIs in a Markdown file or similar format.

### Backend Files

#### API/Presentation Layer (Controllers)

- **ForumController**: Handles API requests related to forums.

#### Business Logic/Application Layer (Services)

- **ForumService**: Implements business logic related to forums.

#### Data Access Layer (Repositories)

- **ForumRepository**: Defines methods for interacting with forum data.

#### Entities

- **Forum**: Contains information about a forum, such as its name and description.

#### Forum Pages

- **Feature**: Search for forums and view information about specific forums.
- **Implementation**: Click on a specific forum listing to view details.
- **CRUD**: Read-only.

- **Feature**: Create a new forum.
- **Implementation**: Fill out the necessary information to create a new forum.
- **CRUD**: Create-only.

- **Feature**: Update forum details.
- **Implementation**: Modify the information of an existing forum.
- **CRUD**: Update-only.

- **Feature**: Delete a forum.
- **Implementation**: Remove a forum from the list.
- **CRUD**: Delete-only.


### Backend Files

#### API/Presentation Layer (Controllers)

- **ForumController**: Handles API requests related to forums.

#### Business Logic/Application Layer (Services)

- **ForumService**: Implements business logic related to forums.

#### Data Access Layer (Repositories)

- **ForumRepository**: Defines methods for interacting with forum data.

#### Entities

- **Forum**: Contains information about a forum, such as its name and description.

### Frontend Files

#### Forum Pages

- **Feature**: Search for forums and view information about specific forums.
- **Implementation**: Click on a specific forum listing to view details.
- **CRUD**: Read-only.

- **Feature**: Create a new forum.
- **Implementation**: Fill out the necessary information to create a new forum.
- **CRUD**: Create-only.

- **Feature**: Update forum details.
- **Implementation**: Modify the information of an existing forum.
- **CRUD**: Update-only.

- **Feature**: Delete a forum.
- **Implementation**: Remove a forum from the list.
- **CRUD**: Delete-only.

