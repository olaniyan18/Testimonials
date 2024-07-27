/** @format */
import "../style.css";
import imagejonathan from "../images/image-jonathan.jpg";

export default function Jonathan() {
  return (
    <div className='jonathan-testimony'>
      <img class='image' src={imagejonathan} />
      <div className='jonathan-graduate'>
        <div className='jonathan'>
          <span>Jonathan Walters</span>
        </div>
        <div className='graduate'>
          <span>Verified Graduate</span>
        </div>
      </div>
      <div className='testimony'>
        <span className='span'>
          The team was very supportive and kept me motivated
        </span>

        <p className='jean-p'>
          “ I started as a total newbie with virtually no coding skills. I now
          work as a mobile engineer for a big company. This was one of the best
          investments I’ve made in myself. ”
        </p>
      </div>
    </div>
  );
}
