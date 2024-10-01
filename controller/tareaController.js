const { crearTarea,
    buscar
 } = require('../services/tareaServices');

async function guardarTarea(req, res){
    try{
        const { tareaData, personaData } = req.body;
      
        const tarea = await crearTarea(tareaData, personaData);
        res.status(201).json(tarea);
    } catch(error) {
        console.error('Error:', error); 
        res.status(500).json({ error: "Error al guardar la tarea", details: error.message }); // Enviar más detalles del error al cliente
    }
}

async function buscarTareas(req, res){
    try {
        const data = req.body.data.tareaForm
        const nombreTarea = data.identificacion;
        const fechaInicial = data.fechaInicio;
        const fechaFinal = data.fechaFin;
      

        const respuesta = await buscar(
            nombreTarea,
            fechaInicial,
            fechaFinal,
        );
        res.status(200).json(respuesta);
    } catch (error) {
        console.error('Error al buscar la respuesta', error);
        res.status(500).json({ error: 'Error al obtener la respuesta' })
    }
}


module.exports = {
    guardarTarea,
    buscarTareas
}