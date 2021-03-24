1- Install create-react-app
    Command line: npm install -g create-react-app

2- Create an app:
    Command line: 1) npx create-react-app counter-app
                  2) create-react-app counter-app

3- Install Bootstrap:
    Command line: npm install bootstrap@4.1.1

4- Deploy Production:
    Command line: npm run build (build folder is created).
    To view the build folder we need to install serve package: npm install -g serve
    Then command: serve -s build

5- Install json-server:
    Command: npm install json-server
    Command: json-server --watch db.json --port 5000 (this will create a db.json file, we put our data inside of it)
    