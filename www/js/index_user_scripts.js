/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  Button */
    $(document).on("click", ".uib_w_5", function(evt)
    {
         /*global activate_page */
         activate_page("#principal"); 
    });
    
        /* listitem  List item */
    
    
        /* listitem  Saida */
    
    
        /* listitem  Saida */
    $(document).on("click", ".uib_w_7", function(evt)
    {
         /*global activate_page */
         activate_page("#saida"); 
    });
    
        /* listitem  Culto */
    $(document).on("click", ".uib_w_8", function(evt)
    {
         /*global activate_page */
         activate_page("#culto"); 
    });
    
        /* listitem  Lavanderia */
    $(document).on("click", ".uib_w_9", function(evt)
    {
         /*global activate_page */
         activate_page("#culto"); 
    });
    
        /* listitem  Renovação */
    $(document).on("click", ".uib_w_11", function(evt)
    {
         /*global activate_page */
         activate_page("#Renovacao"); 
    });
    
        /* listitem  Calendário */
    $(document).on("click", ".uib_w_12", function(evt)
    {
         /*global activate_page */
         activate_page("#Calendario"); 
    });
    
        /* listitem  CRM */
    $(document).on("click", ".uib_w_13", function(evt)
    {
         /*global activate_page */
         activate_page("#CRM"); 
    });
    
        /* graphic button  #Saida */
    $(document).on("click", "#Saida", function(evt)
    {
         /*global activate_page */
         activate_page("#saida"); 
    });
    
        /* graphic button  Culto */
    $(document).on("click", ".uib_w_7", function(evt)
    {
         /*global activate_page */
         activate_page("#culto"); 
    });
    
        /* graphic button  Lavanderia */
    $(document).on("click", ".uib_w_8", function(evt)
    {
         /*global activate_page */
         activate_page("#Lavanderia"); 
    });
    
        /* graphic button  Renovação */
    $(document).on("click", ".uib_w_9", function(evt)
    {
         /*global activate_page */
         activate_page("#Renovacao"); 
    });
    
        /* graphic button  Calendário */
    $(document).on("click", ".uib_w_10", function(evt)
    {
         /*global activate_page */
         activate_page("#Calendario"); 
    });
    
        /* graphic button  CRM */
    $(document).on("click", ".uib_w_11", function(evt)
    {
         /*global activate_page */
         activate_page("#CRM"); 
    });
    
        /* button  Voltar */
    $(document).on("click", ".uib_w_18", function(evt)
    {
         /*global activate_page */
         activate_page("#principal"); 
    });
    
        /* button  Button */
    $(document).on("click", ".uib_w_18", function(evt)
    {
         /*global activate_page */
         activate_page("#principal"); 
    });
    
        /* button  Button */
    $(document).on("click", ".uib_w_19", function(evt)
    {
         /*global activate_page */
         activate_page("#principal"); 
    });
    
        /* button  Button */
    $(document).on("click", ".uib_w_20", function(evt)
    {
         /*global activate_page */
         activate_page("#principal"); 
    });
    
        /* button  Voltar */
    $(document).on("click", ".uib_w_21", function(evt)
    {
         /*global activate_page */
         activate_page("#principal"); 
    });
    
        /* button  Button */
    $(document).on("click", ".uib_w_22", function(evt)
    {
         /*global activate_page */
         activate_page("#principal"); 
    });
    
        /* button  Voltar */
    $(document).on("click", ".uib_w_23", function(evt)
    {
         /*global activate_page */
         activate_page("#principal"); 
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
