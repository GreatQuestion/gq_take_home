import * as React from 'react';
import { useEffect, useState } from 'react';
import { getIncentives, updateIncentive } from '@api/endpoints';

export const ResearcherApp: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  const [inputValue, setInputValue] = useState('');
  const [data, setData] = useState<Incentive>(null);

  useEffect(() => {
    getIncentives()
      .then(incentives => {
        setInputValue(incentives[0].code);
        setData(incentives[0]);
        setLoading(false);
      });
  }, []);

  async function handleClickSave() {
    setSaving(true);
    const incentive = await updateIncentive(data.id, { code: inputValue });
    if (incentive) {
      setData(incentive);
      setMessage('Successfully updated!');
      setTimeout(() => setMessage(''), 2000);
    } else {
      setMessage('An error occured');
    }
    setSaving(false);
  }

  return (
    <div className="px-12 py-6">
      <h1 className="text-2xl font-bold mb-6">Setup incentive</h1>
      <p>Enter the coupon code for the candidate to receive:</p>

      <div className="py-4">
        {loading && <span>Loading...</span>}
        {!loading && (
          <div className="flex space-x-2">
            <input
              disabled={saving}
              className="text-xl border"
              type="text"
              name="incentive_code"
              value={inputValue}
              onChange={e => setInputValue(e.currentTarget.value)}
            />
            <button
              disabled={saving}
              className="hover:bg-gray-100 bg-gray-200 rounded-md px-4 py-2"
              onClick={handleClickSave}
            >
              Save
            </button>
          </div>
        )}
      </div>

      {message && <div className="py-4 text-gray-600 italic">{message}</div>}
    </div>
  );
};
