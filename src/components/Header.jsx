import Button from "./Button";

export default function Header({selected, onSelectIcon}) {
  return (
    <header className="text-stone-500 flex justify-start border-b-2 border-zinc-800">
      <Button selectedId={selected} id={0} onSelectIcon={onSelectIcon}>
        <i className="fa fa-home" aria-hidden="true"></i>
      </Button>
      <Button selectedId={selected} id={1} onSelectIcon={onSelectIcon}>
        <i className="fa fa-gear" aria-hidden="true"></i>
      </Button>
      <Button selectedId={selected} id={2} onSelectIcon={onSelectIcon}>
        <i className="fa fa-lock" aria-hidden="true"></i>
      </Button>
    </header>
  );
}
