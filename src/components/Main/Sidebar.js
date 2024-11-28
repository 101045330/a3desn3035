import React from 'react'

const FeedbackForm = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement validation and form submission logic
    console.log('Form submitted');
  };

  return (
    <section id="mapout">
      <aside style={{ padding: '20px' }}>
        <div className="container regexForm flex_row">
          <fieldset>
            <legend>
              <h2>Valuable Feedback</h2>
            </legend>
            <style type="text/css" media="screen">
              {`
                #myForm input[type="text"] {
                  min-width: 100px;
                  border: none;
                  opacity: 0.85;
                }
                #myForm input[type="email"] {
                  min-width: 100px;
                  border: none;
                  opacity: 0.85;
                }
                #myForm input[type="phone"] {
                  min-width: 100px;
                  border: none;
                  opacity: 0.85;
                }
                #myForm input[type="checkbox"] {
                  width: 70px !important;
                  height: 70px !important;
                  border: none !important;
                  opacity: 0.85;
                }
                #myForm input:hover {
                  opacity: 1;
                }
                .form-group {
                  border: none !important;
                }
              `}
            </style>
            <form id="myForm" onSubmit={handleSubmit} method="post" encType="multipart/form-data">
              
              <section className="flex_col" style={{ justifyContent: 'flex-start', flex: 1, alignSelf: 'baseline' }}>
                <div className="form-group">
                  <label htmlFor="name">
                    Name
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      aria-required="true"
                      minLength="8"
                      pattern="[A-Za-z\\s]{1,50}"
                      title="Only letters and spaces, up to 50 characters"
                    />
                  </label>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      aria-required="true"
                      minLength="8"
                    />
                  </label>
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      pattern="\\d{3}-\\d{3}-\\d{4}"
                      title="Phone number format: 123-456-7890"
                      minLength="12"
                    />
                  </label>
                </div>
              </section>

              <section className="flex_col">
                <div className="form-group">
                  <label htmlFor="message">Message
                    <textarea id="message" name="message" rows="4"></textarea>
                  </label>
                </div>
              </section>

              <section className="flex_row">
                <div className="form-group flex_row">
                  <div className="flex_row" style={{ justifyContent: 'last baseline' }}>
                    <input type="checkbox" id="subscribe" name="subscribe" checked />
                    <label htmlFor="subscribe" style={{ textShadow: 'none', color: 'bisque' }}>
                      Yes, I want to subscribe to newsletter
                    </label>
                    <button type="submit">Submit</button>
                  </div>
                </div>
              </section>
            </form>
          </fieldset>
        </div>
      </aside>
    </section>
  );
};

export default FeedbackForm
