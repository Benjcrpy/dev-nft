import React from 'react'
import "./product.css"
import test1 from "../../assets/pro1.png"
const Product = () => {
  return (<div className='product absolute-center'>
   <div className='product-left absolute-center'>
        <div className='product-heading'>
          Product & Services
        </div>
        <div className='product-description'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec lacus ac magna blandit aliquet. 
        Fusce enim massa, tincidunt id ullamcorper a, imperdiet in velit. Nullam id vehicula odio. Pellentesque 
        congue semper leo. Etiam scelerisque nisl vel lacus condimentum, consectetur rhoncus lectus tempus. 
        Nam rhoncus pellentesque nisl ac tempus. Duis mattis suscipit elit a faucibus. Donec lacinia orci sed tortor 
        molestie condimentum. Nulla non leo sed erat vestibulum tincidunt. Sed vel turpis tortor. Donec et mauris fermentum, 
        facilisis ipsum quis, auctor tortor. Cras et libero maximus, porttitor nisl at, consequat dolor. 
        </div>
      </div>
      <div className='product-right'>
        <div className='product-right-diamond'>
          <div className='product-right-item'>
            <span style={{ '--i': '1' }}>
              <img
                className='p-img'
                alt="au-img"
                src={test1}
              ></img>
            </span>
          </div>
        </div>
      </div>
      </div>
  )
}

export default Product