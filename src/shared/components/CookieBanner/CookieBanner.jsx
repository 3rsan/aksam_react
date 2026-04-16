import { useState } from "react";

const CookieBanner = () => {
  const [visible, setVisible] = useState(() => {
    const accepted = localStorage.getItem("cookie_accepted");
    return !accepted;
  });

  const handleAccept = () => {
    localStorage.setItem("cookie_accepted", "true");
    setVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookie_accepted", "false");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-slate-900 border-t border-slate-700 px-4 py-4">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-300 leading-relaxed">
          Web sitemizde daha iyi bir deneyim sunmak için çerezler kullanıyoruz.{" "}
          <a
            href="/cerez-politikasi"
            className="text-red-600 hover:text-red-500 underline transition-colors"
          >
            Çerez Politikası
          </a>
          'nı inceleyebilirsiniz.
        </p>
        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            onClick={handleReject}
            className="px-4 py-2 text-sm text-slate-400 hover:text-white border border-slate-600 hover:border-slate-400 rounded-lg transition-colors"
          >
            Reddet
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-2 text-sm font-semibold bg-red-600 hover:bg-red-500 text-white rounded-lg transition-colors"
          >
            Kabul Et
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
