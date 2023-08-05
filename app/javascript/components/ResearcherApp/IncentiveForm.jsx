import * as React from 'react';
import { useState } from 'react';
import { updateIncentive } from '@api/endpoints';

// interface Props {
//   data: Incentive[];
// }
export const IncentiveForm = ({ data }) => {
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');
  const [inputValue, setInputValue] = useState(data[0].code);

  async function handleClickSave() {
    setSaving(true);
    const incentive = await updateIncentive(data[0].id, { code: inputValue });
    if (incentive) {
      setMessage('Successfully updated!');
      setTimeout(() => setMessage(''), 2000);
    } else {
      setMessage('An error occured');
    }
    setSaving(false);
  }

  return (
    <div>
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
          disabled={saving}
          className="hover:bg-gray-100 bg-gray-200 rounded-md px-4 py-2"
          onClick={handleClickSave}
        >
          Save
        </button>
      </div>
      {message && <div className="text-gray-600 italic">{message}</div>}
    </div>
  );
};
