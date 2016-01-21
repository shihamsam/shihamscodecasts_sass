$(document).ready(function(){
    Stripe.setPublishableKey($('meta[]name="stripe-key"').attr('content'));
    
    $("#form-submit-btn").click(function(event){
        
        event.preventDefault();
        
        $('input[type=submit').prop('disabled', true);
        
        var error = false;
        var ccNum = $('#card_number').val(),
         ccvNum = $('#card_code').val(),
         expMonth = $('#card_month').val(),
         expYear = $('#card_year').val();
         
         if(!error){
            Stripe.createToken({
                number:ccNum,
                ccv:ccvNum,
                exp_month:expMonth,
                exp_year:expYear
                
            }, stripeRespondHandler);   
         }
         
         return false;
        
    }); // form submission
    
    function stripeRespondHandler(status, response){
        //get a reference to the form:
        var f = $('#new_user');
        
        //get the token from the response:
        var token = response.id;
        
        //add the token to the Form:
        f.append('<input type="hidden" name="user[stripe_card_token]" value"'+ token + '" />');
        
        f.get(0).submit();
        
        
    }
    }
    
});