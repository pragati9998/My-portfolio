import styles from "@/components/main.module.css"
import Image from "next/image";
import Link from "next/link";




export default function Home() {
  return (
    <main className={styles.imageContainer}>


      <div className={styles.imagewrapper}>
        <Image
          src="/images/homepic.png" // Path to your image
          alt="Next.js Logo"
          width={400} // Desired width of the image
          height={100} // Desired height of the image
        />

      </div>

      <h1 className={styles.heading}>Hey there ✌</h1>
      <div className={styles.textContainer}>
        <p>I'm passionate about transforming raw data into meaningful insights, making data analysis a key part of my professional life. With a strong foundation in engineering, I enjoy tackling complex problems and designing efficient solutions. My interest in DevOps drives me to continuously improve and automate processes, ensuring seamless integration and deployment across various platforms. Whether it's crunching numbers, optimizing systems, or streamlining workflows, I thrive on the challenge of bringing together data, engineering, and DevOps to create impactful results.</p>
      </div>
      <div className={styles.textContainer}>
        <p>I write engaging blogs and work on a range of projects that fuel my curiosity and passion. My blog posts cover a variety of topics, where I dive into trends, share insights, and offer practical advice. Beyond writing, I’m actively involved in projects that challenge my skills and allow me to experiment with new technologies. From developing innovative applications to exploring creative solutions, I enjoy applying my knowledge and making a positive impact through both my writing and hands-on work."</p>


      </div>


    </main>



  );


}


