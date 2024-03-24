const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
  return (
    <div className="flex">
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "selected" : ""}`}>
          <span className="label-text text-gray-200">Male</span>
          <input
            type="checkbox"
            className="checkbox border-slate-600"
            checked={selectedGender === "male"}
            onChange={() => onCheckboxChange("male")}
          />
        </label>
      </div>
      <div>
        <label className={`label gap-2 cursor-pointer ${selectedGender === "female" ? "selected" : ""}`}>
          <span className="label-text text-gray-200">Female</span>
          <input
            type="checkbox"
            className="checkbox  border-slate-600"
            checked={selectedGender === "female"}
            onChange={() => onCheckboxChange("female")}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;

//  STARTER CODE FOR THE SIGNUP COMPONENT
// const GenderCheckbox = () => {
//   return (
//     <div className="flex">
//       <div className="form-control">
//         <label className={"label gap-2 cursor-pointer"}>
//           <span className="label-text text-gray-200">Male</span>
//           <input type="checkbox" className="checkbox border-slate-600" />
//         </label>
//       </div>
//       <div>
//         <label className={"label gap-2 cursor-pointer"}>
//           <span className="label-text text-gray-200" >Female</span>
//           <input type="checkbox" className="checkbox  border-slate-600" />
//         </label>
//       </div>
//     </div>
//   );
// };

// export default GenderCheckbox;
