1- Install create-react-app
    1) npm install -g create-react-app

2- Create an app:
    1) npx create-react-app counter-app
    2) create-react-app counter-app

3- Install Bootstrap:
    1) npm install bootstrap@4.1.1

4- Deploy Production:
    1) npm run build (build folder is created).
    To view the build folder we need to install serve package: npm install -g serve
    Then command: serve -s build

5- Install json-server:
    Command: npm install json-server
    Command: json-server --watch db.json --port 5000 (this will create a db.json file, we put our data inside of it)
    
6- Dev required headers for php:
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: GET, POST, OPTIONS, DELETE, PUT');
        header('Access-Control-Allow-Headers: Host, Connection, Accept, Authorization, Content-Type, X-Requested-With, User-Agent, Referer, Methods');
        if($_SERVER["REQUEST_METHOD"]== "OPTIONS"){
            echo "";die;
        }
