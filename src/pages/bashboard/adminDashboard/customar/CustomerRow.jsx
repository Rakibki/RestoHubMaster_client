const CustomerRow = ({ customer }) => {

  console.log(customer);

  return (
    <tr className="border-2 border-white">
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask w-[70px] rounded-full h-[70px]">
              <img src={customer?.image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td>
        <h2 className="text-base">{customer?.name}</h2>
      </td>
      <td>
        <h2 className="text-base">{customer?.email}</h2>
      </td>
      <td>
        {
          customer?.oder ? <h2 className="text-base">{customer?.oder}</h2> : <h2 className="text-base">0</h2>
        }
      </td>
      <td>
        <h2 className="text-base">0</h2>
      </td>
    </tr>
  );
};

export default CustomerRow;
