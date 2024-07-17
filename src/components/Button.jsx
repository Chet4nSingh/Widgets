export default function Button({ selectedId, id, onSelectIcon, children }) {
  function handleClick() {
    onSelectIcon(id);
  }

  let cssStyles = "p-4 text-xl hover:text-stone-400 ";

  if (selectedId === id) {
    cssStyles += "text-purple-500 border-b-4 border-purple-500 hover:text-purple-500";
  }

  return (
    <button onClick={handleClick} className={cssStyles}>
      {children}
    </button>
  );
}
