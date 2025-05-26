import Link from 'next/link';
import styles from "./index.module.css";


export default function Footer() {
    return (
        <footer className={styles.footer}>
            <nav className={styles.nav}>
                <ul className={styles.items}>
                    <li>
                        <Link href="/news">ニュース</Link>
                    </li>
                          <li>
                        <Link href="/members">メンバー</Link>
                    </li>
                          <li>
                        <Link href="/contact">お問い合わせ</Link>
                    </li>
                </ul>
            </nav>
            <p className={styles.cr}>©️ SIMPLE. ALL Rights Reserver 2025</p>
        </footer>
    );
}