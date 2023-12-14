import "./App.css";

function App() {
  return (
    <>
      <h1>Customer Data</h1>
      <hr />
      <div className="card">
        <img
          className="card-img-top"
          src="https://www.cleveland.com/resizer/esAKvEBmq-2oEka-DOEoUQ-_TZU=/1280x0/smart/advancelocal-adapter-image-uploads.s3.amazonaws.com/expo.advance.net/img/4eb3a4f864/width2048/28b_nnsmoviesshrek2.jpeg"
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
