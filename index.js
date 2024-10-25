const fs = require('fs');
const path = require('path');

function createVar(varname) {
    const variablesPath = path.join(__dirname, 'variables.json');

    if (!fs.existsSync(variablesPath)) {
        return;
    }

    let variables = JSON.parse(fs.readFileSync(variablesPath, 'utf8'));

    if (variables[varname] !== undefined) {
        return;
    }

    variables[varname] = "";

    fs.writeFileSync(variablesPath, JSON.stringify(variables, null, 2), 'utf8');
}

function fetchVar(varname, userid = 'global') {
    const variablesPath = path.join(__dirname, 'variables.json');

    if (!fs.existsSync(variablesPath)) {
        return null;
    }

    let variables = JSON.parse(fs.readFileSync(variablesPath, 'utf8'));

    if (!variables[varname]) {
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
        return;
    }

    let variables = JSON.parse(fs.readFileSync(variablesPath, 'utf8'));

    if (!variables[varname]) {
        variables[varname] = {};
    }

    variables[varname][userid] = varvalue;

    fs.writeFileSync(variablesPath, JSON.stringify(variables, null, 2), 'utf8');
}

module.exports = {
    createVar,
    fetchVar,
    setVar
};
