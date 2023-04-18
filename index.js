import {get , save} from "./fs-methods.js"

import inquirer from "inquirer"

const preguntas =   () => inquirer.prompt([
    {
    type : "number",
    name : "gasto",
    message :"ingresa tu gasto"
},
{
    type : "number",
    name : "gasto",
    message :"ingresa tu gasto"
},
{
    type : "number",
    name : "gasto",
    message :"ingresa tu gasto"
},
])
const  app = async () => {
    const nuevoGasto  = await preguntas();
    console.log("el gasto es de " , nuevoGasto)
    const getData = await get("./users.json")
    getData.push(nuevoGasto)
    await save(getData)





}




app();
