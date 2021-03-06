import React from "react";
import "./FeaturedInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";

function FeaturedInfo() {
  const [income, setIncome] = useState(0);
  const [percentage, setPercentage] = useState(0);
  useEffect(() => {
    const getIncome = async () => {
      try {
        const res = await userRequest(`/order/income`);
        // setIncome(res.data);
        // setPercentage((res.data[1].total * 100) / res.data[0].total - 100);
      } catch (err) {
        
      }
    };
    getIncome();
  }, []);

  return (
    <div className="featuredinfo">
      <div className="featuredItem">
        <span className="featureTitle">Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">
            Rs.100
            {/* {income[0].total} */}
          </span>
          <span className="featuredMoneyRate">
            %
            {/* {Math.floor(percentage)}{" "}
            {percentage < 0 ? (
              <ArrowDownward className="featuredIcon negative" />
            ) : (
              <ArrowUpward className="featuredIcon positive" /> 
            )} */}
            <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to the last month</span>
      </div>

      <div className="featuredItem">
        <span className="featureTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">Rs.10000</span>
          <span className="featuredMoneyRate">
            -1.02 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to the last month</span>
      </div>

      <div className="featuredItem">
        <span className="featureTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">Rs.8000</span>
          <span className="featuredMoneyRate">
            +10.02 <ArrowUpward className="featuredIcon positive" />
          </span>
        </div>
        <span className="featuredSub">Compared to the last month</span>
      </div>
    </div>
  );
}

export default FeaturedInfo;
