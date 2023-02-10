import React, { useState } from "react";
import s from "./Form.module.css";

const Form = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  return (
    <div className={s.form_border} >
        <p className={s.any_questions}>Остались вопросы?</p>
      <form>
        <div className={s.form}>
          <div>
            <input
            className={s.name_input}
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="имя"
            />
          </div>
          <div>
            <input
            className={s.phone_num_input}
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="телефон"
            />
          </div>
          <button className={s.btn}>Оставить заявку</button>
        </div>

        <div>
          <textarea placeholder="СООБЩЕНИЕ" className={s.textarea}></textarea>
        </div>
        <button className={s.btn} style={{display:"none"}}>Оставить заявку</button>
      </form>
    </div>
  );
};

export default Form;
