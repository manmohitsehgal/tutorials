export const Color = props => {
  console.log(props);
  const userColor = props.color;
  const userName = props.name;
  return (
    <div
      style={{
        backgroundColor: userColor,
        color: "black",
        width: "80px",
        height: "80px"
      }}
    >
      {userName}
    </div>
  );
};
