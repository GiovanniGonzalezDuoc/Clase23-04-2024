import { robots } from "./robots.js";
//Find
export const getRobotByID = (id='013') => {
    //Find = Encontrar ColdBack:Funcion que se pasa por parametros
    return robots.find((robot)=>{
        return robot.id===id;
    });

}
//Filter
export const getRobotBySeries = (series=1) =>{
    //Filter = Filtrar Trae mas de un dato almacenado
    return robots.filter((robot)=>{
        return robot.series===series
    });
}

//Crea formato de la carta
const createCard = (series, id, name, weapon, avatar, sprite1) => {
    return `
        <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="card">
                <img src="${avatar}" class="card-img-top" alt="${name}">
                <img src="${sprite1}" class="card-img-top mt-1 w-50" alt="${name}">
                <div class="card-body">
                    <h5 class="card-title">${name}</h5>
                    <p>${series}</p>
                    <p>${weapon}</p>
                </div>
            </div>
        </div>
    `;
};

//Le asigna los valores a cada card
export const robotCardsRow = document.getElementById('robotCardsRow');
    robots.map((robot) => {
        const card = createCard(robot.series, robot.id, robot.name, robot.weapon, robot.avatar, robot.sprite1);
        robotCardsRow.innerHTML += card; // Agregar la tarjeta al HTML acumulado
});
