import { useState, useEffect } from 'react';

// Marka listesini API'den çeker.
// Dönen shape: { brands: [], loading: bool, error: string|null }
export default function useVehicleBrands() {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchBrands() {
      try {
        setLoading(true);
        setError(null);

        // ── Gerçek endpoint gelince buraya yaz ──────────────
        // const res  = await fetch('/api/markalar');
        // const data = await res.json();
        // if (!res.ok) throw new Error(data.message ?? 'Hata');
        // if (!cancelled) setBrands(data);
        // ────────────────────────────────────────────────────

        // Mock — API hazır olunca kaldır
        await new Promise((r) => setTimeout(r, 800));
        if (!cancelled) {
          setBrands([
            {
              marka_ref_no: 9,
              marka: 'AUDI',
              arac_resim: 'https://www.carlogos.org/car-logos/audi-logo.png',
            },
            {
              marka_ref_no: 21,
              marka: 'BMW',
              arac_resim: 'https://www.carlogos.org/car-logos/bmw-logo.png',
            },
            {
              marka_ref_no: 34,
              marka: 'CITROEN',
              arac_resim: 'https://www.carlogos.org/car-logos/citroen-logo.png',
            },
            {
              marka_ref_no: 52,
              marka: 'FIAT',
              arac_resim: 'https://www.carlogos.org/car-logos/fiat-logo.png',
            },
            {
              marka_ref_no: 53,
              marka: 'FORD',
              arac_resim: 'https://www.carlogos.org/car-logos/ford-logo.png',
            },
            {
              marka_ref_no: 177,
              marka: 'HYUNDAI',
              arac_resim: 'https://www.carlogos.org/car-logos/hyundai-logo.png',
            },
            {
              marka_ref_no: 10008,
              marka: 'IVECO',
              arac_resim: 'https://www.carlogos.org/car-logos/iveco-logo.png',
            },
            {
              marka_ref_no: 430,
              marka: 'JEEP',
              arac_resim: 'https://www.carlogos.org/car-logos/jeep-logo.png',
            },
            {
              marka_ref_no: 800,
              marka: 'KIA',
              arac_resim: 'https://www.carlogos.org/car-logos/kia-logo.png',
            },
            {
              marka_ref_no: 90,
              marka: 'MERCEDES',
              arac_resim:
                'https://www.carlogos.org/car-logos/mercedes-benz-logo.png',
            },
            {
              marka_ref_no: 107,
              marka: 'NISSAN',
              arac_resim: 'https://www.carlogos.org/car-logos/nissan-logo.png',
            },
            {
              marka_ref_no: 114,
              marka: 'PEUGEOT',
              arac_resim: 'https://www.carlogos.org/car-logos/peugeot-logo.png',
            },
            {
              marka_ref_no: 123,
              marka: 'RENAULT',
              arac_resim: 'https://www.carlogos.org/car-logos/renault-logo.png',
            },
            {
              marka_ref_no: 19,
              marka: 'SEAT',
              arac_resim: 'https://www.carlogos.org/car-logos/seat-logo.png',
            },
            {
              marka_ref_no: 133,
              marka: 'SKODA',
              arac_resim: 'https://www.carlogos.org/car-logos/skoda-logo.png',
            },
            {
              marka_ref_no: 144,
              marka: 'TOYOTA',
              arac_resim: 'https://www.carlogos.org/car-logos/toyota-logo.png',
            },
            {
              marka_ref_no: 153,
              marka: 'VOLKSWAGEN',
              arac_resim:
                'https://www.carlogos.org/car-logos/volkswagen-logo.png',
            },
          ]);
        }
      } catch (err) {
        if (!cancelled) setError(err.message ?? 'Markalar yüklenemedi');
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchBrands();
    return () => {
      cancelled = true;
    };
  }, []);

  return { brands, loading, error };
}
