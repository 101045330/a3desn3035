import React from 'react';
import '../styles/hint.css';  // Assuming the hint.css is located in the specified folder

const Footer = () => {
  return (
    <footer id="footer" className="flex_row" style={{ justifyContent: 'space-around', width: 'auto' }}>
      
      <section id="footer_left" className="flex_col" style={{ justifyContent: 'center' }}>
        <code>
          <s style={{ fontSize: '2em' }}>&copy;</s> &#x25B7; <em>Some</em> Rights Preserved, &#x25C1; &#x25B7;;
        </code>
      </section>

      <section id="footer_right" className="flex_row">
        <a href="https://www.facebook.com/" className="fa fa-facebook hint" title="Facebook"> f </a>
        <a href="https://www.twitter.com/" className="fa fa-twitter hint" title="Twitter"> t </a>
        <a href="https://www.linkedin.com/" className="fa fa-facebook hint" title="LinkedIn">
          <small>iN</small>
        </a>
      </section>

    </footer>
  );
};

export default Footer;
