// src/components/items/ItemContact
import React from 'react';
import { useFormik } from 'formik';

const initialValues = {
  name: '',
  email: '',
  channel: '',
};

const onSubmit = (values) => {
  console.log('form data', values);
};

const validate = (values) => {
  let errors = {};

  if (!values.name) {
    errors.name = 'Name is Required';
  }

  if (!values.email) {
    errors.email = 'Email is Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email format';
  }

  if (!values.channel) {
    errors.channel = 'Channel is Required';
  }

  return errors;
};

const ItemContact = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });
  return (
    <>
      <section className="main">
        <div className="container">
          <div className="main-flex">
            <h1 className="main-heading">CONTACT</h1>
            <div className="main-slider">
              <ul className="main-slider-list">
                <li className="main-slider-item">
                  <img
                    className="main-slider-img"
                    src="https://vico-co.jp/dist/img/main/l-hero__image01.jpg?v=20200908170427"
                  />
                </li>
                <li className="main-slider-item">
                  <img
                    className="main-slider-img"
                    src="https://vico-co.jp/dist/img/main/l-hero__image02.jpg?v=20200908170427"
                  />
                </li>
                <li className="main-slider-item">
                  <img
                    className="main-slider-img"
                    src="https://vico-co.jp/dist/img/main/l-hero__image03.jpg?v=20200908170427"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="contact">
        <h1 className="contact-title"></h1>
          <form onSubmit={formik.handleSubmit}>
            <div className="contact-item">
              <label htmlFor="name" className="contact-label">
                お名前
              </label>
              <input
                className="contact-input"
                type="text"
                id="name"
                name="name"
                placeholder="山田 太郎"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="contact-error">{formik.errors.name}</div>
              ) : null}
            </div>

            <div className="contact-item">
              <label htmlFor="email" className="contact-label">
                メールアドレス
              </label>
              <input
                className="contact-input"
                type="email"
                id="email"
                name="email"
                placeholder="example@icloud.com"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="contact-error">{formik.errors.email}</div>
              ) : null}
            </div>

            <div className="contact-item">
              <label htmlFor="channel" className="contact-label">
                お聞きしたいこと
              </label>
              <input
                className="contact-input"
                type="text"
                id="channel"
                name="channel"
                placeholder="お聞きしたいこと"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.channel}
              />
              {formik.touched.channel && formik.errors.channel ? (
                <div className="contact-error">{formik.errors.channel}</div>
              ) : null}
            </div>

            <button className="contact-button button" type="submit">
              送信
            </button>
          </form>
      </section>
    </>
  );
};

export default ItemContact;
