# Route Doc

## Program for automatically documenting the routes within an application.

Running the `route-doc` script will search your application directory and look for files with the extension `.rd`. Add a description of what lives in each directory or other data in the `.rd` file to have it output to the documentation.

## Running the application

### `npm install route-doc`

Create a script in the projects package.json to run `route-doc`. When the script is called, it will automatically output your documentation in the file `RouteDoc.md` on the root level.

## Structuring a .rd file

A `.rd` can be added at any level of the application. Treat the `.rd` file as a `.txt` file and add whatever text you want to put outputted along with the file path in the documentation.
