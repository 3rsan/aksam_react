import { Link } from "react-router-dom";

export default function Step5Success() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10">
      <div className="text-center max-w-2xl">
        <div className="mb-10 flex items-center justify-center">
          <svg
            width="200"
            height="200"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="100" cy="100" r="100" fill="#6BBF4A" />
            <path
              d="M60 100L85 125L140 70"
              stroke="white"
              strokeWidth="12"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-600 mb-5 leading-snug">
          Başvurunuz başarıyla alınmıştır.
        </h1>
        <p className="text-xl text-gray-500 leading-relaxed mb-10">
          Değerlendirme sürecinin ardından ekibimiz sizinle iletişime
          geçecektir.
        </p>
        <Link
          to="/"
          className="inline-block px-10 py-4 bg-red-600 text-white text-lg font-semibold rounded-xl hover:bg-red-700 hover:-translate-y-0.5 active:translate-y-0 transition shadow-lg"
        >
          Anasayfaya Dön
        </Link>
      </div>
    </div>
  );
}
