# HCI-Task

This is a Vite React TypeScript with .Net 8 Web API using Microsoft SQL and .Net 8 Entity Framework.

### Run the solution in local environment:
1. clone the project
2. the project has athreeProjects:
    - HCI-Task.Server
    - hci-task.client
    - HCI-Task.Tests
    - Also has a Microsoft Visual Studio solution
3. Data Migration with data seeding is already included:
    - From the server after installing dependecies go to Tools> NuGet Package Manager> Package Manager Console
    - run update-database
    - after that you'll have data populated with users, hospitals, patients & visits
    - 1st user (hci_admin has access to all hospitals)
  
## Next features:
- Update DataBase adding fields & other entitis to complete hte feature
- Authentication
- Authorization
- Implement propper state management

  
