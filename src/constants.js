export const formFields = {
  jobTitle: {
    name: "Job Title",
    value: "",
    isRequired: true,
    placeholder: "ex. UI UX Designer",
  },
  companyName: {
    name: "Company name",
    value: "",
    isRequired: true,
    placeholder: "ex. Google",
  },
  industry: {
    name: "Industry",
    value: "",
    isRequired: true,
    placeholder: "ex. Information Technology",
  },
  location: {
    name: "Location",
    value: "",
    isRequired: false,
    placeholder: "ex. Chennai",
  },
  remoteType: {
    name: "Remote Type",
    value: "",
    isRequired: false,
    placeholder: "ex. In-office",
  },
  experienceMin: {
    name: "Experience",
    value: "",
    placeholder: "Minimum",
  },
  experienceMax: {
    name: "",
    value: "",
    placeholder: "Maximum",
  },
  salaryMin: {
    name: "Salary",
    value: "",
    placeholder: "Minimum",
  },
  salaryMax: {
    name: "",
    value: "",
    placeholder: "Maximum",
  },
  totalEmp: {
    name: "Total employee",
    value: "",
    placeholder: "ex. 100",
  },
  applyType: {
    name: "Apply type",
    value: "",
    options: ["Quick apply", "External apply"],
    type: "radio",
    isRequired: true,
  },
};

const fieldKey = {
  jobTitle: "jobTitle",
  companyName: "companyName",
  industry: "industry",
  location: "location",
  remoteType: "remoteType",
  experienceMin: "experienceMin",
  experienceMax: "experienceMax",
  salaryMin: "salaryMin",
  salaryMax: "salaryMax",
  totalEmp: "totalEmp",
  applyType: "applyType",
};

export const questionFormatStep1 = [
  [fieldKey.jobTitle],
  [fieldKey.companyName],
  [fieldKey.industry],
  [fieldKey.location, fieldKey.remoteType],
];

export const questionFormatStep2 = [
  [fieldKey.experienceMin, fieldKey.experienceMax],
  [fieldKey.salaryMin, fieldKey.salaryMax],
  [fieldKey.totalEmp],
  [fieldKey.applyType],
];

export const pageStates = {
  createJobButton: "createJobButton",
  step1: "step1",
  step2: "step2",
  listItem: "listItem",
};
