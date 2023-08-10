import { Buttons } from '../buttons/buttons';
import { Keyboard } from '../keyboard/keyboard';

export function Main() {
  return (
    <>
      <span className="message"> Calling...</span>
      <main className="phone">
        <Keyboard></Keyboard>
        <Buttons></Buttons>
      </main>
    </>
  );
}
