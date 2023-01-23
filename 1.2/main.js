const usersListContainer = document.getElementById('usersList');
let userProfileModal= document.getElementById("userProfileModal");
const userProfileModalTitle = document.getElementById('userProfileModalTitle');
const userProfileModalBody = document.getElementById('userProfileModalBody');
const userProfileModalFooter = document.getElementById('userProfileModalFooter');
const paginationContainer= document.getElementById("paginationContainer");
const pageActive= "page-link bg-warning border-dark text-dark ";
const pageDeactive= "page-link bg-dark border-dark text-warning ";


let selectedUser=null;
let newUserData= users;
const cardGenerator= function({id,first_name,last_name,avatar,email}){
    return `
    <div class="col-lg-4 col-md-6 col-12">

        <div class="card shadow rounded-4 p-2 "  style="width: 18rem;">
            <img style="height:250px";    src="${avatar}" class=" card-img-top rounded-top" alt="...">
            <div class="card-body">
              <h5 class="card-title text-center">${first_name} ${last_name}</h5>
              <hr>
              <p class="card-text">${first_name} ${last_name} is maktab 45 user by uid of ${id}, you can easily get in touch with ${first_name} ${last_name} from <a class="text-decoration-none" href="#"> ${email}</a> </p>
              <p class="border p-1">UID: ${id} </p>
              <p class="border p-1">Email:<br> ${email} </p>
              <button onclick="handleOnClickProfileBtn(${id})" class="btn btn-primary rounded-3 w-100" data-bs-toggle="modal" data-bs-target="#userProfileModal"> Profile</button>
        </div>
        </div>

    </div>
    ` 
 }

  

 const handleOnClickProfileBtn = (uid) => {
    const targetUser = newUserData.find(el => el.id === uid);
    selectedUser = targetUser;
    showModalInformation(targetUser);
}

const showModalInformation= function({first_name,last_name,id,avatar,email}){
    userProfileModalTitle.innerHTML=`${first_name} ${last_name}`;
    userProfileModalBody.innerHTML=`<img  src="${avatar}" style="border-radius:100%; margin-left:160px;" alt="user-profile-image">
    <p>UID:${id}</p>
    <p>Email: ${email}</p>
    `
}



const usersListGenerator= function(index,data){
    let usersListBody="";
   for(i=index; i<index+6; i++){
    if(!data[i]){
        break;
    }
    usersListBody += cardGenerator(data[i]);
   }
   return usersListBody;
}

const renderUsersList= function(index,data){
    usersListContainer.innerHTML= usersListGenerator(index,data)

}
renderUsersList(0,newUserData);

/*************start pagination*************/

const paginationGenerator= function(data){
   let paginationBody="";
   let pageCount= Math.ceil(data.length/6);
   let startIndex=0;
   for(let i=0;i<pageCount;i++){

    paginationBody+= `
    <li class="page-item">
    <a href="#" onclick="pageRender(${startIndex},this)"  class="page-link bg-dark border-dark text-warning"> ${i+1}</a>
    </li>
    `
    startIndex+=6;
   }

   return paginationBody;
}

/*Render Pagination */

const renderPagination= function(data){
    paginationContainer.innerHTML= paginationGenerator(data);
    document.querySelectorAll(".page-link")[0].classList= pageActive;
}
renderPagination(newUserData);

 /*Render page */

 const pageRender= function(index,self){
    let pageBtns= document.querySelectorAll(".page-link");
    for(const btn of pageBtns ){
        btn.className= pageDeactive;
    }
    self.className=pageActive;
    renderUsersList(index,newUserData);

 }


 /* filter users */
 const filterUsers= function(self){
    let searchKey= self.value.toLowerCase();
    newUserData= users.filter(item=>{
        for(value of Object.values(item)){
            if(value.toString().toLowerCase().includes(searchKey)){
                console.log(value);
                return true;
            }
        }
    })

    renderUsersList(0,newUserData);
    renderPagination(newUserData);


 }

