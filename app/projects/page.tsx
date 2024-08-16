import styles from "@/components/home.module.css";

export default function ProjectsPage() {
    return (
        <div className={styles.page}>
            <h1 className={styles.heading}>Projects</h1>
            <div className={styles.container}>
                <div className={styles.projectCard}>
                    <a href="#" className={styles.projectLink}>
                        <img
                            className={styles.projectImage}
                            src="/images/download.png"
                            alt="Project Thumbnail"
                        />
                        <div className={styles.projectDetails}>
                            <h2 className={styles.projectTitle}>Project Title</h2>
                            <p className={styles.projectDescription}>A brief description of the project goes here.</p>
                        </div>
                    </a>
                    <a href="#" className={styles.readMore}>Read More</a>
                </div>
                {/* Add more project cards here */}
            </div>
        </div>
    );
}
