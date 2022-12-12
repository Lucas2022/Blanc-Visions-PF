import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { BtnNext, BtnPrev } from '../styled-components/BtnSlider';



export const BtnSlider = ({ direction, moveSlide }: any) => {
  if (direction === "next") {
    return (
      <BtnNext onClick={moveSlide}>
        <MdArrowForwardIos />
      </BtnNext>
    );
  } else {
    return (
      <BtnPrev onClick={moveSlide}>
        <MdArrowBackIosNew />
      </BtnPrev>
    );
  }
};
