import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BarcodeScanner from '../components/BarcodeScanner';
import { api } from '../services/api';

const BarcodeScannerPage = () => {
  const [barcode, setBarcode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLookup = async (value) => {
    if (!value.trim()) return;
    setLoading(true);
    setError('');

    try {
      const response = await api.lookupBarcode(value.trim());
      navigate('/add-meal', { state: { food: response.food } });
    } catch (err) {
      setError(err.message || 'Barcode lookup failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-stack">
      <section className="panel page-hero scanner-hero">
        <p className="eyebrow">Fast capture</p>
        <h1>Barcode scanner</h1>
        <p>Scan a packaged food barcode or type it manually to pull nutrition facts into your meal log.</p>
        <div className="inline-fields scanner-controls">
          <input value={barcode} onChange={(event) => setBarcode(event.target.value)} placeholder="Enter barcode number" />
          <button className="button button-primary" type="button" disabled={loading} onClick={() => handleLookup(barcode)}>
            {loading ? 'Looking up...' : 'Lookup'}
          </button>
        </div>
        {error ? <div className="error-box">{error}</div> : null}
      </section>

      <section className="panel camera-panel">
        <div className="panel-header">
          <h2>Camera scan</h2>
          <span>Live lookup</span>
        </div>
        <BarcodeScanner onScan={handleLookup} />
      </section>
    </div>
  );
};

export default BarcodeScannerPage;
