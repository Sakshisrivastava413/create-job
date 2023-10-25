const HollowButton = ({ onClick, title }) => {
  return (
    <button
      type="button"
      className="rounded px-4 py-2 text-xs font-semibold text-base font-medium shadow-sm bg-transparent border text-[#1597E4] border-[#1597E4] cursor-pointer"
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default HollowButton;
