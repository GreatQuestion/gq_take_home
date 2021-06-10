import * as React from 'react';
import { useState } from 'react';
import { createIncentive, updateIncentive, getIncentives } from '@api/endpoints';

interface Props {
  // data: Incentive[];
}
export const IncentiveForm: React.FC<Props> = ({ data, setData }) => {
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');
  const [inputValue, setInputValue] = useState("");
  const [updateId, setUpdateId] = useState("")
  const [edit, setEdit] = useState(false)
  const [add, setAdd] = useState(false)

  async function handleClickSave() {
    if(add) {
      const incentive = await createIncentive({ code: inputValue });
      if (incentive) {
        setMessage('Successfully updated!');
        getIncentives()
          .then(incentives => {
            setData(incentives);
          });

        setTimeout(() => setMessage(''), 2000);
      } else {
        setMessage('An error occured');
      }
    }
    else if(edit) {
      const incentive = await updateIncentive(updateId, { code: inputValue });
      if (incentive) {
        setMessage('Successfully updated!');
        getIncentives()
          .then(incentives => {
            setData(incentives);
          });
        setTimeout(() => setMessage(''), 2000);
      } else {
        setMessage('An error occured');
      }
    }
    setEdit(false)
    setAdd(false)
    setInputValue("")
    setUpdateId("")
  }

  const handleClickCancel = () => {
    setEdit(false)
    setAdd(false)
    setUpdateId("")
  }

  const handleAdd = () => {
    setInputValue("")
    setEdit(false)
    setAdd(true)
    setUpdateId("")
  }
  const handleEdit = (val) => {
    setInputValue("")
    setEdit(true)
    setAdd(false)
    setInputValue(val.code)
    setUpdateId(val.id)
  }

  return (
    <div>
      {!edit && !add
        && <button
          disabled={saving}
          className="hover:bg-gray-100 bg-gray-200 rounded-md px-4 py-2"
          onClick={handleAdd}
        >
          Add New
        </button>
      }
      {(edit || add) && 
        <div>
          <p>Enter the coupon code for the candidate to receive:</p><br />
          <div className="flex space-x-2 pb-4">
            <input
              disabled={saving}
              className="text-xl border"
              type="text"
              name="incentive_code"
              value={inputValue}
              onChange={e => setInputValue(e.currentTarget.value)}
            />
            <button
              disabled={(saving || !inputValue)}
              className="hover:bg-gray-100 bg-gray-200 rounded-md px-4 py-2"
              onClick={handleClickSave}
            >
              Save
            </button>
            <button
              disabled={saving}
              className="hover:bg-gray-100 bg-gray-200 rounded-md px-4 py-2"
              onClick={handleClickCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      }

      {message && <div className="text-gray-600 italic">{message}</div>}
      
      <div>
        {data && data.length > 0 
          ? <table>
              <thead>
                <tr>
                  <th style={{ border: "1px solid #dddddd", padding: 15}}>
                    Code
                  </th>
                  <th style={{ border: "1px solid #dddddd", padding: 15}}>
                    redeem
                  </th>
                </tr>
              </thead>
              <tbody>
                {data?.map((val) => 
                  <tr key={val.id}>
                    <td style={{ border: "1px solid #dddddd", padding: 15}}>{val.code}</td>
                    <td style={{ border: "1px solid #dddddd", padding: 15}}>{val.users_incentives_count ? val.users_incentives_count : 0}</td>
                    <td>
                      <button
                        disabled={(val.status === "false"|| saving)}
                        className="hover:bg-gray-100 bg-gray-200 rounded-md px-4 py-2"
                        onClick={() => handleEdit(val)}
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          : ""
        }
      </div>
    </div>
  );
};
