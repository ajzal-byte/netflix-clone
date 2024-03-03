import React, { useEffect, useState } from "react";
import "./css/Plans.css";
import "firebase/firestore";
import db from "../firebase";
import toast from "react-hot-toast";

const Plans = () => {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const querySnapshot = await db
          .collection("plans")
          .where("active", "==", true)
          .get();
        const plansData = querySnapshot.docs.map((doc) => doc.data());
        setPlans(plansData);
      } catch (error) {
        console.error("Error fetching plans:", error);
      }
    };

    fetchPlans();
  }, []);

  console.log(plans);

  return (
    <div className="plans">
      {plans.map((plan) => (
        <div key={plan.plan}>
          <div className="planSection">
            <div className="planInfo">
              <h5>{plan.plan}</h5>
              <h6>{plan.description}</h6>
            </div>
            <h5>₹{plan.price}</h5>
            <button
              onClick={() =>
                toast("Subscriptions will be implemented soon!", {
                  icon: "⏳",
                  style: {
                    borderRadius: "10px",
                    background: "#333",
                    color: "#fff",
                  },
                })
              }
            >
              Subscribe
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Plans;
