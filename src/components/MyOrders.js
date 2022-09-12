import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const MyOrders = () => {

  const userInfo = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;

  const userId = userInfo._id;
  console.log(userId);

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resultOrder = await axios.get(`/api/orders/mine/${userId}`);
      console.log(resultOrder.data);
      setOrders(resultOrder.data);
    };
    fetchData();
  }, []);

  return (
    <div className="mo-container">
      <div className="mo-row">
        <h2 className="f-title">My Orders</h2>
      </div>
      <div className="mo-row">
        {orders.length === 0 ? (
          <h4 className="no-products">No Orderes!</h4>
        ) : (
          <div className="mo-groups">
            {orders.map((item) => (
              <div className="mo-group" key={item._id}>
                <h4>Order ID: {item._id}</h4>
                <Link to={`/order/${item._id}`} className="mo-link">
                  <FontAwesomeIcon icon={faEye} />
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default MyOrders