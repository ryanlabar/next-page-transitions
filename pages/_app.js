import React from 'react';
import Header from '../components/Header';
import GlobalStyle from '../styles/global-style';

const MyApp = ({ Component, pageProps }) => {
  
  return (
    <>
      <Header />
      <Component  {...pageProps} />
      <GlobalStyle />
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </>
  );
};



export default MyApp;
