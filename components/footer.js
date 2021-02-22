import Link from "next/link";
import styles from "../styles/modules/footer.module.css";
import { ArrowUp, GitHub, Twitter } from "react-feather";

const toTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

let year = new Date().getFullYear();

export default function Footer({ children, grid }) {
  return (
    <>
      {grid ? (
        <footer className={styles.footerstripped}>
          <aside className={styles.socials}>
            <Link href="https://github.com/solo244">
              <a target="_blank">
                <GitHub />
              </a>
            </Link>
            <Link href="https://twitter.com/Elsolo244">
              <a target="_blank">
                <Twitter />
              </a>
            </Link>
          </aside>

          <section className={styles.disclaimer}>
            <section className="copyright">
              <span>© {year}</span> Ken Van Damme
            </section>
            <section className="adds">
              No <span>🍪 cookies, 👣 tracking, 💰 ads or ❗pop-ups.</span>
            </section>
          </section>
        </footer>
      ) : (
        <footer className={styles.footer}>
          <section className={styles.container}>
            <aside className={styles.socials}>
              <Link href="https://github.com/solo244">
                <a target="_blank">
                  <GitHub />
                </a>
              </Link>
              <Link href="https://twitter.com/Elsolo244">
                <a target="_blank">
                  <Twitter />
                </a>
              </Link>
            </aside>

            <section className={styles.disclaimer}>
              <article className="copyright">
                <span>© {year}</span> Ken Van Damme
              </article>
              <article className="adds">
                No <span>🍪 cookies, 👣 tracking, 💰 ads or ❗pop-ups.</span>
              </article>
              {/* // BUT I STILL WNAT A COOKIE NOTIFICATION */}
            </section>
          </section>
        </footer>
      )}
    </>
  );
}
