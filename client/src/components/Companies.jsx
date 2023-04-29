import axios from "axios";
import React, { useEffect, useState } from "react";
import Jobs from "./Jobs";

const Companies = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("adminToken"));
    axios
      .get("/admin/companies", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setCompanies(res.data.data);
      });
  }, []);

  return <Jobs data={companies} />;
};

export default Companies;
