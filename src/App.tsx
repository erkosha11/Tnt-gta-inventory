import s from "./App.module.scss";

import GunImg from "./assets/gun.png";
import AppleImg from "./assets/apple.png";

export const App = () => {
  return (
    <div className={s.bg}>
      <div className={s.inventory}>
        <div className={s.me}>
          <div className={s.pocket}>
            <h1>Карман</h1>
            <div className={s.grid}>
              {Array.from({ length: 10 }).map((_, idx) => (
                <div key={idx} className={s.item}></div>
              ))}
            </div>
          </div>
          <div className={s.backpack}>
            <h1>Портфель</h1>
            <div className={s.grid}>
              {Array.from({ length: 20 }).map((_, idx) => (
                <div key={idx} className={s.item}></div>
              ))}
            </div>
          </div>
        </div>
        <div className={s.trunk}>
          <div className={s.title}>
            <h1>Багажник</h1>
            <button>Выйти</button>
          </div>
          <div className={s.grid}>
            {Array.from({ length: 35 }).map((_, idx) => (
              <div key={idx} className={s.item}></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
