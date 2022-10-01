// ---------------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------------

let products = JSON.parse(employeesJson);
let product_div = document.getElementById("products_div");

let inputs=[];


// ---------------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------------

fill_products();

function fill_products() {
  let index = 0;
  let content="";


  for (let product of products) {
    let importance_class='label-green';
    switch (product.importance) {
      case 0:
      case 1:
        importance_class='label-green';
        break;
  
      case 2:
      case 3:
        importance_class='label-yellow';
        break;
  
      case 4:
      case 5:
      case 6:
      case 7:
        case 7:      case 8:      case 9:      case 10:      case 11:      case 12:      case 13:      case 14:      case 15:      case 16:   case 17:      case 18:      case 19:      case 20:      case 21:      case 22:
        importance_class='label-red';
        break;
    }
  
    content +=
      `
      
      <div class="col-xl-4">
        
      <div class="card" style="width: 18rem;">
        <img src="` +
      product.image +
      `" class="card-img-top" alt="..."/>
        <div class="card-body"> 
          <h5 class="card-title">` +
      product.taskName +
      `<h5>
          <p class="card-text">` +
      product.description +
      `</p>
          <p id="importance_` +
      index +
      `" class="card-text `+importance_class+`">` +
      product.importance +
      `</p>
          <a href="javascript:;" onclick="change_importance(` +
      index +
      `)" class="btn btn-primary">Priority level</a>
        </div>
      </div>
  
    </div> `;

    index++;
  }
  product_div.innerHTML=content;
}

function change_importance(index) {
  let data = products[index];
  data.importance += 1;

    fill_products();
  
}

function short_product(){
  products=products.sort(function (a, b) {
    return a.importance - b.importance;
  });
  fill_products();
}

///javascript get index of object
// ---------------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------------
