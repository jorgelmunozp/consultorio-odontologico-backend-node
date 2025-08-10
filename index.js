// DEV
const ip = 'localhost';
const puerto = '3000';
const urlApiCitas = 'http://'+ip+':'+puerto+'/citas';
const urlApiPacientes = 'http://'+ip+':'+puerto+'/pacientes';
const urlApiDoctores = 'http://'+ip+':'+puerto+'/doctores';
const urlApiConsultorios = 'http://'+ip+':'+puerto+'/consultorios';
const urlApiTratamientos = 'http://'+ip+':'+puerto+'/tratamientos';
const urlApiEspecialidades = 'http://'+ip+':'+puerto+'/especialidades';
const urlApiGeneros = 'http://'+ip+':'+puerto+'/generos';
const urlApiEpss = 'http://'+ip+':'+puerto+'/epss';

// NON-PROD
// const urlApiDatabase = 'https://jorgelmunozp.github.io/consultorio-odontologico-backend-node/database.json';

// const urlApiCitas = 'https://jorgelmunozp.github.io/consultorio-odontologico-backend-node/citas.json';
// const urlApiPacientes = 'https://jorgelmunozp.github.io/consultorio-odontologico-backend-node/pacientes.json';
// const urlApiDoctores = 'https://jorgelmunozp.github.io/consultorio-odontologico-backend-node/doctores.json';
// const urlApiConsultorios = 'https://jorgelmunozp.github.io/consultorio-odontologico-backend-node/consultorios.json';
// const urlApiTratamientos = 'https://jorgelmunozp.github.io/consultorio-odontologico-backend-node/tratamientos.json';
// const urlApiEspecialidades = 'https://jorgelmunozp.github.io/consultorio-odontologico-backend-node/especialidades.json';
// const urlApiGeneros = 'https://jorgelmunozp.github.io/consultorio-odontologico-backend-node/generos.json';
// const urlApiEpss = 'https://jorgelmunozp.github.io/consultorio-odontologico-backend-node/epss.json';

// PROD
// const urlApiDatabase = 'https://jorgelmunozp.github.io/consultorio-odontologico-backend-node/database';
// const urlApiCitas = 'https://jorgelmunozp.github.io/consultorio-odontologico-backend-node/citas';
// const urlApiPacientes = 'https://jorgelmunozp.github.io/consultorio-odontologico-backend-node/pacientes';
// const urlApiDoctores = 'https://jorgelmunozp.github.io/consultorio-odontologico-backend-node/doctores';
// const urlApiConsultorios = 'https://jorgelmunozp.github.io/consultorio-odontologico-backend-node/consultorios';
// const urlApiTratamientos = 'https://jorgelmunozp.github.io/consultorio-odontologico-backend-node/tratamientos';
// const urlApiEspecialidades = 'https://jorgelmunozp.github.io/consultorio-odontologico-backend-node/especialidades';
// const urlApiGeneros = 'https://jorgelmunozp.github.io/consultorio-odontologico-backend-node/generos';
// const urlApiEpss = 'https://jorgelmunozp.github.io/consultorio-odontologico-backend-node/epss';

const formatterPeso = new Intl.NumberFormat('es-CO', {   //Formato moneda $ pesos Colmbianos
  style: 'currency',
  currency: 'COP',
  minimumFractionDigits: 0
});
const formatterMiles = new Intl.NumberFormat('es-CO', {   //Formato miles para cantidades
  style: 'decimal',
  minimumFractionDigits: 0
});

// fetch(urlApiDatabase)                 //API REST para la simulación de la tabla citas de la base de datos
//   .then(response => response.json())
//   .then(data => {
//     // Citas
//       const citas = data.citas;
//       let contenidoCitas = document.getElementById('contenidoCitas');
//       const headerCitas = `
//         <div class="columnaContenido">
//           <hr/>
//           <h3> Citas Médicas </h3>
//           <hr/>
//           <table border='1'>
//             <tr>
//               <th> N° </th>
//               <th> Paciente </th>
//               <th> Fecha </th>
//               <th> Hora </th>
//               <th> Consultorio </th>
//               <th> Médico </th>
//               <th> Tratamiento </th>
//             </tr>
//       `;
//       let bodyCitas = [];
//       for (const [i] of citas.entries()) {
//         bodyCitas[i] = `
//           <tr>
//             <td> ${citas[i].id} </td>
//             <td> ${citas[i].cita.paciente} </td>
//             <td> ${citas[i].cita.fecha} </td>
//             <td> ${citas[i].cita.hora} </td>
//             <td> ${citas[i].cita.consultorio} </td>
//             <td> ${citas[i].cita.doctor} </td>
//             <td> ${citas[i].cita.tratamiento} </td>
//         </tr>  
//       `};
//       const footerCitas = `
//             </table>
//           </div>
//           <br></br><br></br><br></br><br></br>
//       `;
//       contenidoCitas.innerHTML = headerCitas + bodyCitas.join('') + footerCitas;
        
//     // Pacientes
//       const pacientes = data.pacientes;
//       let contenidoPacientes = document.getElementById('contenidoPacientes');
//       const headerPacientes = `
//         <div class="columnaContenido">  
//           <hr/>
//           <h3> Pacientes Afiliados </h3>
//           <hr/>
//           <table border='1'>
//             <tr>
//               <th> Id </th>
//               <th> Identificación </th>
//               <th> Nombre </th>
//               <th> Apellido </th>
//               <th> Género </th>
//               <th> Eps </th>
//             </tr>  
//       `;
//       let bodyPacientes = [];
//       for (const [i] of pacientes.entries()) {
//         bodyPacientes[i] = `
//           <tr>
//             <td> ${pacientes[i].id} </td>
//             <td> ${pacientes[i].paciente.identificacion} </td>
//             <td> ${pacientes[i].paciente.nombre} </td>
//             <td> ${pacientes[i].paciente.apellido} </td>
//             <td> ${pacientes[i].paciente.genero} </td>
//             <td> ${pacientes[i].paciente.eps} </td>
//           </tr>
//       `};
//       const footerPacientes = `
//           </table>
//         </div>
//         <br></br><br></br><br></br><br></br><br></br>
//       `;
//       contenidoPacientes.innerHTML = headerPacientes + bodyPacientes.join('') + footerPacientes;
    
//     // Doctores
//       const doctores = data.doctores;
//       let contenidoDoctores = document.getElementById('contenidoDoctores');
//       const headerDoctores =  `  
//         <div class="columnaContenido"> 
//           <hr/>
//           <h3> Doctores Disponibles </h3>
//           <hr/>
//             <table border='1'>
//               <tr>
//                 <th> Id </th>
//                 <th> Nombre </th>
//                 <th> Apellido </th>
//                 <th> Especialidad </th>
//               </tr>       
//           `;
//           let bodyDoctores = [];
//           for (const [i] of doctores.entries()) {
//             bodyDoctores[i] = `
//                   <tr>
//                     <td> ${doctores[i].id} </td>
//                     <td> ${doctores[i].doctor.nombre} </td>
//                     <td> ${doctores[i].doctor.apellido} </td>
//                     <td> ${doctores[i].doctor.especialidad} </td>
//                   </tr>
//           `};
//           const footerDoctores = `  
//                   </table>
//                 </div>
//                 <br></br><br></br><br></br><br></br><br></br><br></br>
//           `;
//           contenidoDoctores.innerHTML = headerDoctores + bodyDoctores.join('') + footerDoctores;

//     // Consultorios
//       const consultorios = data.consultorios;
//       let contenidoConsultorios = document.getElementById('contenidoConsultorios');
//       const headerConsultorios = ` 
//       <div class="columnaContenido">  
//       <hr/>
//       <h3> Consultorios Disponibles </h3>
//       <hr/>
//       <table border='1'>
//         <tr>
//           <th> N° </th>
//           <th> Número </th>
//           <th> Consultorio </th>
//         </tr>  
//       `;
//       let bodyConsultorios = [];
//       for (const [i] of consultorios.entries()) {
//         bodyConsultorios[i] = `
//           <tr>
//             <td> ${consultorios[i].id} </td>
//             <td> ${consultorios[i].consultorio.numero} </td>
//             <td> ${consultorios[i].consultorio.nombre} </td>
//           </tr> 
//       `};
//       const footerConsultorios = ` 
//             </table>
//           </div>        
//           <br></br><br></br><br></br><br></br><br></br><br></br>

//       `;
//       contenidoConsultorios.innerHTML = headerConsultorios + bodyConsultorios.join('') + footerConsultorios;

//     // Tratamientos
//       const tratamientos = data.tratamientos;
//       let contenidoTratamientos = document.getElementById('contenidoTratamientos');
//       const headerTratamientos = `
//         <div class="columnaContenido"> 
//         <hr/>
//         <h3> Tratamientos Autorizados </h3>
//         <hr/>
//         <table border='1'>
//           <tr>
//             <th> N° </th>
//             <th> Tratamiento </th>
//             <th> Consultorio </th>
//             <th> Doctor </th>
//           </tr>      
//         `;
//         let bodyTratamientos = [];
//           for (const [i] of tratamientos.entries()) {
//             bodyTratamientos[i] = `
//               <tr>
//                 <td> ${tratamientos[i].id} </td>
//                 <td> ${tratamientos[i].tratamiento.especialidad} </td>
//                 <td> ${tratamientos[i].tratamiento.consultorio} </td>
//                 <td> ${tratamientos[i].tratamiento.doctor} </td>
//               </tr>
//         `};
//         const footerTratamientos = `
//                 </table>
//               </div>
//               <br></br><br></br><br></br><br></br><br></br><br></br>
//         `;
//         contenidoTratamientos.innerHTML = headerTratamientos + bodyTratamientos.join('') + footerTratamientos; 

//     // Especialidades
//       const especialidades = data.especialidades;
//       let contenidoEspecialidades = document.getElementById('contenidoEspecialidades');
//       const headerEspecialidades = ` 
//       <div class="columnaContenido">  
//       <hr/>
//       <h3> Especialidades Autorizadas </h3>
//       <hr/>
//       <table border='1'>
//         <tr>
//           <th> N° </th>
//           <th> Especialidad </th>
//         </tr>  
//       `;
//       let bodyEspecialidades = [];
//       for (const [i] of especialidades.entries()) {
//         bodyEspecialidades[i] = `
//           <tr>
//             <td> ${especialidades[i].id} </td>
//             <td> ${especialidades[i].especialidad.nombre} </td>
//           </tr> 
//       `};
//       const footerEspecialidades = ` 
//             </table>
//           </div>        
//           <br></br><br></br><br></br><br></br><br></br><br></br>

//       `;
//       contenidoEspecialidades.innerHTML = headerEspecialidades + bodyEspecialidades.join('') + footerEspecialidades;

//     // Epss
//       const epss = data.epss;
//       let contenidoEpss = document.getElementById('contenidoEpss');
//       const headerEpss = ` 
//       <div class="columnaContenido">  
//       <hr/>
//       <h3> Epss con Convenio </h3>
//       <hr/>
//       <table border='1'>
//         <tr>
//           <th> N° </th>
//           <th> Especialidad </th>
//         </tr>  
//       `;
//       let bodyEpss = [];
//       for (const [i] of epss.entries()) {
//         bodyEpss[i] = `
//           <tr>
//             <td> ${epss[i].id} </td>
//             <td> ${epss[i].eps.nombre} </td>
//           </tr> 
//       `};
//       const footerEpss = ` 
//             </table>
//           </div>        
//           <br></br><br></br><br></br><br></br><br></br><br></br>

//       `;
//       contenidoEpss.innerHTML = headerEpss + bodyEpss.join('') + footerEpss;

//     // Generos
//       const generos = data.generos;
//       let contenidoGeneros = document.getElementById('contenidoGeneros');
//       const headerGeneros = ` 
//       <div class="columnaContenido">  
//       <hr/>
//       <h3> Géneros </h3>
//       <hr/>
//       <table border='1'>
//         <tr>
//           <th> N° </th>
//           <th> Especialidad </th>
//         </tr>  
//       `;
//       let bodyGeneros = [];
//       for (const [i] of generos.entries()) {
//         bodyGeneros[i] = `
//           <tr>
//             <td> ${generos[i].id} </td>
//             <td> ${generos[i].genero.nombre} </td>
//           </tr> 
//       `};
//       const footerGeneros = ` 
//             </table>
//           </div>        
//           <br></br><br></br><br></br><br></br><br></br><br></br>

//       `;
//       contenidoGeneros.innerHTML = headerGeneros + bodyGeneros.join('') + footerGeneros;

//   });

fetch(urlApiCitas)                 //API REST para la simulación de la tabla citas de la base de datos
  .then(response => response.json())
  .then(citas => {
    let contenidoCitas = document.getElementById('contenidoCitas');

      const headerCitas = `
        <div class="columnaContenido">
          <hr/>
          <h3> Citas Médicas </h3>
          <hr/>
          <table border='1'>
            <tr>
              <th> N° </th>
              <th> Paciente </th>
              <th> Fecha </th>
              <th> Hora </th>
              <th> Consultorio </th>
              <th> Médico </th>
              <th> Tratamiento </th>
            </tr>
      `;

      let bodyCitas = [];
      for (const [i] of citas.entries()) {
        bodyCitas[i] = `
          <tr>
            <td> ${citas[i].id} </td>
            <td> ${citas[i].cita.paciente} </td>
            <td> ${citas[i].cita.fecha} </td>
            <td> ${citas[i].cita.hora} </td>
            <td> ${citas[i].cita.consultorio} </td>
            <td> ${citas[i].cita.doctor} </td>
            <td> ${citas[i].cita.tratamiento} </td>
        </tr>  
      `};

      const footerCitas = `
            </table>
          </div>
          <br></br><br></br><br></br><br></br>
      `;

      contenidoCitas.innerHTML = headerCitas + bodyCitas.join('') + footerCitas;
});

fetch(urlApiPacientes)                 //API REST para la simulación de la tabla pacientes de la base de datos
  .then(response => response.json())
  .then(pacientes => {
      let contenidoPacientes = document.getElementById('contenidoPacientes');

      const headerPacientes = `
        <div class="columnaContenido">  
          <hr/>
          <h3> Pacientes Afiliados </h3>
          <hr/>
          <table border='1'>
            <tr>
              <th> Id </th>
              <th> Identificación </th>
              <th> Nombre </th>
              <th> Apellido </th>
              <th> Género </th>
              <th> Eps </th>
            </tr>  
        `;

        let bodyPacientes = [];
        for (const [i] of pacientes.entries()) {
          bodyPacientes[i] = `
            <tr>
              <td> ${pacientes[i].id} </td>
              <td> ${pacientes[i].paciente.identificacion} </td>
              <td> ${pacientes[i].paciente.nombre} </td>
              <td> ${pacientes[i].paciente.apellido} </td>
              <td> ${pacientes[i].paciente.genero} </td>
              <td> ${pacientes[i].paciente.eps} </td>
            </tr>
        `};

        const footerPacientes = `
            </table>
          </div>
          <br></br><br></br><br></br><br></br><br></br>
        `;

        contenidoPacientes.innerHTML = headerPacientes + bodyPacientes.join('') + footerPacientes;
});

fetch(urlApiTratamientos)                 //API REST para la simulación de la tabla tratamientos de la base de datos
  .then(response => response.json())
  .then(tratamientos => {
      let contenidoTratamientos = document.getElementById('contenidoTratamientos');

      const headerTratamientos = `
        <div class="columnaContenido"> 
        <hr/>
        <h3> Tratamientos Autorizados </h3>
        <hr/>
        <table border='1'>
          <tr>
            <th> N° </th>
            <th> Tratamiento </th>
            <th> Consultorio </th>
            <th> Doctor </th>
          </tr>      
        `;

        let bodyTratamientos = [];
          for (const [i] of tratamientos.entries()) {
            bodyTratamientos[i] = `
              <tr>
                <td> ${tratamientos[i].id} </td>
                <td> ${tratamientos[i].tratamiento.especialidad} </td>
                <td> ${tratamientos[i].tratamiento.consultorio} </td>
                <td> ${tratamientos[i].tratamiento.doctor} </td>
              </tr>
        `};
 
        const footerTratamientos = `
                </table>
              </div>
              <br></br><br></br><br></br><br></br><br></br><br></br>
        `;

        contenidoTratamientos.innerHTML = headerTratamientos + bodyTratamientos.join('') + footerTratamientos; 
  });

fetch(urlApiDoctores)                 //API REST para la simulación de la tabla doctores de la base de datos
  .then(response => response.json())
  .then(doctores => {
      let contenidoDoctores = document.getElementById('contenidoDoctores');

      const headerDoctores =  `  
        <div class="columnaContenido"> 
          <hr/>
          <h3> Doctores Disponibles </h3>
          <hr/>
            <table border='1'>
              <tr>
                <th> Id </th>
                <th> Nombre </th>
                <th> Apellido </th>
                <th> Especialidad </th>
              </tr>       
          `;

          let bodyDoctores = [];
          for (const [i] of doctores.entries()) {
            bodyDoctores[i] = `
                  <tr>
                    <td> ${doctores[i].id} </td>
                    <td> ${doctores[i].doctor.nombre} </td>
                    <td> ${doctores[i].doctor.apellido} </td>
                    <td> ${doctores[i].doctor.especialidad} </td>
                  </tr>
          `};

          const footerDoctores = `  
                  </table>
                </div>
                <br></br><br></br><br></br><br></br><br></br><br></br>
          `;

          contenidoDoctores.innerHTML = headerDoctores + bodyDoctores.join('') + footerDoctores;
  });

fetch(urlApiConsultorios)                 //API REST para la simulación de la tabla consultorios de la base de datos
  .then(response => response.json())
  .then(consultorios => {
      let contenidoConsultorios = document.getElementById('contenidoConsultorios');

      const headerConsultorios = ` 
      <div class="columnaContenido">  
      <hr/>
      <h3> Consultorios Disponibles </h3>
      <hr/>
      <table border='1'>
        <tr>
          <th> N° </th>
          <th> Número </th>
          <th> Consultorio </th>
        </tr>  
      `;

      let bodyConsultorios = [];
      for (const [i] of consultorios.entries()) {
        bodyConsultorios[i] = `
          <tr>
            <td> ${consultorios[i].id} </td>
            <td> ${consultorios[i].consultorio.numero} </td>
            <td> ${consultorios[i].consultorio.nombre} </td>
          </tr> 
      `};

      const footerConsultorios = ` 
            </table>
          </div>        
          <br></br><br></br><br></br><br></br><br></br><br></br>

      `;

      contenidoConsultorios.innerHTML = headerConsultorios + bodyConsultorios.join('') + footerConsultorios;
  });

fetch(urlApiEspecialidades)                 //API REST para la simulación de la tabla consultorios de la base de datos
  .then(response => response.json())
  .then(especialidades => {
      let contenidoEspecialidades = document.getElementById('contenidoEspecialidades');

      const headerEspecialidades = ` 
      <div class="columnaContenido">  
      <hr/>
      <h3> Especialidades Autorizadas </h3>
      <hr/>
      <table border='1'>
        <tr>
          <th> N° </th>
          <th> Especialidad </th>
        </tr>  
      `;

      let bodyEspecialidades = [];
      for (const [i] of especialidades.entries()) {
        bodyEspecialidades[i] = `
          <tr>
            <td> ${especialidades[i].id} </td>
            <td> ${especialidades[i].especialidad.nombre} </td>
          </tr> 
      `};

      const footerEspecialidades = ` 
            </table>
          </div>        
          <br></br><br></br><br></br><br></br><br></br><br></br>

      `;

      contenidoEspecialidades.innerHTML = headerEspecialidades + bodyEspecialidades.join('') + footerEspecialidades;
  });