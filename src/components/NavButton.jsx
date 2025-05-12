import images from "../assets/imagePath";

export default function NavButton({ title, id, isActive = false, onClick }) {
  // Extract the number from id (e.g., "tab_1" → "1")
  const iconNumber = id.split("_")[1];

  return (
    <button
      id={id}
      className={`w-[4.2rem] py-2 pl-6 pr-3 rounded-l-full cursor-pointer opacity-60 ${
        isActive ? "nav-btnColor" : ""
      }`}
      title={title}
      onClick={onClick}
    >
      {/* Dark mode icon */}
      <img
        src={images[`ico_d_${iconNumber}`]}
        className="hidden dark:block w-full"
        alt={`Icon ${iconNumber} Dark`}
      />
      {/* Light mode icon */}
      <img
        src={images[`ico_l_${iconNumber}`]}
        className="block dark:hidden w-full"
        alt={`Icon ${iconNumber} Light`}
      />
    </button>
  );
}
