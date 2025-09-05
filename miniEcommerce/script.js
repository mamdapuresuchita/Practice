const watches =[{
    id:1,
    title:'Tick Tock black',
    description:'chsfvbadj hfugvbh',
    price:10838,
    stock:20,
    brand:'fastrack',
    moreInfo:'View More',
},
{
    id:2,
    title:'Tick Tock black',
    description:'chsfvbadj hfugvbh',
    price:10838,
    stock:20,
    brand:'fastrack',
    moreInfo:'View More',
},
{
    id:2,
    title:'Tick Tock black',
    description:'chsfvbadj hfugvbh',
    price:10838,
    stock:20,
    brand:'fastrack',
    moreInfo:'View More',
},
{
    id:2,
    title:'Tick Tock black',
    description:'chsfvbadj hfugvbh',
    price:10838,
    stock:20,
    brand:'fastrack',
    moreInfo:'View More',
}
]

renderCardElmt =document.querySelector("#renderCard")
renderCardElmt.innerHTML = watches.map((w,i)=>`
      <div class="col-sm-8 col-md-6 col-lg-3 m-4 " >
        <div class="card" >
        <div class="card-body">
        <h5 class="card-title">${w.title}</h5>
        <p class="card-text">${w.description}</p>
        <p class="card-text">Price:${w.price}</p>
        <p class="card-text">Stock:${w.stock}</p>
        <p class="card-text">Brand:${w.brand}</p>
        <a href="#" class="btn btn-primary">${w.moreInfo}</a>
      </div>
    </div>
  </div>`
  ).join('')