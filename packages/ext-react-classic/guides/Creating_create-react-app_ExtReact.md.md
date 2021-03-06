## Creating a new create-react-app project with @sencha/ext-react-classic

## Requirements
Fetch your npm credentials and generate an application.

### Step 1: Retrieve npm Repo Access Credentials
To gain access to the Sencha npm repository:

1. [Start a free trial of ExtReact](https://www.sencha.com/products/extreact/evaluate/).
2. [Purchase ExtReact or Ext JS Enterprise](https://www.sencha.com/store/).

* **Note:** Ext JS enterprise customers already have access to ExtReact.
* **Note:** Existing customers use your support portal credentials. But switch the username, `@` character with `'..'` two periods, so the username would look something like this after it's converted: `name..gmail.com`.

### Step 2: Login to the npm repository
Once you have your credentials login to the npm repo.

```
npm login --registry=https://npm.sencha.com --scope=@sencha
```

### Step 3: Create a React application with create-react-app and ExtReact template

- Run the following:

```sh
npx create-react-app --template @sencha/ext-react-classic ext-react-classic-demo
```

create-react-app will create a new application using the ext-react-classic template
(from the sencha/ext-react git repo)

- When create-react-app is completed, Run the following:

```sh
cd ext-react-classic-demo
```

- To start the ExtReact application, run the following in a terminal window:

```sh
npm start
```

### Step 4 (optional): Changing the theme for an @sencha/ext-react-classic app

- To change the theme, edit 'public/index.html' and uncomment one of the links below this line:

```sh
<link href="%PUBLIC_URL%/ext-runtime-classic/material/material-all.css" rel="stylesheet" type="text/css"></link>
```

The ExtReact application will load in a browser window!
