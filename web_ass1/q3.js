// window.onload = function() {
//     let btn = document.getElementById("submit");
//     btn.addEventListener("click", userInformation);

//     function userInformation(event) {
//         event.preventDefault()
//         c=document.getElementById('checkbox')
//         console.log(c)
//         if (c.checked)
//         {   
            
//         let fName = document.getElementById('first_name').value;
//         let lName = document.getElementById('last_name').value;
//         let phone = document.getElementById('phone').value;
//         let email = document.getElementById('email').value;
//         let h_edu=document.getElementById('h_edu').value
//         let inst_name=document.getElementById('inst_name').value
//         let study=document.getElementById('study').value
//         let g_year=document.getElementById('g_year').value
//         let skils=document.getElementById('skill').value
//         let r_name=document.getElementById('r_name').value
//         let r_contact=document.getElementById('r_no').value
        
//         let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
//         if (phone.length<11 || phone.length>11)
//         {
//             alert("enter valid phone number")
//             return
//         }

//         if (!emailPattern.test(email)) {
//             alert("Please enter a valid email address");
//             return;
//         }
//         console.log("name ",fName,lName,
//         "phone no",phone,"email",email,"higher education",h_edu,"institute name",inst_name,"spcialization",
//         study,"graduation year",g_year)
//         alert("your application has been submitted in our database")
//         var items = JSON.parse(localStorage.getItem('items')) || [];

// items.push({
//     fName: fName,
//     lName: lName,
//     phone: phone,
//     email: email,
//     h_edu: h_edu,
//     study: study,
//     skils: skils,
//     r_name: r_name,
//     r_contact: r_contact
// });

// localStorage.setItem('items', JSON.stringify(items));

// }
// else
// {
//   alert("check terms and conditions")
// }
    
// }


// };


window.onload = function() {
    let btn = document.getElementById("submit");
    btn.addEventListener("click", userInformation);

    function userInformation(event) {
        event.preventDefault();
        let c = document.getElementById('checkbox');
        console.log(c);
        if (c.checked) {
            let fName = document.getElementById('first_name').value;
            let lName = document.getElementById('last_name').value;
            let phone = document.getElementById('phone').value;
            let email = document.getElementById('email').value;
            let h_edu = document.getElementById('h_edu').value;
            let inst_name = document.getElementById('inst_name').value;
            let study = document.getElementById('study').value;
            let g_year = document.getElementById('g_year').value;
            let skils = document.getElementById('skill').value;
            let r_name = document.getElementById('r_name').value;
            let r_contact = document.getElementById('r_no').value;
        
            let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
            if (phone.length !== 11) {
                alert("Enter a valid phone number");
                return;
            }
        
            if (!emailPattern.test(email)) {
                alert("Please enter a valid email address");
                return;
            }
        
            console.log("name ", fName, lName,
                "phone no", phone, "email", email, "higher education", h_edu, "institute name", inst_name, "specialization",
                study, "graduation year", g_year);
            alert("Your application has been submitted in our database");
        
            var items = JSON.parse(localStorage.getItem('items')) || [];
        
            items.push({
                fName: fName,
                lName: lName,
                phone: phone,
                email: email,
                h_edu: h_edu,
                study: study,
                skils: skils,
                r_name: r_name,
                r_contact: r_contact
            });
        
            localStorage.setItem('items', JSON.stringify(items));
        
            
            console.log("Items after modification:", items);
        } else {
            alert("Check terms and conditions");
        }
    }        
};
