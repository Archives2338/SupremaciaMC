var myHeaders = new Headers();
// myHeaders.append("User-Agent", "\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6)\",  \"AppleWebKit/537.36 (KHTML, like Gecko)\", \"Chrome/80.0.3987.106 Safari/537.36\"");
myHeaders.append("Authorization", "Basic 4bd25340-679b-4909-aed4-fd4848ede956");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

var url = "https://backend-supremacia.herokuapp.com/api/data";
var carousel__lista = document.querySelector(".carousel__lista");
var carousel__lista2 = document.querySelector(".carousel__lista2");

fetch(url, requestOptions)
  .then(response => response.json())
  .then(result => {
    console.log(result.winners);
    cardWinners(result.winners);
  })    
  .catch(error => console.log('error', error));

function cardWinners(datos){
  carousel__lista2.innerHTML = '';
  for(let valor of datos){
    carousel__lista2.innerHTML += `
      <div class="carousel__elemento2">
        <a href="#">
          <div class="carousel__item2">
            <div class="item2__p">
              <p class="item2__p1">${valor.name}</p>
              <p class="item2__p2">${valor.country}</p>
            </div>
            <img class="carousel__img2" src="${valor.image}" alt="">
          </div>
        </a>
      </div> 
    `
  }
}

// fetch(url, requestOptions)
//   .then(response => response.json())
//   .then(result => {
//     console.log(result.notice);
//     cardNoticesSec(result.notice);
//   })    
//   .catch(error => console.log('error', error));

// function cardNoticesSec(datos){
//   carousel__lista.innerHTML = '';
//   for(let valor of datos){
//     carousel__lista.innerHTML += `
//       <div class="carousel__elemento">
//         <a href="#">
//           <div class="carousel__item">
//             <div class="item1__p">
//               <p class="item1__p1">${valor.title}</p>
//               <p class="item1__p2">${valor.description}</p>
//             </div>
//             <img class="carousel__img" src="${valor.image}" alt="">
//           </div>
//         </a>
//       </div>  
//     `
//   }
// }