import { robots } from "./robots.js";
import {getRobotBySeries,
        getRobotByID,
        robotCardsRow} from "./funciones.js";


console.log(robots[0].series)
console.log(robots[0].id);
console.log(robots[0].name);

const {series,id,name} = robots[0];
console.log('----------------------------------');
console.log(`La serie es :${series}`);
console.log(`El id es: ${id}`);
console.log(`El nombre es: ${name}`);
console.log('----------------------------------');

console.log(getRobotByID("012"));

console.log(getRobotBySeries(2));
console.table(getRobotBySeries(2));

robotCardsRow();
