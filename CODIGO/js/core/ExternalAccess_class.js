class ExternalAccess {
    constructor() {
    }    
    
    peticionBackGeneral(formulario, controlador, action, datosextra = null) {
        var datos;
        
        if (formulario === '') {
            datos = new FormData();        }        else {
            let formElement = document.getElementById(formulario);
            datos = new FormData(formElement);
            
            // Asegurarse de que los archivos se incluyan correctamente
            let fileInputs = formElement.querySelectorAll('input[type="file"]');
            fileInputs.forEach(input => {
                if (input.files && input.files[0]) {
                    // Eliminar cualquier valor anterior
                    datos.delete(input.name);
                    // Añadir el archivo
                    datos.append(input.name, input.files[0]);
                }
            });
        }        datos.append('controlador', controlador);
        datos.append('action', action);
    
        if (datosextra != null) {
            for(var clave in datosextra) {
                datos.append(clave, datosextra[clave]);
            }
        }
          return new Promise(function(resolve) { 
            $.ajax({
                type: "POST",
                url: "http://193.147.87.202/ET2/index.php",
                data: datos,
                processData: false,
                contentType: false
            })            .done(res => {
                resolve(res);
            })
            .fail(res => {
                // Error silencioso - la aplicación manejará los errores según la respuesta
            });
        });
    }
}