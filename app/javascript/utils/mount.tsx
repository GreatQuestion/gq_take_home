import * as React from 'react';
import ReactDOM from 'react-dom';

export function mount (id: string, Component: React.FC): void {
  const el = document.getElementById(id)
  if (!el) {
    return
  }
  const props = el.dataset.props ? JSON.parse(el.dataset.props) : {}
  ReactDOM.render(<Component {...props} />, el);
}
