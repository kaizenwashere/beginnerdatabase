# BEGINNER DATABASE
- Are you a beginner and want to store variables? This package is for you!

## Functions
### setVar(VariableName, VariableValue, User)
User is optional, it could be empty or provide an string.

### fetchVar(VariableName)
Gets VariableName's value.

### createVar(VariableName)
Creates an variable with name VariableName.

## Example
```javascript
const db = require('beginnerdatabase'); // Needed
db.createVar('hello') // Creates a variable named 'hello'
db.setVar('hello', 'Hello There!') // Sets "hello" variable's value to "Hello There!"
console.log(db.fetchVar('hello')) // Returns "Hello There!"
```
