const selectCssPatern = (
  figureShape: string = "circle",
  animationIntensity: string,
) => {

    let selectedCssPatern:string = "";

    switch (figureShape) {
      case "circle":
        if (animationIntensity === "small"){
          selectedCssPatern = "circleSmallMovement";
        } else if (animationIntensity === "middle") {
          selectedCssPatern = "circleMiddleMovement";
        } else if (animationIntensity === "strong") {
          selectedCssPatern = "circleLargeMovement";
        }
        return selectedCssPatern;

      case "square":
        if (animationIntensity === "small"){
          selectedCssPatern = "squareSmallMovement";
        } else if (animationIntensity === "middle") {
          selectedCssPatern = "squareMiddleMovement";
        } else if (animationIntensity === "strong") {
          selectedCssPatern = "squareStrongMovement";
        }
        return selectedCssPatern;

      default:
        console.error("error");
    }
}

export default selectCssPatern;
