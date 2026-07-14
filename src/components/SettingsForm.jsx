import React, { useMemo, useState } from 'react';
import './SettingsForm.css';

const initialValues = {
  fullName: '',
  email: '',
  phone: '',
};

function SettingsForm() {
  const [values, setValues] = useState(initialValues);
  const [touched, setTouched] = useState({ fullName: true, email: true, phone: true });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const errors = useMemo(() => {
    const nextErrors = {};

    if (!values.fullName.trim()) {
      nextErrors.fullName = 'Full name is required.';
    }

    if (!values.email.trim()) {
      nextErrors.email = 'Please enter a valid email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = 'Please enter a valid email.';
    }

    if (!values.phone.trim()) {
      nextErrors.phone = 'Phone number must contain exactly 10 digits.';
    } else if (!/^\d+$/.test(values.phone)) {
      nextErrors.phone = 'Phone number must contain only digits.';
    } else if (values.phone.length !== 10) {
      nextErrors.phone = 'Phone number must contain exactly 10 digits.';
    }

    return nextErrors;
  }, [values]);

  const isValid = Object.keys(errors).length === 0;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((previous) => ({ ...previous, [name]: value }));
    setTouched((previous) => ({ ...previous, [name]: true }));
    setIsSubmitted(false);
  };

  const handleBlur = (event) => {
    const { name } = event.target;
    setTouched((previous) => ({ ...previous, [name]: true }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTouched({ fullName: true, email: true, phone: true });

    if (!isValid) {
      return;
    }

    setIsSubmitted(true);
  };

  return (
    <form className="settings-form" onSubmit={handleSubmit} noValidate>
      <h2 className="settings-form__title">Settings</h2>
      <p className="settings-form__subtitle">Update your contact details.</p>

      <div className="settings-form__field">
        <label className="settings-form__label" htmlFor="fullName">Full Name</label>
        <input
          id="fullName"
          name="fullName"
          className="settings-form__input"
          type="text"
          value={values.fullName}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-label="Full Name"
          aria-invalid={Boolean(touched.fullName && errors.fullName)}
        />
        {touched.fullName && errors.fullName ? (
          <span className="settings-form__error">{errors.fullName}</span>
        ) : null}
      </div>

      <div className="settings-form__field">
        <label className="settings-form__label" htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          className="settings-form__input"
          type="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-label="Email"
          aria-invalid={Boolean(touched.email && errors.email)}
        />
        {touched.email && errors.email ? (
          <span className="settings-form__error">{errors.email}</span>
        ) : null}
      </div>

      <div className="settings-form__field">
        <label className="settings-form__label" htmlFor="phone">Phone Number</label>
        <input
          id="phone"
          name="phone"
          className="settings-form__input"
          type="tel"
          value={values.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-label="Phone Number"
          aria-invalid={Boolean(touched.phone && errors.phone)}
        />
        {touched.phone && errors.phone ? (
          <span className="settings-form__error">{errors.phone}</span>
        ) : null}
      </div>

      <div className="settings-form__actions">
        <button className="settings-form__button" type="submit" disabled={!isValid}>
          Save
        </button>
      </div>

      {isSubmitted ? <p className="settings-form__success">Settings saved successfully.</p> : null}
    </form>
  );
}

export default SettingsForm;
