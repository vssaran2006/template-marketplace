# README #

Application Name - Template MarketPlace


# Steps to Install Backend API & run the server #

Go to template-marketplace/backend/template-marketplace from the Terminal and install packages by "npm install" or "npm i"

Run the Server with the command - "npm start"

The Template backend API will be up and running in the port "4040" by default 

:::::Template Marketplace Back End Api started and listening at 4040:::::

If any other app is running in same port, Please change to different port by changing in port in below file 

template-marketplace/backend/package.json 

command - 4040 to any available port

"start":"PORT=4040 node template-marketplace-app" and the start the server again 

Run the Server again with the command - "npm start"

# Steps to Install ReactApp & run the server (Develop mode- Out of the box -ReactJs)#

Go to template-marketplace/ui/template-marketplace from the Terminal and install packages by "npm install" or "npm i"

Run the Server with the command - "npm start"

# Template Marketplace is Up & running #

Template marketplace must be up and running - we can slide through all the templates available using # next and previous button # , when you select the template,  the template viewer would show the large image of that template with all the informations like cost,id,description and title.

# Steps to run test #
Go to template-marketplace/ui/template-marketplace from the Terminal

Run the command - "npm test"

# What if the Backend api is not running or down #

When the backend app is not running - the template marketplace would show a graceful message "Sorry, Please try after sometime"

# Template Marketplace - Prod Build (Out of the box -ReactJs)#

Go to template-marketplace/ui/template-marketplace from the Terminal

Run the command - npm run build 

Out of the box React would generate all the binaries into "template-marketplace/ui/template-marketplace/build"

All the bundles would be available in static folder
