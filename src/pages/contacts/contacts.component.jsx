import React from 'react';

import './contacts.styles.scss';

const ContactsPage = () => {
  return (
    <div className='contacts-page'>
      <img
        style={{ width: 450, height: 620 }}
        src='https://firebasestorage.googleapis.com/v0/b/practice-3edd2.appspot.com/o/collection%2FJ_KIM-1.jpg?alt=media&token=8dfcd1c5-613c-4afd-9542-f5fb3f76acd0'
        alt=''
      />
      <div className='contacts-container'>
        <p className='contacts-title'>ABOUT</p>
        <h3 className='contacts-description'>
          J.KIM brand was founded by young fashion designer Jenia Kim who comes
          from a family of Korean emigrants from Uzbekistan. She was raised in
          the city of Tashkent and then moved to Moscow where studied first at
          an art school and then at the Moscow Carl Faberge college of applied
          arts. For Jenia the most important part of her work is Asian culture.
          In every collection of J.Kim brand, she explores the unknown parts of
          it and evolves the core elements of traditional Asian costume. Her
          recent obsession is Korean dress, Jenia is inspired by it and tries to
          represent it in a modern way. Despite the retrospective sources of
          inspiration, J.Kim collections reflect contemporary fashion and give
          an opportunity to get acquainted with the rich Korean culture.
        </h3>
        <h3 className='contacts-title'>CONTACTS </h3>
        <p className='contacts-info'>Email: shop@jkim.ru | info@jkim.ru</p>
        <p className='contacts-info'>Phone: +7 903 746 72 72</p>
        <a
          className='contacts-info'
          href='https://www.facebook.com/j.kim.brand/'
        >
          Facebook: @j.kim.brand
        </a>
        <a className='contacts-info' href='https://www.instagram.com/j.kim/'>
          Instagram: @j.kim
        </a>
      </div>
    </div>
  );
};

export default ContactsPage;
