/** @format */
import "../style.css";
import imagedaniel from "../images/image-daniel.jpg";

export default function Daniel() {
  return (
    <div className='daniel-testimony'>
      <img class='image' src={imagedaniel} />
      <div className='daniel-graduate'>
        <div className='daniel'>
          <span>Daniel Clifford</span>
        </div>
        <div className='graduate'>
          <span>Verified Graduate</span>
        </div>
      </div>

      <div className='testimony'>
        <span className='span'>
          I received a job offer mid-course, and the subjects I learned were
          current, if not more so, in the company I joined. I honestly feel I
          got every penny’s worth.
        </span>

        <p className='daniel-p'>
          “ I was an EMT for many years before I joined the bootcamp. I’ve been
          looking to make a transition and have heard some people who had an
          amazing experience here. I signed up for the free intro course and
          found it incredibly fun! I enrolled shortly thereafter. The next 12
          weeks was the best - and most grueling - time of my life. Since
          completing the course, I’ve successfully switched careers, working as
          a Software Engineer at a VR startup. ”
        </p>
      </div>
    </div>
  );
}
