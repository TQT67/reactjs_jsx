import React from "react";

export default function HelloWorld() {
  let name = "Tráng";

  const user = {
    firstName: "Quốc",
    lastName: "Tráng",
  };

  const formatName = (user) => {
    return user.firstName + " " + user.lastName;
  };
  return (
    <div>
      <div>
        Xin chào: {name} và {formatName(user)}
      </div>
      <div>{name === "Tráng" ? "Xin Chào Tráng" : `Xin Chào ${formatName(user)}`}</div>
      <div>Rất vui được gặp bạn</div>
    </div>
  );
}
