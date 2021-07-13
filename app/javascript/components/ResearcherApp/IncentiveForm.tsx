import * as React from 'react';
import { useState } from 'react';
import { createIncentives } from '@api/endpoints';

interface Props {
  data: Incentive[];
}
export const IncentiveForm: React.FC<Props> = ({ allCodes }) => {
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');
  const [inputValue, setInputValue] = useState(allCodes)

  async function handleClickSave() {
    setSaving(true);
    const incentives = await createIncentives({ code: inputValue });
    if (incentives) {
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
        <textarea
          rows="5"
          cols="50"
          disabled={saving}
          className="text-xl border"
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
