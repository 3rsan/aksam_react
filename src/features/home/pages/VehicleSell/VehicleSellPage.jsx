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
      {/* Step 1 arka plan görselli */}
      {currentStep === 1 ? (
        <Step1BrandModel onNext={next} />
      ) : (
        <div className="container mx-auto px-4 py-12">
          {/* Progress bar */}
          {currentStep < 5 && (
            <div className="max-w-2xl mx-auto mb-10">
              <div className="flex items-center justify-between mb-2">
                {STEPS.slice(0, 4).map((step, i) => (
                  <div key={step.id} className="flex items-center flex-1">
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                          currentStep > step.id
                            ? 'bg-emerald-500 text-white'
                            : currentStep === step.id
                              ? 'bg-red-600 text-white'
                              : 'bg-slate-200 text-slate-500'
                        }`}
                      >
                        {currentStep > step.id ? '✓' : step.id}
                      </div>
                      <span className="text-xs text-slate-500 mt-1 whitespace-nowrap">
                        {step.label}
                      </span>
                    </div>
                    {i < 3 && (
                      <div
                        className={`flex-1 h-0.5 mx-2 mb-4 ${currentStep > step.id ? 'bg-emerald-500' : 'bg-slate-200'}`}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <Step2Details formData={formData} onNext={next} onBack={back} />
          )}
          {currentStep === 3 && (
            <Step3Upload formData={formData} onNext={next} onBack={back} />
          )}
          {currentStep === 4 && (
            <Step4Contract formData={formData} onNext={next} onBack={back} />
          )}
          {currentStep === 5 && <Step5Success formData={formData} />}
        </div>
      )}
    </div>
  );
}
