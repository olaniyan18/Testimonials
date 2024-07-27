/** @format */
import "../style.css";
import imagejean from "../images/image-jeanette.jpg";

export default function Jean() {
  return (
    <div className='jean-testimony'>
      <img class='image' src={imagejean} />
      <div className='jean-graduate'>
        <div className='jean'>
          <span>Jeanette Harmon </span>
        </div>
        <div className='graduate'>
          <span>Verified Graduate</span>
        </div>
      </div>
      <div className='testimony '>
        <span className='span jean-kira'>
          An overall wonderful and rewarding experience
        </span>

        <p className='p'>
          “ Thank you for the wonderful experience! I now have a job I really
          enjoy, and make a good living while doing something I love. ”
        </p>
      </div>
    </div>
  );
}
