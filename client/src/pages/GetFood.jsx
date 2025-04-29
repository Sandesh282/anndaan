import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const GetFood = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await axios.post('/api/food-requests', {
        name,
        phone,
        address
      });

      // Success handling
      toast.success('Food request submitted successfully!');
      console.log('API Response:', response.data);
      
      // Reset form fields
      setName('');
      setPhone('');
      setAddress('');
      
    } catch (error) {
      // Error handling
      console.error('Submission error:', error);
      toast.error(error.response?.data?.message || 'Failed to submit request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <header>
        <div className="container">
          <h1>Get Food Assistance</h1>
          <p>No one should go hungry. We are here to help.</p>
        </div>
      </header>

      <main>
        <div className="container">
          <section className="form-section">
            <div className="slogans">
              <h3>“No one should sleep hungry.”</h3>
              <h3>“Together, we can end hunger.”</h3>
            </div>
            <div className="form-wrapper">
              <h2>Food Assistance Form</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">
                    <i className="fas fa-user"></i> Full Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">
                    <i className="fas fa-phone"></i> Phone Number:
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Enter your phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="address">
                    <i className="fas fa-map-marker-alt"></i> Address or Nearby Landmark:
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    placeholder="Enter your address or nearby landmark"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />
                </div>

                <button type="submit" className="submit-btn">
                  Apply for Assistance
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

export default GetFood;
