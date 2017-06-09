# Google-Books-Search

This is a simple Google Books Search application built on top of angular 2. 

Search results are shown in an intuitive UI after calling the API endpoint.

The API from which the data has been fetched is:

<br>

 https://www.googleapis.com/books/v1/volumes?q=
 
 <br>
 
 API with an example query is :
 
 e.g : https://www.googleapis.com/books/v1/volumes?q=harry
 
 <br>
 
 ## Description:

##### The user types any query into the search box :

![Search Text Box](https://github.com/yoshi2095/Google-Books-Search/blob/master/src/images/Screenshot-18.png)

##### And the corresponding results (at most 10) are displayed. Few metadata of these books like thumbnail, name, publisher, publishing date, description, etc. is also displayed:

![Results](https://github.com/yoshi2095/Google-Books-Search/blob/master/src/images/Screenshot-Google%20Books%20Search%20-%20Google%20Chrome.png)


## To see it in action:

### Pre-requisites: `node.js`, `npm`. (these should be pre-installed)

### Clone the repo:

`git clone https://github.com/yoshi2095/Google-Books-Search.git my-app`

### Then enter the repo:

`cd my-app`

### Install the node packages:

`npm install`

### Start the server:

`npm start`


