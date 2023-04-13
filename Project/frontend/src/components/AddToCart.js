import '../css/Global.css'
import '../css/AddToCart.css'


const AddToCart = ({color, text, clicked}) => {
  
  return (
    <>
      <button 
       className="add-to-cart button" 
       aria-label="Add Coffee Bag to Cart"
       type="button"
       onClick={clicked}
       style={{ backgroundColor: color || undefined }}> 
      {text}
      </button>

    </>
    )
}

AddToCart.defaultProps = {
    text:'Add to Cart'
}

export default AddToCart