import React, { useRef, useState } from "react";
import Box from "@mui/material/Box";
import { log, getFromLocalStorage } from "../../../functions/helpers";
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

const storageValue = getFromLocalStorage("allStepValues");
const staticValue = {
  firstStep: { isValid: false, values: {} },
  secondStep: { isValid: false, values: {} },
  thirdStep: { isValid: false, values: {} },
};
const defaultValue = storageValue || staticValue;

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

  const firstStepperRef = useRef<{
    getStepValues: (direction?: "back" | "next") => StepValue;
  }>();
  const secondStepperRef = useRef<{
    getStepValues: (direction?: "back" | "next") => StepValue;
  }>();
  const thirdStepperRef = useRef<{
    getStepValues: (direction?: "back" | "next") => StepValue;
  }>();

  const [allStepValues, setAllStepValues] = useState<StepValues>(defaultValue);

  const submitCurrentStep = () => {
    let isValid = false;
    let step: string;
    let stepValues: StepValue | undefined = undefined;
    switch (activeStep) {
      case 0:
        step = "firstStep";
        stepValues = firstStepperRef.current?.getStepValues()!;
        break;
      case 1:
        step = "secondStep";
        stepValues = secondStepperRef.current?.getStepValues()!;
        break;
      case 2:
        step = "thirdStep";
        stepValues = thirdStepperRef.current?.getStepValues()!;
        break;

      default:
        break;
    }

    if (stepValues?.isValid) {
      setAllStepValues((values) => ({
        ...values,
        [step]: stepValues,
      }));
      isValid = true;
    }

    if (isValid) {
      handleNext();
    }
  };

  const backToLastStep = () => {
    let step: string;
    let stepValues: StepValue | undefined = undefined;
    switch (activeStep) {
      case 1:
        step = "secondStep";
        stepValues = secondStepperRef.current?.getStepValues("back")!;
        break;
      case 2:
        step = "thirdStep";
        stepValues = thirdStepperRef.current?.getStepValues("back")!;
        break;

      default:
        break;
    }
    if (stepValues) {
      setAllStepValues((values) => ({
        ...values,
        [step]: stepValues,
      }));
    }

    handleBack();
  };

  log("allStepValues", allStepValues);

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
                handleSubmit={submitCurrentStep}
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
                handleSubmit={submitCurrentStep}
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
        {activeStep == steps.length && (
          <Preview allStepValues={allStepValues} />
        )}
      </Box>
      <StepControls
        handleBack={backToLastStep}
        activeStep={activeStep}
        handleNext={submitCurrentStep}
        steps={steps}
        allStepValues={allStepValues}
      />
    </Box>
  );
};

export default Steps;
