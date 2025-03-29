import "./../styles/Error.css";

function Error({ message }) {
  return (
    <div className="error-container">
      <p>❌ {message}</p>
    </div>
  );
}

export default Error;
