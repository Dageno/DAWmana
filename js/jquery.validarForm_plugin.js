(function($){
    $.fn.extend({
        validar:function(){
            this.each(function(){
                let $this = $(this);
                switch($this.attr("type")){
                    case "text":
                        $this.focus(function(){
                            
                            $this.keypress(function(){
                                
                                var expresion = /^[a-z0-9ü][a-z0-9ü_]{7,14}$/;
                                var valor = $this.val();
                                
                                if(!expresion.test(valor)){
                                
                                    $this.css({ "background-color" : "#e44e2d" });
                                
                                }else{
                                
                                    $this.css({ "background-color" : "#00ff00" });
                                
                                }
                                
                            });
                            
                        });
                            
                        break;
                    case "email":
                        $this.focus(function(){
                            
                            $this.keypress(function(){
                                
                                var expresion = /^[0-9a-z_\-\.]+@[0-9a-z\-\.]+\.[a-z]{2,4}$/i;
                                    
                                var valor = $this.val();
                                    
                                if(!expresion.test(valor)){
                                    
                                    $this.css({ "background-color" : "#e44e2d" });
                                    
                                }else{
                                    
                                    $this.css({ "background-color" : "#00ff00" });
                                    
                                }
                                
                            });
                            
                        });
                            
                        break;
                    case "password":
                        $this.focus(function(){
                            
                            $this.keypress(function(){
                                
                                var expresion = /^[a-zA-Z0-9]{8,10}$/;
                                    
                                var valor = $this.val();
                                    
                                if(!expresion.test(valor)){
                                    
                                    $this.css({ "background-color" : "#e44e2d" });
                                    
                                }else{
                                    
                                    $this.css({ "background-color" : "#00ff00" });
                                    
                                }
                                
                            });
                            
                        });
                            
                        break;
                    default:
                        $this.focus(function(){
                            
                            $this.keypress(function(){
                                
                                var valor = $this.val();
                                    
                                if(valor == 0){
                                    
                                $this.css({ "background-color" : "#e44e2d" });
                                    
                                }else{
                                    
                                $this.css({ "background-color" : "#00ff00" });
                                    
                                }
                                
                            });
                            
                        });
                        
                    break;

                }
            })
        }
    })
})(jQuery)
