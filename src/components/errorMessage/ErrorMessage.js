import img from "./error.gif";

const ErrorMessage = () => {
  return (
    <img
      alt="errorGif"
      src={img}
      style={{
        display: "block",
        width: "250px",
        height: "250px",
        objectFit: "contain",
        margin: "0 auto",
      }}
    />
  );
};

export default ErrorMessage;
