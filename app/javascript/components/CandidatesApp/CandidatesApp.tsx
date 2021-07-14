import * as React from 'react';
import { useEffect, useState, useRef } from 'react';
import { getIncentives } from '@api/endpoints';

// Candidate app is responsible for the redemptions of the code
export const CandidatesApp: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Incentive[]>(null);
  // const input = useRef(null);

  useEffect(() => {
    getIncentives()
      .then(incentives => {
        setData(incentives.incentives);
        setLoading(false);
      });
  }, []);

  const copyCodeToClipboard = () => {
    console.log('TODO : Implement this with refHooks!')
    // input.current.focus()
    // document.execCommand('copy')
  }

  return (
    <div className="px-12 py-6">
      <h1 className="text-2xl font-bold mb-6">Incentive Codes</h1>

      { loading && <span>Loading...</span> }

      {
        !loading && data !== undefined && data.map((el) => (
          <span
            key={el.code}
            className="flex space-x-2 pb-4"
          >
            <input
              className="text-xl border"
              defaultValue={el.code}
              name={el.code}
            />
            <button
              className="hover:bg-gray-100 bg-gray-200 rounded-md px-4 py-2"
              onClick={() => this.copyCodeToClipboard()}>
              Copy
            </button>
            <button
              className="hover:bg-gray-100 bg-gray-200 rounded-md px-4 py-2"
              onClick={() => window.location = `/redeem/${el.code}`}>
              Redeem
            </button>
          </span>
        ))
      }
    </div>
  );
};
