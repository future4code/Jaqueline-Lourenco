import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../constants/urls";

const PageNumber = () => {
  const [stop, setStop] = useState(false);
  const [number, setNumber] = useState(0);
  let paginationNumber = 0;

  const checkPages = () => {
    axios
      .get(`${BASE_URL}/posts?page=${paginationNumber}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        if (response.data.length) {
          paginationNumber++;
          checkPages();
          setNumber(paginationNumber);
        } else {
          setStop(true);
        }
      })
      .catch((err) => {
        alert(err.response.data);
      });
  };

  useEffect(() => {
    checkPages();
  }, []);

  if (stop) {
    paginationNumber = number;
    return paginationNumber;
  }
};

export default PageNumber;
