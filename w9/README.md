First, renderTbl goes to renderTblHeading to get the value for the "table" variable. Within the renderTblHeading function, first the innerHTML is reset so there aren't multiple instances of the table header rendering. Next, renderTblHeading loops through an array of headings and appends each one to the table header row. Before exiting the renderTblHeading function, the table header is appended to the table.

The "table" is then stored for future use. Using the input provided by the user, the renderTbl function loops through all the items in the array and creates table cells. These table cells are assigned the text content of different values in the array, represented by object keys in the code. Next, the table cells are appended to the table row. In the final part of the code, the table rows are appended to the table and the table is appended to the DIV on the HTML page so it will display.

How to make the edit button populate the cfpdata array with values that we already have:

I think the code should loop over the data in a forEach loop and then render the tables, similar to the renderBody function.

## About Local Storage

Local storage is a JSON object that keeps key value pairs on the user's computer in a file. This means that a few days after the user has left the site, she can go back and her data will still be there. In order to use localStorage, first you must stringify the key/value pairs so they can be stored as JSON. To retrieve the key/value pairs from local storage, you must parse the data to remove all of the excess quote marks and escape characters. Once the data is parsed it becomes a regular JS object and can be used in JS.