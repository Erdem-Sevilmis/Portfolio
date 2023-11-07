import { useSteps, Stepper, Step, StepIndicator, StepStatus, StepIcon, StepNumber, StepTitle, StepDescription, StepSeparator, Box } from "@chakra-ui/react"
import { render } from "react-dom"

const steps = [
    { title: 'Welcome', },
    { title: 'Socials', },
    { title: 'Projects',},
    { title: 'Done ',},
  ]
  

export default function MainPageStepper() {
    const { activeStep } = useSteps({
        index: 1,
        count: steps.length,
      })

    return (
        <Stepper display={{base:'none', md: 'flex'}} position={'sticky'} bottom={'30%'} left={0} pl={{base:0,lg:'5'}} index={activeStep} orientation='vertical' height='400px' gap='0'>
        {steps.map((step, index) => (
          <Step key={index}>
            <StepIndicator>
              <StepStatus
                complete={<StepIcon />}
                incomplete={<StepNumber />}
                active={<StepNumber />}
              />
            </StepIndicator>
  
            <Box flexShrink='0'>
              <StepTitle>{step.title}</StepTitle>
            </Box>
  
            <StepSeparator />
          </Step>
        ))}
      </Stepper>
    );
}
