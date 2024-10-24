const fs = require('fs');
const path = require('path');

function createVar(varname) {
    const variablesPath = path.join(__dirname, 'variables.json');

    if (!fs.existsSync(variablesPath)) {
        console.error(`Error: ${variablesPath} not found.`);
        return;
    }

    let variables = JSON.parse(fs.readFileSync(variablesPath, 'utf8'));

    if (variables[varname] !== undefined) {
        console.log(`Variable "${varname}" already exists in variables.json.`);
        return;
    }

    variables[varname] = "";

    fs.writeFileSync(variablesPath, JSON.stringify(variables, null, 2), 'utf8');
    console.log(`Variable "${varname}" added to variables.json.`);
}

function fetchVar(varname, userid = 'global') {
    const variablesPath = path.join(__dirname, 'variables.json');

    if (!fs.existsSync(variablesPath)) {
        console.error(`Error: ${variablesPath} not found.`);
        return null;
    }

    let variables = JSON.parse(fs.readFileSync(variablesPath, 'utf8'));

    if (!variables[varname]) {
        console.log(`Variable "${varname}" not found in variables.json.`);
        return null;
    }

    let value = variables[varname][userid];
    if (value === undefined) {
        value = variables[varname]['global'];
    }

    return value;
}

function setVar(varname, varvalue, userid = 'global') {
    const variablesPath = path.join(__dirname, 'variables.json');

    if (!fs.existsSync(variablesPath)) {
        console.error(`Error: ${variablesPath} not found.`);
        return;
    }

    let variables = JSON.parse(fs.readFileSync(variablesPath, 'utf8'));

    if (!variables[varname]) {
        variables[varname] = {};
    }

    variables[varname][userid] = varvalue;

    fs.writeFileSync(variablesPath, JSON.stringify(variables, null, 2), 'utf8');
    console.log(`Variable "${varname}" set to "${varvalue}" for userid "${userid}" in variables.json.`);
}

module.exports = {
    createVar,
    fetchVar,
    setVar
};
