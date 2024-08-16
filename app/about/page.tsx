// app/about/page.tsx
import styles from "@/components/home.module.css"


export default function AboutPage() {
  return (
    <div>
      <h1 className={styles.heading}>About Me</h1>
      <div className={styles.aboutpage}>
        <img src="/images/Backpose.png" alt="Background pose" width={500} height={600} />
      </div>
      <div>
        <p className={styles.container}>My name is Pragati Chaudhary and I am a Data Enthusiast and DevOps professional</p>

      </div>
    </div>


  );
}
