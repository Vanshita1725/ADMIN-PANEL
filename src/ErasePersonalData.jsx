import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const responsiveStyles = `
@media (max-width: 900px) {
  .epd-container { padding: 24px 8px !important; }
  .epd-main { padding: 0 !important; }
  .epd-form-row { flex-direction: column !important; align-items: stretch !important; }
  .epd-label { width: 100% !important; margin-bottom: 8px !important; }
  .epd-input { width: 100% !important; }
  .epd-table-wrap { overflow-x: auto !important; }
}
`;

const ErasePersonalData = () => {
  const [email, setEmail] = useState('');
  const [sendEmail, setSendEmail] = useState(true);

  return (
    <div>
      <style>{responsiveStyles}</style>
      <Header />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <main className="epd-main" style={{ flex: 1, background: '#f6f7f7', minHeight: '100vh', padding: '32px 32px 32px 32px' }}>
          <div className="epd-container" style={{ maxWidth: 1100, margin: '0 auto', padding: '0 16px' }}>
            <h1 style={{ fontSize: 32, fontWeight: 600, marginBottom: 0, marginTop: 0, letterSpacing: -1 }}>Erase Personal Data</h1>
            <div style={{ color: '#666', fontSize: 16, marginBottom: 32, marginTop: 8 }}>
              This tool helps site owners comply with local laws and regulations by deleting or anonymizing known data for a given user.
            </div>
            <div style={{ marginBottom: 0, marginTop: 0 }}>
              <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 24 }}>Add Data Erasure Request</h2>
              <form style={{ maxWidth: 700, marginBottom: 0 }}>
                <div className="epd-form-row" style={{ display: 'flex', alignItems: 'center', marginBottom: 18 }}>
                  <label className="epd-label" htmlFor="email" style={{ fontWeight: 500, fontSize: 16, width: 220, marginRight: 16 }}>
                    Username or email address
                  </label>
                  <input
                    className="epd-input"
                    id="email"
                    type="text"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    style={{ flex: 1, padding: '8px 12px', fontSize: 15, border: '1px solid #ccc', borderRadius: 3 }}
                  />
                </div>
                <div className="epd-form-row" style={{ display: 'flex', alignItems: 'center', marginBottom: 24 }}>
                  <label className="epd-label" htmlFor="sendEmail" style={{ fontWeight: 500, fontSize: 16, width: 220, marginRight: 16 }}>
                    Confirmation email
                  </label>
                  <input
                    id="sendEmail"
                    type="checkbox"
                    checked={sendEmail}
                    onChange={e => setSendEmail(e.target.checked)}
                    style={{ marginRight: 8, width: 18, height: 18 }}
                  />
                  <label htmlFor="sendEmail" style={{ fontSize: 15, color: '#222', cursor: 'pointer', marginRight: 8 }}>
                    Send personal data erasure confirmation email.
                  </label>
                </div>
                <button
                  type="submit"
                  style={{
                    background: '#fff',
                    color: '#2271b1',
                    border: '1px solid #2271b1',
                    borderRadius: 3,
                    fontWeight: 500,
                    fontSize: 16,
                    padding: '8px 24px',
                    cursor: 'pointer',
                    marginTop: 8
                  }}
                  disabled
                >
                  Send Request
                </button>
              </form>
            </div>
            <hr style={{ margin: '32px 0 18px 0', border: 'none', borderTop: '1px solid #e5e5e5' }} />
            <div style={{ marginTop: 0 }}>
              <div style={{ fontWeight: 500, fontSize: 16, marginBottom: 8 }}>All (0)</div>
              <div className="epd-table-wrap" style={{ background: '#fff', border: '1px solid #e5e5e5', borderRadius: 4 }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 600 }}>
                  <thead>
                    <tr style={{ background: '#f6f7f7', borderBottom: '1px solid #e5e5e5' }}>
                      <th style={{ width: 40, textAlign: 'center', padding: 10 }}>
                        <input type="checkbox" disabled />
                      </th>
                      <th style={{ textAlign: 'left', padding: 10, fontWeight: 500 }}>Requester</th>
                      <th style={{ textAlign: 'left', padding: 10, fontWeight: 500 }}>Status</th>
                      <th style={{ textAlign: 'left', padding: 10, fontWeight: 500 }}>Next steps</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ textAlign: 'center', padding: 10 }}>
                        <input type="checkbox" disabled />
                      </td>
                      <td style={{ padding: 10, color: '#2271b1', fontWeight: 500 }}>Requester</td>
                      <td style={{ padding: 10, color: '#2271b1', fontWeight: 500 }}>Requested</td>
                      <td style={{ padding: 10, color: '#888' }}>No items found.</td>
                    </tr>
                    <tr>
                      <td style={{ textAlign: 'center', padding: 10 }}>
                        <input type="checkbox" disabled />
                      </td>
                      <td style={{ padding: 10, color: '#2271b1', fontWeight: 500 }}>Requester</td>
                      <td style={{ padding: 10, color: '#2271b1', fontWeight: 500 }}>Requested</td>
                      <td style={{ padding: 10, color: '#888' }}>Next steps</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ErasePersonalData;