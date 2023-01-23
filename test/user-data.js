let users = [];
      $.ajax({
        url: "https://reqres.in/api/users?page=1/",
        type: "GET",
        success: function (result) {
          const x = result.data;
          users.push(...x);
        },
        async: false,
      });
    
      $.ajax({
        url: "https://reqres.in/api/users?page=2/",
        type: "GET",
        success: function (result) {
          const y = result.data;
    
          users.push(...y);
        },
        async: false,
      });

      function storeDataInLocalStorage(){
        localStorage.clear();
        localStorage.setItem("users",JSON.stringify(users));
      }

      function returnDataFromLocalStorage(){
        return JSON.parse(localStorage.getItem("users"));
      }
     
      
 console.log(users);
//  users= users.filter(user=>user.id !== 1);
 storeDataInLocalStorage();
console.log(returnDataFromLocalStorage());


      
      