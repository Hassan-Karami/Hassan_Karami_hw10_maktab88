let updateInformationCard= document.getElementById("updateInformationCard");
let uid=+window.location.search.split("=")[1];
 let targetUser= newUserData.find(el=>el.id===Number(uid));
let root= document.getElementById("rootProfileInfo");


let uidInput= document.getElementById("uidInput");
let infoTitle= document.getElementById("infoTitle");
let avaUrlInput= document.getElementById("avaUrlInput");
let fnInput= document.getElementById("fnInput");
let lnInput= document.getElementById("lnInput");
let emailInput= document.getElementById("emailInput");




const profileInfoGenerator= function({id,first_name,last_name,avatar,email}){
    return `
    <div class="col-lg-4 col-md-6 col-12">

        <div class="card shadow rounded-4 p-2 "  style="width: 18rem;">
            <img style="height:250px";    src="${avatar}" class=" card-img-top rounded-top" alt="...">
            <div class="card-body">
              <h5 class="card-title text-center">${first_name} ${last_name}</h5>
              <hr>
              <p class="card-text">${first_name} ${last_name} is maktab 45 user by uid of ${id}, you can easily get in touch with ${first_name} ${last_name} from <a class="text-decoration-none" href="#"> ${email}</a> </p>
              <p  class="border p-1">UID: ${id} </p>
              <p class="border p-1">Email:<br> ${email} </p>

              <button onclick="handleDeleteBtn(${id})" class="btn btn-warning rounded-3"> Delete</button>

              <button onclick="handleUpdateBtn(${id})" class="btn btn-primary rounded-3"> Update</button>
        </div>
        </div>

    </div>
    ` 
 } 


 function read(targetUser){
    root.innerHTML="";
    root.innerHTML=profileInfoGenerator(targetUser);
}

read(targetUser);


function handleUpdateBtn(){
    root.style.display="none";
    updateInformationCard.style.display="block";
    infoTitle.innerHTML="UPDATE";
    uidInput.value=targetUser.id;
    emailInput.value= targetUser.email;
    fnInput.value= targetUser.first_name;
    lnInput.value= targetUser.last_name;
    avaUrlInput.value= targetUser.avatar;

}


function handleSubmitBtn(){
    let newInfo={
        first_name:fnInput.value,
        last_name:lnInput.value,
        email:emailInput.value,
        avatar:avaUrlInput.value,
    };
newUserData= newUserData.map(user=>{
    if(user.id=== targetUser.id){
        return {...user,...newInfo};
    }
    return user;
})
 console.log(newUserData);

}







