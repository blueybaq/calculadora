        $(function(){
            $(".valor").click(function(e){
                e.preventDefault();
                var a = $(this).attr("href");
                $(".pantalla").append(a);
                $(".input_valor").val($(".input_valor").val() + a);
            });
            
          /*
            $(".op").click(function(e){
                e.preventDefault();
                var cadena = $('input:hidden').attr('value');
                console.log('cadena');
                
                
                
            });   
        })
        
        */
        /*
        //ATTR
        //attr= sacarte un atributo, por ejemplo, el value, el id, href...
        //attr("nombre_atributo")
        
        //VAL
        //$('input:text').val('cadena de texto'); añade texto
        //$('input:text').val(); extrae el valor que hay en el input
        
        //TEXT
        //text no funciona con input, val si
        //$('input').text('cadena de texto');
        
        
            estructura jquery
            $(function(){
                $('nombre_clase').click(nombre_funcion);
                function nombre_funcion(){
                    alert('hola');
                }
    
                $('nombre_clase').click(function(){
                    alert('hola');
                });
            })
        */  