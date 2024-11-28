import React, { useState, useEffect } from 'react';

// External script to load TinyMCE editor (for feedback form) dynamically
const loadScript = (src, callback) => {
  const script = document.createElement('script');
  script.src = src;
  script.async = true;
  script.onload = callback;
  document.body.appendChild(script);
};

const FormComponent = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subscribe: false,
    message: '',
  });

  // Update form data as the user types
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submit action
    console.log(JSON.stringify(formData));

    // You can send the data to the server here using fetch or axios (example):
    /*
    fetch('your-server-endpoint', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => console.log('Success:', data))
    .catch(error => console.error('Error:', error));
    */
  };

  // Dynamically load external scripts like TinyMCE
  useEffect(() => {
    loadScript(
      'https://cdn.tiny.cloud/1/gp3ikfeo5tjqunizkti3rh8atmka6iq73ayzk0jwnwcdwvn7/tinymce/7/tinymce.min.js',
      () => {
        window.tinymce.init({
          selector: 'textarea',
          plugins: [
            'anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 'image', 'link',
            'lists', 'media', 'searchreplace', 'table', 'visualblocks', 'wordcount',
          ],
          toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline | link image | checklist numlist bullist | emoticons charmap | removeformat',
        });
      }
    );

    return () => {
      // Clean up TinyMCE script and instances when the component unmounts
      if (window.tinymce) {
        window.tinymce.remove();
      }
    };
  }, []);

  return (
    <section id="mapout">
      <aside style={{ padding: '20px' }}>
        <div className="container regexForm flex_row">
          <fieldset>
            <legend>
              <h2>Valuable Feedback</h2>
            </legend>

            <form id="myForm" onSubmit={handleSubmit}>
              <section className="flex_col" style={{ justifyContent: 'flex-start', flex: 1, alignSelf: 'baseline' }}>
                <div className="form-group">
                  <label htmlFor="name">
                    Name
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      minLength="8"
                      pattern="[A-Za-z\s]{1,50}"
                      title="Only letters and spaces, up to 50 characters"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </label>
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    Email
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      minLength="8"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </label>
                </div>

                <div className="form-group">
                  <label htmlFor="phone">
                    Phone
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      pattern="\d{3}-\d{3}-\d{4}"
                      title="Phone number format: 123-456-7890"
                      minLength="12"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </label>
                </div>
              </section>

              <section className="flex_col">
                <div className="form-group">
                  <label htmlFor="message">
                    Message
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </label>
                </div>
              </section>

              <section className="flex_row">
                <div className="form-group flex_row">
                  <input
                    type="checkbox"
                    id="subscribe"
                    name="subscribe"
                    checked={formData.subscribe}
                    onChange={handleChange}
                  />
                  <label htmlFor="subscribe" style={{ textShadow: 'none', color: 'bisque' }}>
                    Yes, I want to subscribe to newsletter
                  </label>

                  <button type="submit">Submit</button>
                </div>
              </section>
            </form>
          </fieldset>
        </div>
      </aside>
    </section>
  );
};

export default FormComponent;
