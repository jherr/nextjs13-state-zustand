import VisualWrapper from "./VisualWrapper";

import CartTotal from "./CartTotal";

export default function Header() {
  return (
    <VisualWrapper name="Header" rsc>
      <div className="flex bg-green-800 text-white p-2 items-center">
        <div className="flex-grow text-3xl font-bold">Header</div>
        <CartTotal />
      </div>
    </VisualWrapper>
  );
}
