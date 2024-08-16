import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOrders } from "../../store/slices/orderSlice";
import DashboardHeader from "./DashboardHeader";

const Orders = () => {
  const dispatch = useDispatch(); // Hook used inside the functional component
  const orders = useSelector((state) => state.order.orders);
  const role = useSelector((state) => state.auth.role);

  const getOrders = async () => {
    try {
      const res = await axios.get(
        import.meta.env.VITE_API_URL + "/orders/get",
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("accessToken"),
          },
        }
      );
      const { data } = res;
      dispatch(setOrders(data));
      console.log(data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <div>
      <DashboardHeader />
      <h1 className="text-2xl font-semibold mb-5 ml-8 ">Orders</h1>
      <div className="overflow-x-auto sm:ml-8 "></div>
    </div>
  );
};

export default Orders;
