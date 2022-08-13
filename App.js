// const recordApp = document.querySelector(".products");
// function myFunction() {
//   console.log("clicked");
// }

// fetch("./Data.json")
//   .then((response) => {
//     return response.json();
//   })

//   .then((data) => {
//     recordApp.innerHTML = "";
//     function myFunction() {
//       console.log("clicked");
//     }

//     const html = ` <div class="product-card">
//     <img src =${data.Data[0].img}
//         <h4>${data.Data[0].product}</h4>
//         <div class="price">
//           <p>₹${data.Data[0].price}</p>
//           <div class="like">
//           <span><button onclick="${myFunction()}" class="click"><i class="fa-regular fa-heart"></button></i></span>
//           </div>
//         </div>
//       </div>

//       <div class="product-card">
//       <img src =${data.Data[1].img}
//       <h4>${data.Data[1].product}</h4>
//       <div class="price">
//         <p>₹${data.Data[1].price}</p>

//       </div>
//     </div>

//     <div class="product-card">
//     <img src =${data.Data[2].img}
//         <h4>${data.Data[2].product}</h4>
//         <div class="price">
//           <p>₹${data.Data[2].price}</p>
//         </div>
//         </div>

//         <div class="product-card">
//       <img src =${data.Data[3].img}
//         <h4>${data.Data[3].product}</h4>
//         <div class="price">
//           <p>₹${data.Data[3].price}</p>
//         </div>

//         </div>

//          <div class="product-card">
//         <img src =${data.Data[0].img}
//           <h4>${data.Data[0].product}</h4>
//           <div class="price">
//             <p>₹${data.Data[0].price}</p>
//           </div>
//           </div>

//           <div class="product-card">
//           <img src =${data.Data[1].img}
//             <h4>${data.Data[1].product}</h4>
//             <div class="price">
//               <p>₹${data.Data[1].price}</p>
//             </div>
//             </div>

//             <div class="product-card">
//             <img src =${data.Data[2].img}
//               <h4>${data.Data[2].product}</h4>
//               <div class="price">
//                 <p>₹${data.Data[2].price}</p>
//               </div>
//               </div>

//               <div class="product-card">
//               <img src =${data.Data[3].img}
//                 <h4>${data.Data[3].product}</h4>
//                 <div class="price">
//                   <p>₹${data.Data[3].price}</p>
//                 </div>
//                 </div>
//         `;

//     recordApp.insertAdjacentHTML("afterbegin", html);
//     console.log(data);
//   });
// const elements = document.querySelectorAll(".click");

// elements.forEach((i) => {
//   i.classList.toggle("turn");
// });

$(document).ready(function () {
  $(".wish-icon i").click(function () {
    $(this).toggleClass("fa-heart fa-heart-o");
  });
});

$(document).ready(function () {
  // Add minus icon for collapse element which is open by default
  $(".collapse.show").each(function () {
    $(this).prev(".card-header").addClass("highlight");
  });

  // Highlight open collapsed element
  $(".card-header .btn").click(function () {
    $(".card-header").not($(this).parents()).removeClass("highlight");
    $(this).parents(".card-header").toggleClass("highlight");
  });
});
