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

### Creating frontend angular ionic

1. Install Ionic CLI: First, ensure that you have the Ionic CLI installed:

```
npm install -g @ionic/cli
```

2. Create an Ionic Angular Project: Create a new Ionic project:

```
ionic start NoteApp blank --type=angular
cd NoteApp
```

3. Build the Angular Application

    1. Create the Ionic Angular Project
    ```
    ionic start NoteApp blank --type=angular
    cd NoteApp
    ```

    2. Generate Angular Services and Components

    Next, generate the necessary Angular services and components for your note-taking app. We'll need a service to handle HTTP requests and components for listing notes and creating a new note.

    ```
    ionic generate service services/note
    ionic generate component components/note-list
    ionic generate component components/note-create
    ```

    3. Set Up the Note Service

    Open src/app/services/note.service.ts and implement the service to interact with your .NET backend:

    4. Display Notes with NoteListComponent

    -  Create the HTML template for the note list at src/app/components/note-list/note-list.component.html:

    5. Create Notes with NoteCreateComponent

    Open src/app/components/note-create/note-create.component.ts and implement the logic to create notes:

    6. Create the HTML template for the note creation form at src/app/components/note-create/note-create.component.html:

    7. Set Up Routing

    8. update src/app/app.component.ts

    9. Ensure Main Entry Point Includes Routing main.ts

    Update the AppModule to include all the necessary imports. Open src/app/app.module.ts:

    probably main.ts

4. Build for Web: To prepare your Ionic Angular app for the web (this will generate static files like HTML, CSS, and JS):

```
ionic build --prod
```

5. Create Electron Wrapper: To make your web app into a desktop application, you'll use Electron:

    - install electron

    ```
    npm install electron --save-dev
    ```

    - Create an electron.js file in the root of your project:
    ```
    const { app, BrowserWindow } = require('electron');
    const path = require('path');

    function createWindow () {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
        preload: path.join(__dirname, 'preload.js')
        }
    });

    win.loadFile('www/index.html');
    }

    app.whenReady().then(() => {
    createWindow();

    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
    });

    app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit();
    });
    ```

    - Update package.json to add Electron scripts:

    ```
    "scripts": {
      "electron:start": "electron electron.js"
    }
    ```

6. Run Your Electron App: You can now run your Electron app:

```
npm run electron:start
```

7. Package Your App: Use a tool like electron-packager to package your application into an executable:

```
npm install -g electron-packager
electron-packager . NoteApp --platform=win32 --arch=x64 --overwrite
```


