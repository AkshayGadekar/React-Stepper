import React, { useRef, useState } from "react";
import Box from "@mui/material/Box";
import { log } from "../../../functions/helpers";
import { StepValues, StepValue } from "./../../../types/components";
import steps from "./../../../objects/steps";
import FirstStepContent from "./FirstStep/Content";
import SecondStepContent from "./SecondStep/Content";
import ThirdStepContent from "./ThirdStep/Content";
import FirstStep from "./../components/FirstStep/Index";
import SecondStep from "./../components/SecondStep/Index";
import ThirdStep from "./../components/ThirdStep/Index";
import Preview from "./../components/Preview/Index";
import StepControls from "./../components/StepControls";
import { STEPPER_BOX_BOTTOM_SHADOW } from "./../../../config";
import { Stepper } from "../../../types/hooks";
import FirstStepForm from "./FirstStep/Form";
import SecondStepForm from "./SecondStep/Form";
import ThirdStepFooter from "./ThirdStep/Footer";

const Steps = ({ stepperHookParams }: { stepperHookParams: Stepper }) => {
  const [
    activeStep,
    skipped,
    isStepOptional,
    isStepSkipped,
    handleNext,
    handleBack,
    handleSkip,
    handleReset,
  ] = stepperHookParams;

  const firstStepperRef = useRef<{ getStepValues: () => StepValue }>();
  const secondStepperRef = useRef<{ getStepValues: () => StepValue }>();
  const thirdStepperRef = useRef<{ getStepValues: () => StepValue }>();

  const [allStepValues, setAllStepValues] = useState<StepValues>({
    firstStep: { isValid: false, values: {} },
    secondStep: { isValid: false, values: {} },
    thirdStep: { isValid: false, values: {} },
  });

  const submitCurrentStep = () => {
    let isValid = false;
    switch (activeStep) {
      case 0:
        const firstStepValues = firstStepperRef.current?.getStepValues();
        if (firstStepValues?.isValid) {
          setAllStepValues((values) => ({
            ...values,
            firstStep: firstStepValues,
          }));
          isValid = true;
        }
        break;
      case 1:
        const secondStepValues = secondStepperRef.current?.getStepValues();
        if (secondStepValues?.isValid) {
          setAllStepValues((values) => ({
            ...values,
            secondStep: secondStepValues,
          }));
          isValid = true;
        }
        break;
      case 2:
        const thirdStepValues = thirdStepperRef.current?.getStepValues();
        if (thirdStepValues?.isValid) {
          setAllStepValues((values) => ({
            ...values,
            thirdStep: thirdStepValues,
          }));
          isValid = true;
        }
        break;

      default:
        break;
    }

    if (isValid) {
      handleNext();
    }
  };

  return (
    <Box
      sx={{
        boxShadow: STEPPER_BOX_BOTTOM_SHADOW,
      }}
    >
      <Box sx={{ padding: { xs: 2, sm: 3, lg: 4 } }}>
        {activeStep == 0 && (
          <FirstStep>
            <>
              <FirstStepContent />
              <FirstStepForm
                stepValues={allStepValues.firstStep}
                ref={firstStepperRef}
              />
            </>
          </FirstStep>
        )}
        {activeStep == 1 && (
          <SecondStep>
            <>
              <SecondStepContent />
              <SecondStepForm
                stepValues={allStepValues.secondStep}
                ref={secondStepperRef}
              />
            </>
          </SecondStep>
        )}
        {activeStep == 2 && (
          <ThirdStep>
            <>
              <ThirdStepContent />
              <ThirdStepFooter
                stepValues={allStepValues.thirdStep}
                ref={thirdStepperRef}
              />
            </>
          </ThirdStep>
        )}
        {activeStep == steps.length && <Preview handleReset={handleReset} />}
      </Box>
      <StepControls
        handleBack={handleBack}
        activeStep={activeStep}
        handleNext={submitCurrentStep}
        steps={steps}
      />
    </Box>
  );
};

export default Steps;
