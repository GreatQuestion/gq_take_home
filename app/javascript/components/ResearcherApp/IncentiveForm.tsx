import * as React from 'react';
import { useState } from 'react';
import { createIncentive } from '@api/endpoints';

interface Props {
}
export const IncentiveForm: React.FC<Props> = () => {
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');
  const [inputValue, setInputValue] = useState("");

  async function handleClickCreate() {
    setSaving(true);
    const incentive = await createIncentive({ code: inputValue });
    if (incentive) {
      setMessage('Successfully updated!');
      setTimeout(() => setMessage(''), 2000);
      setInputValue("");
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
          onClick={handleClickCreate}
        >
          Create
        </button>
      </div>
      {message && <div className="text-gray-600 italic">{message}</div>}
    </div>
  );
};
