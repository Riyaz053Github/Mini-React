import React from 'react'

const MenuCard = ({menuData}) => {

const handleOrder = (itemName) => {
    alert(`Order placed for ${itemName}`);
  };

  return (
    <>
    <section className="main-card--cointainer">
          {menuData.map((curElem) => {
             //const { id, name, category, image, description } = curElem;
            return(
           <>
        <div className="Card-container" key={curElem.id}>
        <div className="card">
         <div className="card-body">
         <span className="card-number card-circle subtle">{curElem.id}</span>
         <span className="card-author">{curElem.category}</span>
         <h2 className="card-title"> {curElem.name}</h2>
         <span className="card-description subtle">{curElem.description}</span>
         <div className="card-raed">Read</div>
         </div>
          <img src={curElem.image} alt="images" className="card-media" />
          <span className="card-tag subtle" onClick={() => handleOrder(curElem.name)}>Order Now</span>
          <span className="card-author">Price : {curElem.price}</span>
         </div> 
     </div>
      </>
        );
        })}
    </section>
    </>
  )
}

export default MenuCard