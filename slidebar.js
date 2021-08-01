let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let searchBtn = document.querySelector('.bx-search')
let logout = document.querySelector(".bx-log-out");

btn.onclick = function(){
    sidebar.classList.toggle("active");
}
searchBtn.onclick = function() {
    sidebar.classList.toggle("active");
}


logout.addEventListener('clicked', () => {
    alert('You have successfully logged out');
});


function validation() {
    var email = document.querySelector(".inputext").value;
    let checkBox = document.querySelector("#checkB").value;

    if(email==""){
        document.querySelector('.error').innerHTML = " **Please fill the email**";
       
        return false;
    }
    if(email.indexOf('@') <= 0){
        document.querySelector('.error').innerHTML = "**Please enter a correct email id.";
       
        return false;
    }
    if(frm.checkB.checked == false){
        document.querySelector('.error').innerHTML = "**Check on the Terms & Conditions.";
        
        return false;
    }
    else{
        alert("You have logged in succesfully")
    }
    // if(email.charAt(email.length-4 !=('.'))){
    //     document.querySelector('.error').innerHTML = "**Please enter a valid mail id.**"
    //     return false;
    // } // need to be corrected....
}