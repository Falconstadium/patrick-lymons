export default function Contact() {
  return (
    <div
      className="min-h-[75dvh] flex items-center justify-center z-50 py-20 px-5"
      id="contact">
      <div className="max-w-xl w-full space-y-4">
        {/* Header */}
        <div>
          <h1 className="font-general font-medium text-xs text-neutral-500">
            Contact
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold mb-2 font-general">
            Let’s build your plan together!
          </h2>
          <p className="font-gambetta text-sm">
            Have a question about training, nutrition, or which program fits you
            best? Reach out — we’ll help you find your next step forward.
          </p>
        </div>

        {/* Send Button */}
        <button
          onClick={() => window.open('https://ig.me/m/patricklyons', '_blank')}
          className="w-full text-white bg-[#E63946] font-medium font-general text-sm py-2 rounded-lg transition shadow-lg hover:bg-red-600 active:bg-red-600">
          Send a Message
        </button>
      </div>
    </div>
  );
}
