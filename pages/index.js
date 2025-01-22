import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

import dynamic from "next/dynamic";
import { useEffect } from "react";

const Sketch = dynamic(() => import("react-p5"), { ssr: false });

export default function Home() {

  const setup = (p5) => {
    p5.createCanvas(window.innerWidth, window.innerHeight).class(styles.sketch);
    p5.background(200);
  };

  let theta;

  const draw = (p5) => {
    p5.background(0);
    p5.frameRate(30);
    p5.stroke(255);

    // Let's pick an angle 0 to 90 degrees based on the mouse position
    let a = (p5.mouseX / p5.width) * 90;
    // Convert it to radians
    theta = p5.radians(a);

    // Start the tree from the bottom of the screen
    p5.translate(p5.width / 2, p5.height);
    // Draw a line 120 pixels
    p5.line(0, 0, 0, -320);
    // Move to the end of that line
    p5.translate(0, -320);
    // Start the recursive branching!
    branch(p5, 520);
  };

  const branch = (p5, h) => {
    // Each branch will be 2/3rds the size of the previous one
    h *= 0.66;

    // All recursive functions must have an exit condition!!!!
    // Here, ours is when the length of the branch is 4 pixels or less
    if (h > 4) {
      p5.push();    // Save the current state of transformation
      p5.rotate(theta);   // Rotate by theta
      p5.line(0, 0, 0, -h);  // Draw the branch
      p5.translate(0, -h); // Move to the end of the branch
      branch(p5, h);       // Call myself to draw one new branch!!
      p5.pop();     // Restore the previous matrix state

      // Repeat the same thing, only branch off to the "left" this time!
      p5.push();
      p5.rotate(-theta);
      p5.line(0, 0, 0, -h);
      p5.translate(0, -h);
      branch(p5, h);
      p5.pop();
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Line Erica B.</title>
        <meta name="description" content="Personal space about Line Erica B." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Sketch setup={setup} draw={draw} className={styles.sketch} />

      <main className={styles.main}>
        <h2 className={styles.intro}>Hi there 👋, I&apos;m</h2>
        <h1 className={styles.title}>Line Erica B.</h1>
        <p className={styles.description}>
          food, people, travel, interior, kids
        </p>
        <ul className={styles.social}>
          <li>
            <a href="https://www.instagram.com/lineerica/">Instagram</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/lineerica/">LinkedIn</a>
          </li>
          <li>
            <a href="mailto:line@erica-b.dk">Mail</a>
          </li>
        </ul>
      </main>
    </div>
  );
}
