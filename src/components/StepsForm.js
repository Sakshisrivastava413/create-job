"use client";

import Button from "@/common-components/Button";
import InputBox from "@/common-components/InputBox";
import Popup from "@/common-components/Popup";
import RadioButton from "@/common-components/RadioButton";

export default function StepsForm({
  handleNext,
  stepNo,
  formFields,
  setValue,
  questionFormat,
}) {
  return (
    <Popup>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[577px]">
        <div className="bg-white p-8 border rounded-[10px] border-card-border">
          <div className="flex flex-row justify-between mb-6">
            <p className="text-xl font-normal">Create a job</p>
            <p className="text-base font-medium">Step {stepNo}</p>
          </div>
          {questionFormat.map((question) => (
            <div
              className="flex space-x-3 justify-between items-end"
              key={question}
            >
              {question.map((key) =>
                formFields[key].type === "radio" ? (
                  <RadioButton
                    key={key}
                    fieldKey={key}
                    field={formFields[key]}
                    setValue={setValue}
                  />
                ) : (
                  <InputBox
                    fieldKey={key}
                    key={key}
                    field={formFields[key]}
                    setValue={setValue}
                  />
                )
              )}
            </div>
          ))}
          <div className="flex flex-row justify-end mt-[72px]">
            <Button
              title={stepNo === 1 ? "Next" : "Save"}
              onClick={handleNext}
            />
          </div>
        </div>
      </div>
    </Popup>
  );
}
