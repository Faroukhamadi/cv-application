import React, { useState } from 'react';
import '../styles/Main.css';
import Info from './Info';
import Preview from './Preview';

const Main = () => {
  const [allValues, setAllValues] = useState({
    firstName: '',
    lastName: '',
    title: '',
    address: '',
    phoneNumber: '',
    email: '',
    description: '',
    university: '',
    cityEd: '',
    degree: '',
    subject: '',
    fromEd: '',
    toEd: '',
    position: '',
    company: '',
    cityPr: '',
    fromPr: '',
    toPr: '',
    showEducationalExperience: true,
    showPracticalExperience: true,
  });

  const handleInputChange = (event) => {
    setAllValues({ ...allValues, [event.target.name]: event.target.value });
  };

  const resetHandler = (event) => {
    event.preventDefault();
    event.target.reset();
    setAllValues({
      ...allValues,
      firstName: '',
      lastName: '',
      title: '',
      address: '',
      phoneNumber: '',
      email: '',
      description: '',
      university: '',
      cityEd: '',
      degree: '',
      subject: '',
      fromEd: '',
      toEd: '',
      position: '',
      company: '',
      cityPr: '',
      fromPr: '',
      toPr: '',
    });
  };

  const renderHandler = (event) => {
    switch (event.target.className) {
      case 'delete-btnPr':
        setAllValues({ ...allValues, showPracticalExperience: false });
        break;
      case 'delete-btnEd':
        setAllValues({ ...allValues, showEducationalExperience: false });
        break;
      case 'add-btnPr':
        setAllValues({ ...allValues, showPracticalExperience: true });
        break;
      case 'add-btnEd':
        setAllValues({ ...allValues, showEducationalExperience: true });
        break;
      default:
        break;
    }
  };

  return (
    <div className="main">
      <Info
        {...allValues}
        handleInputChange={handleInputChange}
        resetHandler={resetHandler}
        renderHandler={renderHandler}
        showEducationalExperience={allValues.showEducationalExperience}
        showPracticalExperience={allValues.showPracticalExperience}
      />
      <Preview {...allValues} />
    </div>
  );
};
export default Main;
