const FormView = () => (
  <>
    <div className="contact-info">
      <h4 className="title no-margin-top">Escribenos un mensaje</h4>

      <div id="contact_form">
        <div className="form-group">
          <div className="row">
            <div className="col-md-6">
              <label>
                Nombre<span className="required">*</span>
              </label>
              <input
                type="text"
                name="name"
                className="form-control input-field"
                required=""
              />
            </div>
            <div className="col-md-6">
              <label>
                Email <span className="required">*</span>
              </label>
              <input
                type="email"
                name="email"
                className="form-control input-field"
                required=""
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <label>Asunto</label>
              <input
                type="text"
                name="subject"
                className="form-control input-field"
              />
            </div>
            <div className="col-md-12">
              <label>
                Mensaje<span className="required">*</span>
              </label>
              <textarea
                name="message"
                id="message"
                className="textarea-field form-control"
                rows="3"
                required=""
              ></textarea>
            </div>
          </div>

          <button
            type="submit"
            id="submit_btn"
            value="Submit"
            className="btn btn-primary"
          >
            Enviar mensaje
          </button>
        </div>

        <div id="contact_results"></div>
      </div>
    </div>
  </>
);

export default FormView;
