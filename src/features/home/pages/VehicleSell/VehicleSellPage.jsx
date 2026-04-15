import { useState } from 'react';
import Step1BrandModel from './steps/Step1BrandModel';
import Step2Details from './steps/Step2Details';
import Step3Upload from './steps/Step3Upload';
import Step4Contract from './steps/Step4Contract';
import Step5Success from './steps/Step5Success';

const STEPS = [
  { id: 1, label: 'Araç Bilgisi' },
  { id: 2, label: 'Detaylar' },
  { id: 3, label: 'Belgeler' },
  { id: 4, label: 'Sözleşme' },
  { id: 5, label: 'Tamamlandı' },
];

export default function VehicleSellPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});

  const next = (data = {}) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setCurrentStep((s) => Math.min(s + 1, STEPS.length));
  };

  const back = () => setCurrentStep((s) => Math.max(s - 1, 1));

  return (
    <div className="min-h-screen bg-slate-50">
      {currentStep === 1 ? (
        <Step1BrandModel onNext={next} />
      ) : (
        <>
          {/* Progress bar — sadece 2-4 arası */}
          {currentStep < 5 && (
            <div className="container mx-auto px-4 pt-8">
              <div className="max-w-2xl mx-auto mb-0">
                {/* ... progress bar kodu aynı ... */}
              </div>
            </div>
          )}

          {/* Step içerikleri — container YOK, her step kendi layout'unu yönetir */}
          {currentStep === 2 && (
            <Step2Details formData={formData} onNext={next} onBack={back} />
          )}
          {currentStep === 3 && (
            <Step3Upload formData={formData} onNext={next} onBack={back} />
          )}
          {currentStep === 4 && (
            <Step4Contract formData={formData} onNext={next} onBack={back} />
          )}
          {currentStep === 5 && (
            <div className="container mx-auto px-4">
              <Step5Success formData={formData} />
            </div>
          )}
        </>
      )}
    </div>
  );
}
