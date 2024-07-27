/** @format */

import Daniel from "./Daniel";
import Jonathan from "./Jonathan";
import Jean from "./Jean";
import Patrick from "./Patrick";
import Kira from "./Kira";
export default function Testimonies() {
  return (
    <div class='container'>
      <div class='row'>
        <div class='col-9'>
          <div class='row dj-gap'>
            <div class='col-8'>
              <Daniel />
            </div>
            <div class='col-4'>
              <Jonathan />
            </div>
          </div>
          <div class='row jp-gap'>
            <div class='col-4'>
              <Jean />
            </div>

            <div class='col-8'>
              <Patrick />
            </div>
          </div>
        </div>

        <div class='col-3'>
          <Kira />
        </div>
      </div>
    </div>
  );
}
