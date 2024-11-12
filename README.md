## Creating Project
### Backend

1. initialize dotnet project
```
dotnet new webapi -n NoteAppBackend
cd NoteAppBackend
```

2. Install Necessary Packages
- we need sqlite and entity framework
```
dotnet add package Microsoft.EntityFrameworkCore.Sqlite
dotnet add package Microsoft.EntityFrameworkCore.Design
```

3. Configure Entity Framework Core and SQLite

    1. Create a new Models directory and add a Note.cs file for your data model:

    2. Create a new Data directory and add a NoteContext.cs file for your database context:

    3. Configure the database context in Startup.cs:

    4. setup Program.cs to use starup.cs file

4. api controller

    1. Create a new Controllers directory and add a NotesController.cs file for your API controller:

5. Initialize database

    Add a migration and update the database:

    ```
    dotnet ef migrations add InitialCreate
    dotnet ef database update
    ```

6. add cors

    1. Install the CORS Package
    First, you need to install the Microsoft.AspNetCore.Cors package. Open a terminal in your backend project directory and run:

    ```
    dotnet add package Microsoft.AspNetCore.Cors
    ```

    2. enable cors in startup.css plage

    ----

### backend project structure

NoteAppBackend/

│

├── Controllers/

│   └── NotesController.cs

│

├── Data/

│   └── NoteContext.cs

│

├── Models/

│   └── Note.cs

│

├── Properties/

│

├── appsettings.json

├── Program.cs

├── Startup.cs

├── NoteAppBackend.csproj

------

deleting notes on creating angular frontend, because switched to React.