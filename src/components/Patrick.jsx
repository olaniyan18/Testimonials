/** @format */
import imagepatrick from "../images/image-patrick.jpg";
import "../style.css";
export default function Patrick() {
  return (
    <div className='patrick-testimony'>
      <img class='image' src={imagepatrick} />
      <div className='patrick-graduate'>
        <div className='patrick'>
          <span>Patrick Abrams</span>
        </div>
        <div className='graduate'>
          <span>Verified Graduate</span>
        </div>
      </div>
      <div className='testimony'>
        <span className='span patrick-span'>
          Awesome teaching support from TAs who did the bootcamp themselves.
          Getting guidance from them and learning from their experiences was
          easy.
        </span>

        <p className='patrick-p'>
          “ The staff seem genuinely concerned about my progress which I find
          really refreshing. The program gave me the confidence necessary to be
          able to go out in the world and present myself as a capable junior
          developer. The standard is above the rest. You will get the personal
          attention you need from an incredible community of smart and amazing
          people. ”
        </p>
      </div>
    </div>
  );
}
