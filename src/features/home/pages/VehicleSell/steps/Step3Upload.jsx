import { useState, useRef } from 'react';

const UploadIcon = () => (
  <svg
    width="80"
    height="80"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 20C10 14.4772 14.4772 10 20 10H46.6667L70 33.3333V60C70 65.5228 65.5228 70 60 70H20C14.4772 70 10 65.5228 10 60V20Z"
      stroke="#9CA3AF"
      strokeWidth="2.5"
    />
    <path
      d="M46.6667 10V26.6667C46.6667 30.3486 49.6514 33.3333 53.3333 33.3333H70"
      stroke="#9CA3AF"
      strokeWidth="2.5"
    />
    <circle
      cx="52"
      cy="52"
      r="14"
      fill="white"
      stroke="#9CA3AF"
      strokeWidth="2.5"
    />
    <path
      d="M52 58V46M52 46L47 51M52 46L57 51"
      stroke="#9CA3AF"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

function UploadBox({
  label,
  files,
  onFiles,
  dragOver,
  onDragOver,
  onDragLeave,
  onDrop,
}) {
  const inputRef = useRef(null);

  return (
    <div
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      onClick={() => inputRef.current?.click()}
      className={`bg-white border-2 border-dashed rounded-xl p-12 flex flex-col items-center justify-center text-center min-h-96 cursor-pointer transition-all ${
        dragOver
          ? 'border-red-600 bg-red-50 border-solid'
          : 'border-gray-300 hover:border-red-600 hover:bg-red-50'
      }`}
    >
      <div className="mb-6">
        <UploadIcon />
      </div>

      {files.length > 0 ? (
        <div className="flex flex-col gap-2 w-full">
          {files.map((f, i) => (
            <div
              key={i}
              className="flex items-center gap-2 bg-red-50 border border-red-200 rounded-lg px-3 py-2 text-sm text-red-700"
            >
              <span className="truncate flex-1">{f.name}</span>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onFiles(files.filter((_, j) => j !== i));
                }}
                className="text-red-400 hover:text-red-600 flex-shrink-0"
              >
                ✕
              </button>
            </div>
          ))}
          <p className="text-xs text-gray-400 mt-2">
            Daha fazla eklemek için tıklayın
          </p>
        </div>
      ) : (
        <>
          <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-sm">
            {label}
          </p>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              inputRef.current?.click();
            }}
            className="bg-red-600 text-white px-12 py-3 rounded-lg text-base font-semibold hover:bg-red-700 hover:-translate-y-0.5 active:translate-y-0 transition"
          >
            Gözat
          </button>
        </>
      )}

      <input
        ref={inputRef}
        type="file"
        multiple
        accept="image/*"
        className="hidden"
        onChange={(e) => onFiles([...files, ...Array.from(e.target.files)])}
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}

export default function Step3Upload({ onNext, onBack }) {
  const [vehicleFiles, setVehicleFiles] = useState([]);
  const [licenseFiles, setLicenseFiles] = useState([]);
  const [dragOver1, setDragOver1] = useState(false);
  const [dragOver2, setDragOver2] = useState(false);

  const handleDrop = (e, setter, setDrag) => {
    e.preventDefault();
    setDrag(false);
    const files = Array.from(e.dataTransfer.files).filter((f) =>
      f.type.startsWith('image/'),
    );
    setter((prev) => [...prev, ...files]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext({ vehicleFiles, licenseFiles });
  };

  return (
    <div
      className="min-h-screen flex items-center"
      style={{
        backgroundImage:
          "url('/assets/images/aksam-web-site-tasarim-template-3.png')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
      }}
    >
      <div className="w-full max-w-5xl mx-auto px-4 relative left-[3%]">
        {/* Banner */}
        <div className="bg-red-600 text-white px-8 py-6 rounded-2xl mb-10 shadow text-center text-base leading-relaxed">
          Aracın iç, dış ve hasarlı bölgelerini net şekilde gösteren detaylı
          fotoğrafları ilk alana yükleyiniz; inceleme sürecinin sağlıklı
          ilerleyebilmesi için ruhsatın ön ve arka yüz görsellerini ise ikinci
          alana ekleyiniz.
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            <UploadBox
              label="Detaylı araç görsellerini bu alana sürükleyip bırakarak ya da aşağıdaki butona tıklayarak yükleyebilirsiniz."
              files={vehicleFiles}
              onFiles={setVehicleFiles}
              dragOver={dragOver1}
              onDragOver={(e) => {
                e.preventDefault();
                setDragOver1(true);
              }}
              onDragLeave={() => setDragOver1(false)}
              onDrop={(e) => handleDrop(e, setVehicleFiles, setDragOver1)}
            />
            <UploadBox
              label="Ruhsat görsellerini bu alana sürükleyip bırakarak ya da aşağıdaki butona tıklayarak yükleyebilirsiniz."
              files={licenseFiles}
              onFiles={setLicenseFiles}
              dragOver={dragOver2}
              onDragOver={(e) => {
                e.preventDefault();
                setDragOver2(true);
              }}
              onDragLeave={() => setDragOver2(false)}
              onDrop={(e) => handleDrop(e, setLicenseFiles, setDragOver2)}
            />
          </div>

          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={onBack}
              className="px-8 py-4 border-2 border-red-600 text-red-600 rounded-xl text-lg font-semibold hover:bg-red-600 hover:text-white transition"
            >
              Geri
            </button>
            <button
              type="submit"
              className="px-20 py-4 bg-red-600 text-white rounded-xl text-lg font-semibold shadow-lg hover:bg-red-700 hover:-translate-y-0.5 active:translate-y-0 transition"
            >
              Devam Et
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
