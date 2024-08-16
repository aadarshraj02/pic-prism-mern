import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOrders } from "../../store/slices/orderSlice";
import DashboardHeader from "./DashboardHeader";

const Orders = () => {
  const dispatch = useDispatch;
  const orders = useSelector((state) => state.order.order);
  const role = useSelector((state) => state.auth.role);

  const getOrders = async () => {
    const res = await axios.get(import.meta.env.VITE_API_URL + "/orders/get", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
    });
    const { data } = await res.data;
    dispatch(setOrders(data));
  };

  useEffect(() => {
    getOrders();
  }, []);

  return <div></div>;
};

export default Orders;
