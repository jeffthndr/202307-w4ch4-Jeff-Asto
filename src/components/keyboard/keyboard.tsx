import { Keys } from '../key/key';

export function Keyboard() {
  return (
    <>
      <div className="keyboard-container">
        <ol className="keyboard">
          <Keys></Keys>
        </ol>
      </div>
    </>
  );
}
