import React, { useState } from 'react';
import '../css/Global.css';
import '../css/QuantityCounter.css';

 const QuantityCounter = (onCountChange) => {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  const handleBlur = (event) => {
    const value = parseInt(event.target.value);
    if (isNaN(value) || value < 1) {
      setCount(1);
    }
  };

  return (
<div className="quantity-counter-container">
<label className="label">Quantity</label>

    <div className="quantity-counter">
      <button className="quantity-counter-button" onClick={handleDecrement}>
        -
      </button>
      <input
        className="quantity-counter-input"
        type="number"
        min="1"
        value={count}
        onChange={(event) => setCount(parseInt(event.target.value))}
        onBlur={handleBlur}
      />
      <button className="quantity-counter-button" onClick={handleIncrement}>
        +
      </button>
    </div>

</div>
    
  );
}

export default QuantityCounter;
