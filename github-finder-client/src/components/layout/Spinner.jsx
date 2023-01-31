import Spinner from "react-spinners/BeatLoader";
function Spinn() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Spinner size={20} color={"#14eecd"} />
    </div>
  );
}

export default Spinn;
