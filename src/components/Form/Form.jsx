import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Heading from "../Heading/Heading";
import "./Form.scss";

const Form = ({ setFormValues }) => {
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [country, setCountry] = useState("");
  const [selected, setSelected] = useState([]);
  const [agreement, setAgreement] = useState(Boolean);
  const [errors, setErrors] = useState({});
  const firstRender = useRef(true);

  const validate = () => {
    setErrors({});

    if (name.length < 4 || !name.match(/^[a-zA-Z]+$/)) {
      setErrors((state) => ({ ...state, name }));
    }
    if (birthDate.length < 1) {
      setErrors((state) => ({ ...state, birthDate }));
    }
    if (country.length < 1) {
      setErrors((state) => ({ ...state, country }));
    }
    if (selected.length < 1) {
      setErrors((state) => ({ ...state, selected }));
    }
    if (!(agreement === "yes")) {
      setErrors((state) => ({ ...state, agreement }));
    }
  };

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    validate();
  }, [name, birthDate, country, selected, agreement]);

  const handleChange = (e) => {
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;
      case "birthdate":
        setBirthDate(e.target.value);
        break;
      case "country":
        setCountry(e.target.value);
        break;
      case "selected":
        {
          const find = selected.indexOf(e.target.value);
          if (find > -1) {
            selected.splice(find, 1);
          } else {
            selected.push(e.target.value);
          }
          setSelected(selected);
        }
        break;
      case "agreement":
        setAgreement(e.target.value);
        break;
      default:
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.keys(errors).length === 0) {
      setFormValues((prevState) => [
        ...prevState,
        { name, birthDate, country, selected, agreement },
      ]);

      setErrors("don't duplicate a card");
      e.target.reset();
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <section className="form__section">
        <Heading title="Name" />
        <div className="section__field">
          <label className="section__name labelBox" htmlFor="nameControl">
            <input
              className="labelBox__input"
              id="nameControl"
              type="text"
              name="name"
              placeholder="Robert"
              onChange={handleChange}
            />
          </label>
          <div className="validate__messages">
            {errors?.name !== undefined && (
              <span>More than 3 characters (only letters).</span>
            )}
          </div>
        </div>
      </section>

      <section className="form__section">
        <Heading title="Birth Date" />
        <div className="section__field">
          <label
            className="section__birthdate labelBox"
            htmlFor="birthdateControl"
          >
            <input
              className="labelBox__input"
              id="birthdateControl"
              type="date"
              name="birthdate"
              min="1950-01-01"
              max="2010-01-01"
              onChange={handleChange}
            />
          </label>
          <div className="validate__messages">
            {errors?.birthDate !== undefined && (
              <span>Please, select your birth date</span>
            )}
          </div>
        </div>
      </section>

      <section className="form__section">
        <Heading title="Country" />
        <div className="section__field">
          <label className="section__country labelBox" htmlFor="countryControl">
            <select
              className="labelBox__select"
              id="countryControl"
              name="country"
              onChange={handleChange}
            >
              <option value="country" hidden>
                Country
              </option>
              <option value="russia">Russia</option>
              <option value="armenia">Armenia</option>
              <option value="ukraine">Ukraine</option>
            </select>
          </label>
          <div className="validate__messages">
            {errors?.country !== undefined && (
              <span>Please, select your country</span>
            )}
          </div>
        </div>
      </section>

      <section className="form__section">
        <Heading title="Select your skills" />
        <div className="section__field">
          <div className="section__selected labelBox">
            <label htmlFor="check1">
              <input
                id="check1"
                name="selected"
                type="checkbox"
                value="HTML5"
                onChange={handleChange}
              />
              HTML5
              <span className="checkmark" />
            </label>
            <label htmlFor="check2">
              <input
                id="check2"
                name="selected"
                type="checkbox"
                value="CSS3"
                onChange={handleChange}
              />
              CSS3
              <span className="checkmark" />
            </label>
            <label htmlFor="check3">
              <input
                id="check3"
                name="selected"
                type="checkbox"
                value="JavaScript"
                onChange={handleChange}
              />
              JavaScript
              <span className="checkmark" />
            </label>
            <label htmlFor="check4">
              <input
                id="check4"
                name="selected"
                type="checkbox"
                value="React"
                onChange={handleChange}
              />
              React
              <span className="checkmark" />
            </label>
          </div>
          <div className="validate__messages">
            {errors?.selected !== undefined && (
              <span>Please, select more than one skill</span>
            )}
          </div>
        </div>
      </section>

      <section className="form__section">
        <Heading title="I agree to publish my card" />
        <div className="section__field">
          <div className="section__switch labelBox">
            <input
              className="switch__input"
              type="radio"
              name="agreement"
              id="no"
              value="no"
              checked={agreement === "no"}
              onChange={handleChange}
            />
            <label
              className="switch__label switch__label--false"
              htmlFor="no"
              id="noLabel"
            >
              <>
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              </>
              No
            </label>
            <input
              className="switch__input"
              type="radio"
              name="agreement"
              id="yes"
              value="yes"
              checked={agreement === "yes"}
              onChange={handleChange}
            />
            <label className="switch__label" htmlFor="yes" id="yesLabel">
              <>
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              </>
              Yes
            </label>
          </div>
          <div className="validate__messages">
            {errors?.agreement !== undefined && (
              <span>Please, select `Yes` to publich your card</span>
            )}
          </div>
        </div>
      </section>

      <label className="form__submit submit formBox" htmlFor="submitID">
        <input
          className="submit__button"
          name="submit"
          value="Create account"
          type="submit"
        />
      </label>
    </form>
  );
};

Form.propTypes = {
  setFormValues: PropTypes.func.isRequired,
};

export default Form;
