# Route Doc

## Program for automatically documenting the routes within an application.

Running the `dirdoc` script will search your application directory and look for files with the extension `.dd`. Add a description of what lives in each directory or other data in the `.dd` file to have it output to the documentation.

## Running the application

### `npm install dirdoc`

Create a script in the projects package.json to run `dirdoc`. When the script is called, it will automatically output your documentation in the file `DirectoryDoc.md` on the root level.

## Structuring a .dd file

A `.dd` can be added at any level of the application. Treat the `.dd` file as a `.txt` file and add whatever text you want to put outputted along with the file path in the documentation.
