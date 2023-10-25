"use client";

import { deleteJob, editJob, getJobs, postJob } from "@/apis";
import Button from "@/common-components/Button";
import Home from "@/components/Home";
import StepsForm from "@/components/StepsForm";
import {
  formFields,
  pageStates,
  questionFormatStep1,
  questionFormatStep2,
} from "@/constants";
import { useEffect, useMemo, useState } from "react";

const screenState = {
  none: "none",
  error: "error",
  loading: "loading",
};

export default function Index() {
  const [pageState, setPageState] = useState(pageStates.createJobButton);
  const [formData, setFormData] = useState({ ...formFields });
  const [screen, setScreen] = useState(screenState.none);
  const [data, setData] = useState([]);
  const [editId, setEditId] = useState(null);

  const fetchJobs = () => {
    setScreen(screenState.loading);
    getJobs()
      .then((res) => {
        setData(res.data);
        setPageState(pageStates.listItem);
        setScreen(screenState.none);
      })
      .catch((error) => {
        setScreen(screenState.error);
      });
  };

  const getKeyValuePair = () => {
    const data = Object.keys(formData).reduce((acc, key) => {
      acc[key] = formData[key].value;
      return acc;
    }, {});
    return data;
  };

  const postNewJob = () => {
    const data = getKeyValuePair();
    setScreen(screenState.loading);

    postJob(data)
      .then(() => {
        setScreen(screenState.none);
        fetchJobs();
      })
      .catch((error) => {
        setScreen(screenState.error);
      });
  };

  const editExitingJob = () => {
    const data = getKeyValuePair();
    setScreen(screenState.loading);

    editJob(editId, data)
      .then(() => {
        setScreen(screenState.none);
        fetchJobs();
      })
      .catch((error) => {
        setScreen(screenState.error);
      });
  };

  const handleDelete = (id) => {
    setScreen(screenState.loading);
    deleteJob(id)
      .then(() => {
        fetchJobs();
      })
      .catch((error) => {
        setScreen(screenState.error);
      });
  };

  const handleEdit = (item) => {
    const modified = Object.keys(formData).reduce(
      (acc, key) => {
        acc[key] = { ...formData[key], value: item[key] };
        return acc;
      },
      { ...formData }
    );
    setFormData(modified);
    setEditId(item.id);
    setPageState(pageStates.step1);
  };

  const setValue = (e) => {
    const updatedFormData = {
      ...formData,
      [e.target.id]: {
        ...formData[e.target.id],
        value: e.target.value,
        error: false,
      },
    };
    setFormData(updatedFormData);
  };

  const checkValidation = () => {
    const form = { ...stepProps.formFields };
    let allValidated = true;
    const modified = Object.keys(form).reduce(
      (acc, key) => {
        const error = form[key].isRequired && !form[key].value;
        if (error) allValidated = false;
        acc[key] = { ...form[key], error };
        return acc;
      },
      { ...formData }
    );
    setFormData(modified);
    return allValidated;
  };

  const stepProps = useMemo(() => {
    const questionFormat =
      pageState === pageStates.step1
        ? questionFormatStep1
        : questionFormatStep2;
    const stepNo = pageState === pageStates.step1 ? 1 : 2;
    const questions = questionFormat.flat();
    const formFields = Object.keys(formData).reduce((acc, key) => {
      if (questions.includes(key)) acc[key] = formData[key];
      return acc;
    }, {});

    return {
      questionFormat,
      stepNo,
      formFields,
    };
  }, [pageState, formData]);

  const handleNext = () => {
    if (pageState === pageStates.createJobButton)
      setPageState(pageStates.step1);
    if (pageState === pageStates.step1) {
      if (checkValidation()) setPageState(pageStates.step2);
    }
    if (pageState === pageStates.step2)
      if (checkValidation()) {
        if (!editId) postNewJob();
        else editExitingJob();
      }
  };

  if (screen === screenState.loading) return <p>Loading...</p>;
  if (screen === screenState.error) return <p>Error!</p>;
  if (pageState === pageStates.step1 || pageState === pageStates.step2)
    return (
      <StepsForm handleNext={handleNext} setValue={setValue} {...stepProps} />
    );
  if (pageState === pageStates.listItem)
    return (
      <Home data={data} handleEdit={handleEdit} handleDelete={handleDelete} />
    );
  return <Button title={"Create job"} onClick={handleNext} />;
}
