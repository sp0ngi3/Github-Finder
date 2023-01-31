import React from "react";
import UserResults from "../components/users/UserResults";
import UserSearch from "../components/users/UserSearch";
function Home() {
  return (
    <React.Fragment>
      <UserSearch />
      <UserResults />
    </React.Fragment>
  );
}

export default Home;
