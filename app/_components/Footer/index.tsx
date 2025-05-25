import styles from "./index.module.css"

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <nav className={styles.nav}>
                <ul className={styles.items}>
                    <li>
                        <a href="/news">ニュース</a>
                    </li>
                          <li>
                        <a href="/menbers">メンバー</a>
                    </li>
                          <li>
                        <a href="/contact">お問い合わせ</a>
                    </li>
                </ul>
            </nav>
            <p className={styles.cr}>©️ SIMPLE. ALL Rights Reserver 2025</p>
        </footer>
    );
}