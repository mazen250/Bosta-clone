import "../../App.css";
import Tracking from "./components/Tracking/Index.tsx";
import Details from "./components/Details/Index.tsx";
import axios from "axios";
import { useEffect, useState } from "react";
import useOrderStore from "../../stores/OrderStore.ts";
import Loading from "./components/Loading/Index.tsx";
import i18n from "../../locals/i18n";

function Index() {
  const { setOrder } = useOrderStore();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getOrder = async (orderId: string) => {
    setLoading(true);
    axios
      .get(`https://tracking.bosta.co/shipments/track/${orderId}`)
      .then((res) => {
        setOrder(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    const lang = localStorage.getItem('lang');
    if (lang) {
      i18n.changeLanguage(lang);
    }
    getOrder("67151313");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <>
          <Tracking />
          <Details />
        </>
      )}
    </>
  );
}

export default Index;
