import Image from "next/image";
import Link from "next/link";
import Gnb from "./Gnb";
import styles from "styles/Top.module.css";

const MAIN_NAME = "TAKEAWAYS";

function Top() {
  return (
    <header>
      <Link href="/">
        <a>
          <div className={styles.container}>
            <div className={styles.imageWrap}>
              <Image src="/images/logo.png" alt="logo" width="80" height="80" />
            </div>
            <h1 className={styles.title}>
              {MAIN_NAME.split("").map((a, i) => (
                <span key={a + i}>{a}</span>
              ))}
            </h1>
          </div>
        </a>
      </Link>
      <Gnb />
    </header>
  );
}

export default Top;
