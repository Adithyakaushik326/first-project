function signup()
{
    if($("#first").val()=="" || $("#last").val()=="")
        {
            alert("First and last name required");
        }
    else if($("#email").val()=="")
    {
        alert("Email or mobile number required");
    }
    
    else if($("#pass").val()=="")
        {
            alert("Enter valid password");
        }
    else
        {
            localStorage.setItem("email",$("#email").val());
            localStorage.setItem("pass",$("#pass").val());
           
            alert("Sign-Up Successfull");
           
        }
}

function login()
{
    if($("#id1").val()!= localStorage.getItem("email"))
        {
            alert("Invalid email address");
        }
    else if($("#id2").val()!=localStorage.getItem("pass"))
        {
            alert("invalid password");
            
        }
    else{
        window.location.href="https://www.google.com/";
    }
}