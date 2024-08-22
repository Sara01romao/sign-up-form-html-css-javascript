

function validateInput(inputId) {
    const input = document.getElementById(inputId);

    const container = input.closest('.campo-container'); 
  
    let isValid = true;


    if (input.id === 'email-address') {
        isValid = validateEmail(input.value);

        if(!isValid){
            container.classList.add('active');
        }else{
            container.classList.remove('active');
        }
        console.log(isValid)
       
    }else {
            
            isValid = input.value !== "";

            if(!isValid){
                container.classList.add('active');
            }else{
                container.classList.remove('active');
            }
        }


   
}


document.querySelector('.btn-claim').addEventListener('click', (evt) => {
    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const emailAddress = document.getElementById('email-address');
    const password = document.getElementById('password');
   
    evt.preventDefault();
    
    let inputIds = [firstName, lastName, emailAddress, password]
  
    validateInputSubmit(inputIds)


});


function validateInputSubmit(inputs) {
    let allValid = true;
    inputs.forEach(input => {
   

        const container = input.closest('.campo-container');
       

        let isValid = true;

     
        if (input.id === 'email-address') {
            isValid = validateEmail(input.value);
        } else {
        
            isValid = input.value.trim() !== "";
        }

        if (!isValid) {
            container.classList.add('active');
            allValid = false;
        } else {
            container.classList.remove('active');
        }
    });

    var confirmClaim= document.querySelector('.messagem-confirm')

    if (allValid) {
        confirmClaim.classList.add('active')
        inputs.forEach(input => {
            input.value = ''; 
        });

        setTimeout(() => {
           
            confirmClaim.classList.remove('active')
        }, 2000);
        console.log('Todos os campos são válidos e foram limpos.');
    }


}


function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
   
     
    console.log(email)
    return emailPattern.test(email);


}


