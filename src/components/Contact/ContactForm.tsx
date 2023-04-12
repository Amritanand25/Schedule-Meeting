import React, { useState, useEffect } from "react";
import { FormModel } from "../../models/FormModel";
import SuccessUI from "./SuccessUI";
import { useAppSelector } from "../../hooks/useStoreHooks";

const ContactForm: React.FC = () => {
  const [error, setError] = useState<boolean>(false);
  const [currentErrorMessage, setCurrentErrorMessage] = useState<string>("");
  const [formData, setFormData] = useState<FormModel>({
    fullName: "",
    email: "",
    phone: "",
    note: "",
  });
  const [showForm, setShowForm] = useState<boolean>(true);
  const selectedDate = useAppSelector((store) => store.calender.selectedDate);
  const availability = useAppSelector((store) => store.calender.availability);
  const selectTimeList = useAppSelector((stor) => stor.selectTime.selectTime);

  const formSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData?.fullName?.trim()?.length < 3) {
      setError(true);
      setCurrentErrorMessage("Name should be 3 or more char");
      return;
    }
    let regx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (!regx.test(formData?.email)) {
      setError(true);
      setCurrentErrorMessage("Please write correct email");
      return;
    }
    if (!(formData?.phone?.trim()?.length === 10)) {
      setError(true);
      setCurrentErrorMessage("Please write correct phone");
      return;
    }
    if (formData?.note?.trim()?.length < 3) {
      setError(true);
      setCurrentErrorMessage("Please write meaningful notes");
      return;
    }
    let obj: any = {};
    let localData = localStorage.getItem("scheduled-info");
    if (localData) {
      obj = { ...JSON.parse(localData) };
    }
    let selecTim = 0;
    selectTimeList.map((item) => {
      if (item.isActive) selecTim = item.time;
    });
    let av = {};
    let str = "";
    availability?.map((item) => {
      if (item.isSelected) {
        av = item;
        str = item.time + " " + item.timeType;
      }
      return item;
    });
    obj[`${selectedDate}`] = {
      ...obj[`${selectedDate}`],
      [str]: {
        userDetails: formData,
        timeDuration: selecTim,
        raw: av,
      },
    };
    localStorage.setItem("scheduled-info", JSON.stringify(obj));
    setShowForm(false);
  };

  useEffect(() => {
    if (error) setError(false);
  }, [formData]);

  return (
    <div className="p-6 bg-white rounded-md shadow-md w-1/3">
      {showForm && (
        <h2 className="text-3xl font-bold text-blue mb-4 text-center pb-2 border-b border-b-grey-light">
          Contact Info
        </h2>
      )}
      {error && (
        <p className="text-red-500 font-normal">{currentErrorMessage}</p>
      )}
      {showForm && (
        <form className="w-full" onSubmit={formSubmitHandler}>
          <div className="flex flex-col my-3">
            <label>Full Name</label>
            <input
              required
              value={formData.fullName}
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
              className="border border-grey-light focus:border-blue py-1 px-2 font-medium placeholder:font-light"
              type="text"
              placeholder="Your Name"
            />
          </div>
          <div className="flex flex-col my-3">
            <label>Email Address</label>
            <input
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="border border-grey-light focus:border-blue py-1 px-2 font-medium placeholder:font-light"
              type="email"
              placeholder="Your Email"
            />
          </div>
          <div className="flex flex-col my-3">
            <label>Phone Number</label>
            <input
              required
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="border border-grey-light focus:border-blue py-1 px-2 font-medium placeholder:font-light"
              type="mobile"
              placeholder="Your Phone Number"
            />
          </div>
          <div className="flex flex-col my-3">
            <label>Notes</label>
            <textarea
              required
              value={formData.note}
              onChange={(e) =>
                setFormData({ ...formData, note: e.target.value })
              }
              className="border border-grey-light focus:border-blue py-1 px-2 font-medium placeholder:font-light resize-none"
              placeholder="Type here..."
            />
          </div>
          <button
            type="submit"
            className="text-white mt-6 w-full text-center text-md font-medium bg-blue hover:bg-opacity-80 px-6 py-3 rounded-md"
          >
            Submit
          </button>
        </form>
      )}
      {!showForm && <SuccessUI />}
    </div>
  );
};

export default ContactForm;
