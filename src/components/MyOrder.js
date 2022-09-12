import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import MyOrderDetails from './MyOrderDetails';

const MyOrder = () => {

    const [order, setOrder] = useState([]);

    const location = useLocation();
    // console.log(location);

    const id = location.pathname.split("/")[2];
    console.log(id);

    useEffect(() => {
      const fetchData = async () => {
        try {
            const {data} = await axios.get(`/api/orders/${id}`);
            console.log(data);
            setOrder(data);
        } catch (error) {
            toast.error('Order not found!');
        }
      };
      fetchData();
    }, [id]);

  return (
    <div className="my-container">
      <div className="my-row myOrderTop">
        <h2 className="bill-title">Order Id: {id}</h2>
        <h2>
          <Link className="go-back" to="/account">
            Go Back
          </Link>
        </h2>
      </div>
      <div className="my-row myorder">
        <div className="my-col">
          <div className="my-groups">
            <div className="bill-groups">
              <div className="w-groups">
                {order.orderItems?.map((item) => (
                  <MyOrderDetails key={item._id} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="my-col">
          <div className="bill-total">
            <div className="bill-group">
              <span>Name:</span>
              <span>{order.name}</span>
            </div>
            <div className="bill-group">
              <span>Email:</span>
              <span>{order.email}</span>
            </div>
            <div className="bill-group">
              <span>Address:</span>
              <span>{order.address}</span>
            </div>
            <div className="bill-group">
              <span>Phone:</span>
              <span>{order.phone}</span>
            </div>
            <div className="bill-group mt">
              <span>Is Delivered:</span>
              <span>{order.isDelivered === true ? "True" : "False"}</span>
            </div>
            <div className="bill-group">
              <span>Is Paid:</span>
              <span>{order.isPaid === true ? "True" : "False"}</span>
            </div>
            <div className="bill-group mt">
              <h4>Sub-Total:</h4>
              <h4>${order.subTotal?.toFixed(2)}</h4>
            </div>
            <div className="bill-group">
              <h4>Tax-Price:</h4>
              <h4>${order.taxPrice?.toFixed(2)}</h4>
            </div>
            <div className="bill-group">
              <h4>Total:</h4>
              <h4>${order.totalPrice?.toFixed(2)}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyOrder