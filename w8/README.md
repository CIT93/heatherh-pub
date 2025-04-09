First, renderTbl goes to renderTblHeading to get the value for the "table" variable. Within the renderTblHeading function, first the innerHTML is reset so there aren't multiple instances of the table header rendering. Next, renderTblHeading loops through an array of headings and appends each one to the table header row. Before exiting the renderTblHeading function, the table header is appended to the table.

The "table" is then stored for future use. Using the input provided by the user, the renderTbl function loops through all the items in the array and creates table cells. These table cells are assigned the text content of different values in the array, represented by object keys in the code. Next, the table cells are appended to the table row. In the final part of the code, the table rows are appended to the table and the table is appended to the DIV on the HTML page so it will display.

How to make the edit button populate the cfpdata array with values that we already have:

I think the code should loop over the data in a forEach loop and then render the tables, similar to the renderBody function.

