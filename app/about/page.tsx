// app/about/page.tsx
import styles from "@/components/home.module.css";
import Image from "next/image"; // Import the Image component from the correct package


export default function AboutPage() {
  return (
    <div>
      <h1 className={styles.heading}>About Me</h1>
      <div className={styles.aboutpage}>
        <Image
          src="/images/Backpose.png" // Path to your image
          alt="Next.js Logo"
          width={400} // Desired width of the image
          height={150} // Desired height of the image
        />

      </div>
      <div className={styles.paragraph}>
        <p>My name is Pragati Chaudhary and I am a Data Enthusiast and DevOps professional</p>

      </div>
    </div>


  );
}
