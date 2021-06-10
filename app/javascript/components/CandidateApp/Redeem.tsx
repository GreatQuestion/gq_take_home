import * as React from 'react';
import { useState } from 'react';
import { updateRedeems, getRedeems } from '@api/endpoints';

interface Props {
  // data: Incentive[];
}
export const Redeem: React.FC<Props> = ({ data, usersincentives, setData, setUsersincentives }) => {
  const [message, setMessage] = useState('');

  async function handleClickRedeem(id) {
    const incentive = await updateRedeems({ incentive_id: id });
      if (incentive) {
        getRedeems()
        .then(redeems => {
          setData(redeems.incentives);
          setUsersincentives(redeems.users_incentives)
      });
        setMessage('Successfully updated!');
        setTimeout(() => setMessage(''), 2000);
      } else {
        setMessage('An error occured');
      }

  }

  return (
    <div>
      {message && <div className="text-gray-600 italic">{message}</div>}

      <div className="pb-4">
        {data && data.length > 0
          ? <table>
              <thead>
                <tr>
                  <th style={{border: "1px solid #dddddd", padding: 15}}>
                    Title
                  </th>
                  <th style={{border: "1px solid #dddddd", padding: 15}}>
                    redeem
                  </th>
                </tr>
              </thead>
              <tbody>
                {data?.map((val) =>
                  <tr key={val.id}>
                    <td style={{ border: "1px solid #dddddd", padding: 15}}>{val.code}</td>
                    <td style={{ border: "1px solid #dddddd", padding: 15}}>
                      <button
                        disabled={(val.status === "false")}
                        className="hover:bg-gray-100 bg-gray-200 rounded-md px-4 py-2"
                        onClick={() => handleClickRedeem(val.id)}
                      >
                        Redeem
                      </button>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          : ""
        }
      </div>

      <div>
      {usersincentives && usersincentives.length > 0
        ? <table>
            <thead>
              <tr>
                <th style={{border: "1px solid #dddddd", padding: 15}}>
                  Code
                </th>
              </tr>
            </thead>
            <tbody>
              {usersincentives?.map((val) =>
                <tr key={val.id}>
                  <td style={{ border: "1px solid #dddddd", padding: 15}}>{val?.code}</td>
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
