const Box = (props) => {
  const { boxClass, boxText } = props;
  return (
    <div className={`card ${boxClass}`}>
      <p className="desc">{boxText}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <div className="box-container">
      <h1 className="heading">Boxes</h1>
      <div className="card-container">
        <Box boxClass="card1" boxText="Small" />
        <Box boxClass="card2" boxText="Medium" />
        <Box boxClass="card3" boxText="Large" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
