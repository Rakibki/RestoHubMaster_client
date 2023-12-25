import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { authContext } from "../../providers/AuthProvaider";
import swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({ oderInfo }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(authContext);
  const [trangectionId, setTrangectionId] = useState("");
  const naviagte = useNavigate();

  useEffect(() => {
    axiosSecure
      .post("/createPayment", { price: oderInfo?.totalPrice })
      .then((res) => {
        setClientSecret(res?.data?.clientSecret);
      });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setError("");
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName,
            email: user?.email,
          },
        },
      });

    if (confirmError) {
      console.log("payment, error", confirmError);
    } else {
      if (paymentIntent.status === "succeeded") {
        setTrangectionId(paymentIntent?.id);

        const paymentInfo = {
          name: oderInfo?.userName,
          email: oderInfo?.email,
          foodsIdL: oderInfo?.foodsId,
          totalPrice: oderInfo?.totalPrice,
          date: new Date().toDateString(),
          time: new Date().toLocaleTimeString(),
          status: "padding",
          trangectionId: trangectionId || paymentIntent?.id,
        };

        axiosSecure.post(`/payment/${user?.email}`, paymentInfo).then((res) => {
          if (res?.data?.insertedId) {
            new swal("Good job!", "You clicked the button!", "success");
            naviagte("/dashboard/paymentHistory");
          }
        });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};

export default CheckoutForm;
