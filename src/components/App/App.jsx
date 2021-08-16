import React, { useState } from "react";
import Form from "../Form/Form";
import Header from "../Header/Header";
import Card from "../Card/Card";

const App = () => {
  const [formValues, setFormValues] = useState([]);

  return (
    <div className="wrapper">
      <Header title="Welcome" subtitle="Let`s create your account!" />
      <Form setFormValues={setFormValues} />
      <Header title="" subtitle="Cards" />
      <section className="cards">
        {formValues.map((item, id) => (
          <Card item={item} key={id.toString()} />
        ))}
      </section>
    </div>
  );
};

export default App;
