export const TableComp = ({
  Name,
  Age,
  Address,
  department,
  Salary,
  MaritalStatus,
  Profile
}) => {
  MaritalStatus = MaritalStatus === true ? "Married" : "single";
  return (
    <>
      <tr>
        <td>{Name}</td>
        <td>{Age}</td>
        <td>{Address}</td>
        <td>{department}</td>
        <td>{Salary}</td>
        <td>{MaritalStatus}</td>
        <td>{Profile}</td>
      </tr>
    </>
  );
};
