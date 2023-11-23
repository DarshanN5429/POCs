Step 1. Navigate to the root of the cloned project directory.

Step 2. Install Project Dependencies. 
Terminal: Use your preferred terminal. 
Command: npm install

Step 3. Install JSON Server (if not globally installed). 
Terminal: Use your preferred terminal.
Command: npm install -g json-server

Step 4. Start JSON Server (Ensure you are in the directory containing db.json). 
Terminal: Use a separate terminal window or tab.
Command: json-server --watch db.json --port 3001

Step 5. Run the React App. 
Terminal: Use a separate terminal window or tab. 
Command: npm start