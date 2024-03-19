import Conversations from "./Conversations";
import SearchInput from "./SearchInput";

const Sidebar = () => {
  return (
    <div>
      <SearchInput />
      <div className="divider px-3"></div>
      <Conversations/>
      {/* <Conversations/>
        <LogoutButton/>*/}
    </div>
  );
};

export default Sidebar;


// STARTER CODE
// import Conversations from "./Conversations";
// import SearchInput from "./SearchInput";

// const Sidebar = () => {
//   return (
//     <div>
//       <SearchInput />
//       <div className="divider px-3"></div>
//       <Conversations/>
//       {/* <Conversations/>
//         <LogoutButton/>*/}
//     </div>
//   );
// };

// export default Sidebar;

