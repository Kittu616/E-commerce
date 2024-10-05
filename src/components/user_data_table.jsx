import React, { useEffect, useState } from "react";
import datas from "../data/user_data.json";

const User_Data_table = ({ params }) => {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]); 

  useEffect(() => {
    const my_datas = [];

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const my_data = JSON.parse(localStorage.getItem(key));
      if (my_data) my_datas.push(my_data);
    }

    setData([...datas, ...my_datas]); 
  }, []);

  const handleChange = (e) => {
    const value = e.target.value.toLowerCase();
    setInput(value);

    const searched_data = datas.filter(
      (item) =>
        item.name.toLowerCase().includes(value) ||
        item.status.toLowerCase().includes(value)
    );

    setData(searched_data);
  };

  return (
    <>
      <div className="bg-white p-4 rounded-lg mb-10 shadow-md">
        <div className="flex justify-between items-center mb-3 pb-1">
          <div className="text-lg sm:text-xl lg:text-2xl font-mono">
            Recent customers
          </div>
          <div className="flex w-full max-w-xs">
            <input
              type="text"
              placeholder="Search"
              className="outline-none border-2 w-full px-3 py-1 rounded-xl"
              value={input}
              onChange={handleChange}
            />
          </div>
        </div>

        <div
          className={`lg:p-2 w-full overflow-y-scroll ${params} no_scroll h-80 text-sm lg:text-base border-y-2`}
        >
          <table className="min-w-full">
            <tbody>
              {data.length > 0 ? (
                data.map((item, index) => {
                  let propr = "";
                  switch (item.status) {
                    case "completed":
                      propr = "bg-green-500";
                      break;
                    case "incomplete":
                      propr = "bg-red-500";
                      break;
                    default:
                      propr = "";
                  }
                  return (
                    <tr key={index} className="hover:bg-gray-100">
                      <td className="py-3 px-4 text-left flex gap-2 items-center">
                        <span className="material-icons text-2xl">
                          account_circle
                        </span>
                        <p className="truncate">{item.name}</p>
                      </td>
                      <td>{item.date}</td>
                      <td>
                        <p
                          className={`mb-1 px-4 py-1 w-min rounded-2xl ${propr}`}
                        >
                          {item.status}
                        </p>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan="3" className="text-center py-3">
                    No results found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default User_Data_table;
