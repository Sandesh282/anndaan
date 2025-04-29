import React, { useState } from 'react';
import axios from 'axios';

const DonateFood = () => {
  const [donorName, setDonorName] = useState('');
  const [donorPhone, setDonorPhone] = useState('');
  const [donorAddress, setDonorAddress] = useState('');
  const [foodType, setFoodType] = useState('');
  const [quantity, setQuantity] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');


const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post('/api/donations', {
      donorName,
      donorPhone,
      donorAddress,
      foodType,
      quantity: parseInt(quantity),
      additionalInfo
    });
    console.log("Success:", response.data);
    alert("Donation submitted!");
  } catch (error) {
    console.error("Error:", error);
    alert("Submission failed!");
  }
};

  return (
    <div>
      <header>
        <div className="container">
          <h1>Donate Food to Help the Homeless</h1>
          <p>Your donation makes a big difference. Help feed someone today.</p>
        </div>
      </header>

      <main>
        <div className="container">
          <section className="form-section">
            <div className="slogans">
              <h3>“The best way to find yourself is to lose yourself in the service of others.”</h3>
              <img src="img/images.jpg" alt="End World Hunger!" />
              <h3>“A small act of kindness can make a world of difference.”</h3>
            </div>
            <div className="form-wrapper">
              <h2>Food Donation Form</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="donorName">
                    <i className="fas fa-user"></i> Full Name:
                  </label>
                  <input
                    type="text"
                    id="donorName"
                    name="donorName"
                    placeholder="Enter your name"
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="donorPhone">
                    <i className="fas fa-phone"></i> Phone Number:
                  </label>
                  <input
                    type="tel"
                    id="donorPhone"
                    name="donorPhone"
                    placeholder="Enter your phone number"
                    value={donorPhone}
                    onChange={(e) => setDonorPhone(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="donorAddress">
                    <i className="fas fa-map-marker-alt"></i> Address for Pickup:
                  </label>
                  <input
                    type="text"
                    id="donorAddress"
                    name="donorAddress"
                    placeholder="Enter your address or nearby landmark"
                    value={donorAddress}
                    onChange={(e) => setDonorAddress(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="foodType">
                    <i className="fas fa-utensils"></i> Type of Food to Donate:
                  </label>
                  <select
                    id="foodType"
                    name="foodType"
                    value={foodType}
                    onChange={(e) => setFoodType(e.target.value)}
                    required
                  >
                    <option value="">Select food type</option>
                    <option value="canned-goods">Canned Goods</option>
                    <option value="fresh-produce">Fresh Produce</option>
                    <option value="cooked-meals">Cooked Meals</option>
                    <option value="dry-goods">Dry Goods (Rice, Beans, etc.)</option>
                    <option value="ready-to-eat">Ready to Eat Meals</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="quantity">
                    <i className="fas fa-box"></i> Quantity of Food:
                  </label>
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    placeholder="Enter the quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="additionalInfo">
                    <i className="fas fa-comments"></i> Additional Information (Optional):
                  </label>
                  <textarea
                    id="additionalInfo"
                    name="additionalInfo"
                    placeholder="Add any additional info or special instructions"
                    value={additionalInfo}
                    onChange={(e) => setAdditionalInfo(e.target.value)}
                  />
                </div>

                <button type="submit" className="submit-btn">
                  Submit Donation
                </button>
              </form>
            </div>
          </section>
        </div>
      </main>

      <footer>
        <div className="container">
          <p>&copy; 2024 Help the Homeless | All rights reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default DonateFood;
