##########################################################
########             CREATE NEW TABLE             ########
##########################################################

To create a new migration type, and a new Table in the 
Database, type in the following in the Terminal in the 
root folder:
    
-    npx sequelize migration:generate --name Users

'Users' will be the name of the Table created in the 
Database in the example above. In the User Migration file, 
the User shcema is set up.




#######################################################
########             DELETE  TABLE             ########
#######################################################

To revert a migration and delete a Table in the 
Database type in the following in the Terminal:

-   npx sequelize migration:generate:undo

Delete the whole Database by typing:

-   npx sequelize db:migrate:undo:all



############################################################
########             UDPATE  DATABASE               ########
############################################################
-   npx sequelize db:migrate
