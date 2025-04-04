import { TAdityaBirlaMedicalQuestion } from "@/store/types/Health/HealthQuotation/TAdityaBirlaMedicalQuestion";

export const ADITYA_BIRLA_MEDICAL_QUESTION_INITIAL_VALUE =
  (): TAdityaBirlaMedicalQuestion => {
    return {
      MQ01: {
        main_question: {
          id: "MQ01",
          icon_class: "tobaco",
          title:
            "HIV/SLE/ Rheumatoid Arthiritis / Scleroderma / Sarcoidosis/ Psoriasis/ bleeding or clotting disorders or any other diseases of blood, bone marrow/ immunity or skin.",
          description: "",
          status: false,
          member_data: {
            adult_one: {
              keyName: "adult_one",
              name: "",
              image_class: "adult",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Last Consultation Date",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Name of Surgery (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title:
                    "Details of treatment given(hospitalization/OPD, other)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Disability",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F5": {
                  id: "MQ1-SQ1-F5",
                  title: "Period of hospitalization (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F6": {
                  id: "MQ1-SQ1-F6",
                  title: "Any Other information",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F7": {
                  id: "MQ1-SQ1-F7",
                  title: "Disease name",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F8": {
                  id: "MQ1-SQ1-F8",
                  title: "Date of Diagnosis",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
            adult_two: {
              keyName: "adult_two",
              name: "",
              image_class: "adult",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Last Consultation Date",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Name of Surgery (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title:
                    "Details of Treatment given(hospitalization/OPD, other)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Disability",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F5": {
                  id: "MQ1-SQ1-F5",
                  title: "Period of hospitalization (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F6": {
                  id: "MQ1-SQ1-F6",
                  title: "Any Other information",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F7": {
                  id: "MQ1-SQ1-F7",
                  title: "Disease name",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F8": {
                  id: "MQ1-SQ1-F8",
                  title: "Date of Diagnosis",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
            child_one: {
              keyName: "child_one",
              name: "",
              image_class: "child",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Last Consultation Date",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Name of Surgery (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title:
                    "Details of Treatment given(hospitalization/OPD, other)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Disability",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F5": {
                  id: "MQ1-SQ1-F5",
                  title: "Period of hospitalization (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F6": {
                  id: "MQ1-SQ1-F6",
                  title: "Any Other information",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F7": {
                  id: "MQ1-SQ1-F7",
                  title: "Disease name",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F8": {
                  id: "MQ1-SQ1-F8",
                  title: "Date of Diagnosis",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
            child_two: {
              keyName: "child_two",
              name: "",
              image_class: "child",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Last Consultation Date",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Name of Surgery (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title:
                    "Details of Treatment given(hospitalization/OPD, other)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Disability",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F5": {
                  id: "MQ1-SQ1-F5",
                  title: "Period of hospitalization (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F6": {
                  id: "MQ1-SQ1-F6",
                  title: "Any Other information",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F7": {
                  id: "MQ1-SQ1-F7",
                  title: "Disease name",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F8": {
                  id: "MQ1-SQ1-F8",
                  title: "Date of Diagnosis",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
            child_three: {
              keyName: "child_three",
              name: "",
              image_class: "child",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Last Consultation Date",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Name of Surgery (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title:
                    "Details of Treatment given(hospitalization/OPD, other)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Disability",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F5": {
                  id: "MQ1-SQ1-F5",
                  title: "Period of hospitalization (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F6": {
                  id: "MQ1-SQ1-F6",
                  title: "Any Other information",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F7": {
                  id: "MQ1-SQ1-F7",
                  title: "Disease name",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F8": {
                  id: "MQ1-SQ1-F8",
                  title: "Date of Diagnosis",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
            child_four: {
              keyName: "child_four",
              name: "",
              image_class: "child",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Last Consultation Date",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Name of Surgery (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title:
                    "Details of Treatment given(hospitalization/OPD, other)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Disability",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F5": {
                  id: "MQ1-SQ1-F5",
                  title: "Period of hospitalization (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F6": {
                  id: "MQ1-SQ1-F6",
                  title: "Any Other information",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F7": {
                  id: "MQ1-SQ1-F7",
                  title: "Disease name",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F8": {
                  id: "MQ1-SQ1-F8",
                  title: "Date of Diagnosis",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
          },
        },
      },
      MQ02: {
        main_question: {
          id: "MQ02",
          icon_class: "tobaco",
          title:
            "Disease or disorder of eye, ear, nose or throat (except any sight related problems corrected by prescription lenses)?",
          description: "",
          status: false,
          member_data: {
            adult_one: {
              keyName: "adult_one",
              name: "",
              image_class: "adult",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Last Consultation Date",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Name of Surgery (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title:
                    "Details of Treatment given(hospitalization/OPD, other)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Disability",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F5": {
                  id: "MQ1-SQ1-F5",
                  title: "Period of hospitalization (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F6": {
                  id: "MQ1-SQ1-F6",
                  title: "Any Other information",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F7": {
                  id: "MQ1-SQ1-F7",
                  title: "Disease name",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F8": {
                  id: "MQ1-SQ1-F8",
                  title: "Date of Diagnosis",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
            adult_two: {
              keyName: "adult_two",
              name: "",
              image_class: "adult",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Last Consultation Date",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Name of Surgery (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title:
                    "Details of Treatment given(hospitalization/OPD, other)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Disability",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F5": {
                  id: "MQ1-SQ1-F5",
                  title: "Period of hospitalization (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F6": {
                  id: "MQ1-SQ1-F6",
                  title: "Any Other information",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F7": {
                  id: "MQ1-SQ1-F7",
                  title: "Disease name",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F8": {
                  id: "MQ1-SQ1-F8",
                  title: "Date of Diagnosis",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
            child_one: {
              keyName: "child_one",
              name: "",
              image_class: "child",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Last Consultation Date",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Name of Surgery (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title:
                    "Details of Treatment given(hospitalization/OPD, other)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Disability",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F5": {
                  id: "MQ1-SQ1-F5",
                  title: "Period of hospitalization (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F6": {
                  id: "MQ1-SQ1-F6",
                  title: "Any Other information",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F7": {
                  id: "MQ1-SQ1-F7",
                  title: "Disease name",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F8": {
                  id: "MQ1-SQ1-F8",
                  title: "Date of Diagnosis",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
            child_two: {
              keyName: "child_two",
              name: "",
              image_class: "child",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Last Consultation Date",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Name of Surgery (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title:
                    "Details of Treatment given(hospitalization/OPD, other)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Disability",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F5": {
                  id: "MQ1-SQ1-F5",
                  title: "Period of hospitalization (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F6": {
                  id: "MQ1-SQ1-F6",
                  title: "Any Other information",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F7": {
                  id: "MQ1-SQ1-F7",
                  title: "Disease name",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F8": {
                  id: "MQ1-SQ1-F8",
                  title: "Date of Diagnosis",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
            child_three: {
              keyName: "child_three",
              name: "",
              image_class: "child",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Last Consultation Date",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Name of Surgery (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title:
                    "Details of Treatment given(hospitalization/OPD, other)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Disability",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F5": {
                  id: "MQ1-SQ1-F5",
                  title: "Period of hospitalization (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F6": {
                  id: "MQ1-SQ1-F6",
                  title: "Any Other information",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F7": {
                  id: "MQ1-SQ1-F7",
                  title: "Disease name",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F8": {
                  id: "MQ1-SQ1-F8",
                  title: "Date of Diagnosis",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
            child_four: {
              keyName: "child_four",
              name: "",
              image_class: "child",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Last Consultation Date",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Name of Surgery (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title:
                    "Details of Treatment given(hospitalization/OPD, other)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Disability",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F5": {
                  id: "MQ1-SQ1-F5",
                  title: "Period of hospitalization (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F6": {
                  id: "MQ1-SQ1-F6",
                  title: "Any Other information",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F7": {
                  id: "MQ1-SQ1-F7",
                  title: "Disease name",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F8": {
                  id: "MQ1-SQ1-F8",
                  title: "Date of Diagnosis",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
          },
        },
      },
      MQ03: {
        main_question: {
          id: "MQ03",
          icon_class: "tobaco",
          title:
            "Any other disease / health adversity / injury/ condition / treatment not mentioned above",
          description: "",
          status: false,
          member_data: {
            adult_one: {
              keyName: "adult_one",
              name: "",
              image_class: "adult",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Last Consultation Date",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Name of Surgery (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title:
                    "Details of Treatment given(hospitalization/OPD, other)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Disability",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F5": {
                  id: "MQ1-SQ1-F5",
                  title: "Period of hospitalization (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F6": {
                  id: "MQ1-SQ1-F6",
                  title: "Any Other information",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F7": {
                  id: "MQ1-SQ1-F7",
                  title: "Disease name",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F8": {
                  id: "MQ1-SQ1-F8",
                  title: "Date of Diagnosis",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
            adult_two: {
              keyName: "adult_two",
              name: "",
              image_class: "adult",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Last Consultation Date",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Name of Surgery (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title:
                    "Details of Treatment given(hospitalization/OPD, other)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Disability",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F5": {
                  id: "MQ1-SQ1-F5",
                  title: "Period of hospitalization (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F6": {
                  id: "MQ1-SQ1-F6",
                  title: "Any Other information",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F7": {
                  id: "MQ1-SQ1-F7",
                  title: "Disease name",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F8": {
                  id: "MQ1-SQ1-F8",
                  title: "Date of Diagnosis",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
            child_one: {
              keyName: "child_one",
              name: "",
              image_class: "child",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Last Consultation Date",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Name of Surgery (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title:
                    "Details of Treatment given(hospitalization/OPD, other)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Disability",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F5": {
                  id: "MQ1-SQ1-F5",
                  title: "Period of hospitalization (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F6": {
                  id: "MQ1-SQ1-F6",
                  title: "Any Other information",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F7": {
                  id: "MQ1-SQ1-F7",
                  title: "Disease name",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F8": {
                  id: "MQ1-SQ1-F8",
                  title: "Date of Diagnosis",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
            child_two: {
              keyName: "child_two",
              name: "",
              image_class: "child",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Last Consultation Date",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Name of Surgery (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title:
                    "Details of Treatment given(hospitalization/OPD, other)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Disability",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F5": {
                  id: "MQ1-SQ1-F5",
                  title: "Period of hospitalization (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F6": {
                  id: "MQ1-SQ1-F6",
                  title: "Any Other information",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F7": {
                  id: "MQ1-SQ1-F7",
                  title: "Disease name",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F8": {
                  id: "MQ1-SQ1-F8",
                  title: "Date of Diagnosis",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
            child_three: {
              keyName: "child_three",
              name: "",
              image_class: "child",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Last Consultation Date",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Name of Surgery (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title:
                    "Details of Treatment given(hospitalization/OPD, other)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Disability",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F5": {
                  id: "MQ1-SQ1-F5",
                  title: "Period of hospitalization (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F6": {
                  id: "MQ1-SQ1-F6",
                  title: "Any Other information",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F7": {
                  id: "MQ1-SQ1-F7",
                  title: "Disease name",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F8": {
                  id: "MQ1-SQ1-F8",
                  title: "Date of Diagnosis",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
            child_four: {
              keyName: "child_four",
              name: "",
              image_class: "child",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Last Consultation Date",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Name of Surgery (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title:
                    "Details of Treatment given(hospitalization/OPD, other)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Disability",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F5": {
                  id: "MQ1-SQ1-F5",
                  title: "Period of hospitalization (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F6": {
                  id: "MQ1-SQ1-F6",
                  title: "Any Other information",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F7": {
                  id: "MQ1-SQ1-F7",
                  title: "Disease name",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F8": {
                  id: "MQ1-SQ1-F8",
                  title: "Date of Diagnosis",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
          },
        },
      },
      MQ04: {
        main_question: {
          id: "MQ04",
          icon_class: "tobaco",
          title:
            "Has any of the Proposed to be Insured been hospitalized/ recommended to take investigations/medication or has been under any prolonged treatment/ undergone surgery for any illness/injury other than for childbirth/minor injuries?",
          description: "",
          status: false,
          member_data: {
            adult_one: {
              keyName: "adult_one",
              name: "",
              image_class: "adult",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Last Consultation Date",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Name of Surgery (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title:
                    "Details of Treatment given(hospitalization/OPD, other)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Disability",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F5": {
                  id: "MQ1-SQ1-F5",
                  title: "Period of hospitalization (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F6": {
                  id: "MQ1-SQ1-F6",
                  title: "Any Other information",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F7": {
                  id: "MQ1-SQ1-F7",
                  title: "Disease name",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F8": {
                  id: "MQ1-SQ1-F8",
                  title: "Date of Diagnosis",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
            adult_two: {
              keyName: "adult_two",
              name: "",
              image_class: "adult",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Last Consultation Date",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Name of Surgery (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title:
                    "Details of Treatment given(hospitalization/OPD, other)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Disability",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F5": {
                  id: "MQ1-SQ1-F5",
                  title: "Period of hospitalization (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F6": {
                  id: "MQ1-SQ1-F6",
                  title: "Any Other information",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F7": {
                  id: "MQ1-SQ1-F7",
                  title: "Disease name",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F8": {
                  id: "MQ1-SQ1-F8",
                  title: "Date of Diagnosis",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
            child_one: {
              keyName: "child_one",
              name: "",
              image_class: "child",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Last Consultation Date",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Name of Surgery (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title:
                    "Details of Treatment given(hospitalization/OPD, other)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Disability",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F5": {
                  id: "MQ1-SQ1-F5",
                  title: "Period of hospitalization (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F6": {
                  id: "MQ1-SQ1-F6",
                  title: "Any Other information",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F7": {
                  id: "MQ1-SQ1-F7",
                  title: "Disease name",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F8": {
                  id: "MQ1-SQ1-F8",
                  title: "Date of Diagnosis",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
            child_two: {
              keyName: "child_two",
              name: "",
              image_class: "child",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Last Consultation Date",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Name of Surgery (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title:
                    "Details of Treatment given(hospitalization/OPD, other)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Disability",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F5": {
                  id: "MQ1-SQ1-F5",
                  title: "Period of hospitalization (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F6": {
                  id: "MQ1-SQ1-F6",
                  title: "Any Other information",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F7": {
                  id: "MQ1-SQ1-F7",
                  title: "Disease name",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F8": {
                  id: "MQ1-SQ1-F8",
                  title: "Date of Diagnosis",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
            child_three: {
              keyName: "child_three",
              name: "",
              image_class: "child",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Last Consultation Date",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Name of Surgery (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title:
                    "Details of Treatment given(hospitalization/OPD, other)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Disability",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F5": {
                  id: "MQ1-SQ1-F5",
                  title: "Period of hospitalization (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F6": {
                  id: "MQ1-SQ1-F6",
                  title: "Any Other information",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F7": {
                  id: "MQ1-SQ1-F7",
                  title: "Disease name",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F8": {
                  id: "MQ1-SQ1-F8",
                  title: "Date of Diagnosis",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
            child_four: {
              keyName: "child_four",
              name: "",
              image_class: "child",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Last Consultation Date",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Name of Surgery (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title:
                    "Details of Treatment given(hospitalization/OPD, other)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Disability",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F5": {
                  id: "MQ1-SQ1-F5",
                  title: "Period of hospitalization (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F6": {
                  id: "MQ1-SQ1-F6",
                  title: "Any Other information",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F7": {
                  id: "MQ1-SQ1-F7",
                  title: "Disease name",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F8": {
                  id: "MQ1-SQ1-F8",
                  title: "Date of Diagnosis",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
          },
        },
      },
      MQ05: {
        main_question: {
          id: "MQ05",
          icon_class: "tobaco",
          title:
            "Have you ever been diagnosed with /advised / taken treatment or observation is suggested or undergone any investigation or consulted a doctor or undergone or advised surgery or hospitalized for any one or more from the following?  If YES then please mention Details in the additional information section below",
          description: "",
          status: false,
          sub_question: {
            "MQ1-SQ1": {
              id: "MQ1-SQ1",
              icon_class: "",
              status: false,
              title: "Cancer, tumor, polyp or cyst",
              description: "",
              member_data: {
                adult_one: {
                  keyName: "adult_one",
                  name: "",
                  image_class: "adult",
                  selection_status: false,
                  field_data: {
                    "MQ1-SQ1-F1": {
                      id: "MQ1-SQ1-F1",
                      title: "Last Consultation Date",
                      field_type: "DATEPICKER",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F2": {
                      id: "MQ1-SQ1-F2",
                      title: "Name of Surgery (if any)",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F3": {
                      id: "MQ1-SQ1-F3",
                      title:
                        "Details of Treatment given(hospitalization/OPD, other)",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F4": {
                      id: "MQ1-SQ1-F4",
                      title: "Disability",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F5": {
                      id: "MQ1-SQ1-F5",
                      title: "Period of hospitalization (if any)",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F6": {
                      id: "MQ1-SQ1-F6",
                      title: "Any Other information",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F7": {
                      id: "MQ1-SQ1-F7",
                      title: "Disease name",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F8": {
                      id: "MQ1-SQ1-F8",
                      title: "Date of Diagnosis",
                      field_type: "DATEPICKER",
                      value: { value: "", warning: false },
                    },
                  },
                },
                adult_two: {
                  keyName: "adult_two",
                  name: "",
                  image_class: "adult",
                  selection_status: false,
                  field_data: {
                    "MQ1-SQ1-F1": {
                      id: "MQ1-SQ1-F1",
                      title: "Last Consultation Date",
                      field_type: "DATEPICKER",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F2": {
                      id: "MQ1-SQ1-F2",
                      title: "Name of Surgery (if any)",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F3": {
                      id: "MQ1-SQ1-F3",
                      title:
                        "Details of Treatment given(hospitalization/OPD, other)",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F4": {
                      id: "MQ1-SQ1-F4",
                      title: "Disability",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F5": {
                      id: "MQ1-SQ1-F5",
                      title: "Period of hospitalization (if any)",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F6": {
                      id: "MQ1-SQ1-F6",
                      title: "Any Other information",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F7": {
                      id: "MQ1-SQ1-F7",
                      title: "Disease name",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F8": {
                      id: "MQ1-SQ1-F8",
                      title: "Date of Diagnosis",
                      field_type: "DATEPICKER",
                      value: { value: "", warning: false },
                    },
                  },
                },
                child_one: {
                  keyName: "child_one",
                  name: "",
                  image_class: "child",
                  selection_status: false,
                  field_data: {
                    "MQ1-SQ1-F1": {
                      id: "MQ1-SQ1-F1",
                      title: "Last Consultation Date",
                      field_type: "DATEPICKER",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F2": {
                      id: "MQ1-SQ1-F2",
                      title: "Name of Surgery (if any)",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F3": {
                      id: "MQ1-SQ1-F3",
                      title:
                        "Details of Treatment given(hospitalization/OPD, other)",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F4": {
                      id: "MQ1-SQ1-F4",
                      title: "Disability",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F5": {
                      id: "MQ1-SQ1-F5",
                      title: "Period of hospitalization (if any)",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F6": {
                      id: "MQ1-SQ1-F6",
                      title: "Any Other information",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F7": {
                      id: "MQ1-SQ1-F7",
                      title: "Disease name",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F8": {
                      id: "MQ1-SQ1-F8",
                      title: "Date of Diagnosis",
                      field_type: "DATEPICKER",
                      value: { value: "", warning: false },
                    },
                  },
                },
                child_two: {
                  keyName: "child_two",
                  name: "",
                  image_class: "child",
                  selection_status: false,
                  field_data: {
                    "MQ1-SQ1-F1": {
                      id: "MQ1-SQ1-F1",
                      title: "Last Consultation Date",
                      field_type: "DATEPICKER",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F2": {
                      id: "MQ1-SQ1-F2",
                      title: "Name of Surgery (if any)",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F3": {
                      id: "MQ1-SQ1-F3",
                      title:
                        "Details of Treatment given(hospitalization/OPD, other)",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F4": {
                      id: "MQ1-SQ1-F4",
                      title: "Disability",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F5": {
                      id: "MQ1-SQ1-F5",
                      title: "Period of hospitalization (if any)",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F6": {
                      id: "MQ1-SQ1-F6",
                      title: "Any Other information",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F7": {
                      id: "MQ1-SQ1-F7",
                      title: "Disease name",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F8": {
                      id: "MQ1-SQ1-F8",
                      title: "Date of Diagnosis",
                      field_type: "DATEPICKER",
                      value: { value: "", warning: false },
                    },
                  },
                },
                child_three: {
                  keyName: "child_three",
                  name: "",
                  image_class: "child",
                  selection_status: false,
                  field_data: {
                    "MQ1-SQ1-F1": {
                      id: "MQ1-SQ1-F1",
                      title: "Last Consultation Date",
                      field_type: "DATEPICKER",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F2": {
                      id: "MQ1-SQ1-F2",
                      title: "Name of Surgery (if any)",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F3": {
                      id: "MQ1-SQ1-F3",
                      title:
                        "Details of Treatment given(hospitalization/OPD, other)",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F4": {
                      id: "MQ1-SQ1-F4",
                      title: "Disability",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F5": {
                      id: "MQ1-SQ1-F5",
                      title: "Period of hospitalization (if any)",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F6": {
                      id: "MQ1-SQ1-F6",
                      title: "Any Other information",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F7": {
                      id: "MQ1-SQ1-F7",
                      title: "Disease name",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F8": {
                      id: "MQ1-SQ1-F8",
                      title: "Date of Diagnosis",
                      field_type: "DATEPICKER",
                      value: { value: "", warning: false },
                    },
                  },
                },
                child_four: {
                  keyName: "child_four",
                  name: "",
                  image_class: "child",
                  selection_status: false,
                  field_data: {
                    "MQ1-SQ1-F1": {
                      id: "MQ1-SQ1-F1",
                      title: "Last Consultation Date",
                      field_type: "DATEPICKER",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F2": {
                      id: "MQ1-SQ1-F2",
                      title: "Name of Surgery (if any)",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F3": {
                      id: "MQ1-SQ1-F3",
                      title:
                        "Details of Treatment given(hospitalization/OPD, other)",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F4": {
                      id: "MQ1-SQ1-F4",
                      title: "Disability",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F5": {
                      id: "MQ1-SQ1-F5",
                      title: "Period of hospitalization (if any)",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F6": {
                      id: "MQ1-SQ1-F6",
                      title: "Any Other information",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F7": {
                      id: "MQ1-SQ1-F7",
                      title: "Disease name",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F8": {
                      id: "MQ1-SQ1-F8",
                      title: "Date of Diagnosis",
                      field_type: "DATEPICKER",
                      value: { value: "", warning: false },
                    },
                  },
                },
              },
            },
            "MQ1-SQ2": {
              id: "MQ1-SQ2",
              icon_class: "",
              status: false,
              title:
                "Any heart disease or disorder, chest pain or discomfort, irregular heartbeats, palpitations or heart murmur",
              description: "",
              member_data: {
                adult_one: {
                  keyName: "adult_one",
                  name: "",
                  image_class: "adult",
                  selection_status: false,
                  field_data: {
                    "MQ1-SQ1-F1": {
                      id: "MQ1-SQ1-F1",
                      title: "Last Consultation Date",
                      field_type: "DATEPICKER",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F2": {
                      id: "MQ1-SQ1-F2",
                      title: "Name of Surgery (if any)",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F3": {
                      id: "MQ1-SQ1-F3",
                      title:
                        "Details of Treatment given(hospitalization/OPD, other)",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F4": {
                      id: "MQ1-SQ1-F4",
                      title: "Disability",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F5": {
                      id: "MQ1-SQ1-F5",
                      title: "Period of hospitalization (if any)",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F6": {
                      id: "MQ1-SQ1-F6",
                      title: "Any Other information",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F7": {
                      id: "MQ1-SQ1-F7",
                      title: "Disease name",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F8": {
                      id: "MQ1-SQ1-F8",
                      title: "Date of Diagnosis",
                      field_type: "DATEPICKER",
                      value: { value: "", warning: false },
                    },
                  },
                },
                adult_two: {
                  keyName: "adult_two",
                  name: "",
                  image_class: "adult",
                  selection_status: false,
                  field_data: {
                    "MQ1-SQ1-F1": {
                      id: "MQ1-SQ1-F1",
                      title: "Last Consultation Date",
                      field_type: "DATEPICKER",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F2": {
                      id: "MQ1-SQ1-F2",
                      title: "Name of Surgery (if any)",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F3": {
                      id: "MQ1-SQ1-F3",
                      title:
                        "Details of Treatment given(hospitalization/OPD, other)",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F4": {
                      id: "MQ1-SQ1-F4",
                      title: "Disability",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F5": {
                      id: "MQ1-SQ1-F5",
                      title: "Period of hospitalization (if any)",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F6": {
                      id: "MQ1-SQ1-F6",
                      title: "Any Other information",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F7": {
                      id: "MQ1-SQ1-F7",
                      title: "Disease name",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F8": {
                      id: "MQ1-SQ1-F8",
                      title: "Date of Diagnosis",
                      field_type: "DATEPICKER",
                      value: { value: "", warning: false },
                    },
                  },
                },
                child_one: {
                  keyName: "child_one",
                  name: "",
                  image_class: "child",
                  selection_status: false,
                  field_data: {
                    "MQ1-SQ1-F1": {
                      id: "MQ1-SQ1-F1",
                      title: "Last Consultation Date",
                      field_type: "DATEPICKER",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F2": {
                      id: "MQ1-SQ1-F2",
                      title: "Name of Surgery (if any)",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F3": {
                      id: "MQ1-SQ1-F3",
                      title:
                        "Details of Treatment given(hospitalization/OPD, other)",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F4": {
                      id: "MQ1-SQ1-F4",
                      title: "Disability",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F5": {
                      id: "MQ1-SQ1-F5",
                      title: "Period of hospitalization (if any)",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F6": {
                      id: "MQ1-SQ1-F6",
                      title: "Any Other information",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F7": {
                      id: "MQ1-SQ1-F7",
                      title: "Disease name",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F8": {
                      id: "MQ1-SQ1-F8",
                      title: "Date of Diagnosis",
                      field_type: "DATEPICKER",
                      value: { value: "", warning: false },
                    },
                  },
                },
                child_two: {
                  keyName: "child_two",
                  name: "",
                  image_class: "child",
                  selection_status: false,
                  field_data: {
                    "MQ1-SQ1-F1": {
                      id: "MQ1-SQ1-F1",
                      title: "Last Consultation Date",
                      field_type: "DATEPICKER",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F2": {
                      id: "MQ1-SQ1-F2",
                      title: "Name of Surgery (if any)",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F3": {
                      id: "MQ1-SQ1-F3",
                      title:
                        "Details of Treatment given(hospitalization/OPD, other)",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F4": {
                      id: "MQ1-SQ1-F4",
                      title: "Disability",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F5": {
                      id: "MQ1-SQ1-F5",
                      title: "Period of hospitalization (if any)",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F6": {
                      id: "MQ1-SQ1-F6",
                      title: "Any Other information",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F7": {
                      id: "MQ1-SQ1-F7",
                      title: "Disease name",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F8": {
                      id: "MQ1-SQ1-F8",
                      title: "Date of Diagnosis",
                      field_type: "DATEPICKER",
                      value: { value: "", warning: false },
                    },
                  },
                },
                child_three: {
                  keyName: "child_three",
                  name: "",
                  image_class: "child",
                  selection_status: false,
                  field_data: {
                    "MQ1-SQ1-F1": {
                      id: "MQ1-SQ1-F1",
                      title: "Last Consultation Date",
                      field_type: "DATEPICKER",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F2": {
                      id: "MQ1-SQ1-F2",
                      title: "Name of Surgery (if any)",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F3": {
                      id: "MQ1-SQ1-F3",
                      title:
                        "Details of Treatment given(hospitalization/OPD, other)",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F4": {
                      id: "MQ1-SQ1-F4",
                      title: "Disability",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F5": {
                      id: "MQ1-SQ1-F5",
                      title: "Period of hospitalization (if any)",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F6": {
                      id: "MQ1-SQ1-F6",
                      title: "Any Other information",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F7": {
                      id: "MQ1-SQ1-F7",
                      title: "Disease name",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F8": {
                      id: "MQ1-SQ1-F8",
                      title: "Date of Diagnosis",
                      field_type: "DATEPICKER",
                      value: { value: "", warning: false },
                    },
                  },
                },
                child_four: {
                  keyName: "child_four",
                  name: "",
                  image_class: "child",
                  selection_status: false,
                  field_data: {
                    "MQ1-SQ1-F1": {
                      id: "MQ1-SQ1-F1",
                      title: "Last Consultation Date",
                      field_type: "DATEPICKER",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F2": {
                      id: "MQ1-SQ1-F2",
                      title: "Name of Surgery (if any)",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F3": {
                      id: "MQ1-SQ1-F3",
                      title:
                        "Details of Treatment given(hospitalization/OPD, other)",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F4": {
                      id: "MQ1-SQ1-F4",
                      title: "Disability",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F5": {
                      id: "MQ1-SQ1-F5",
                      title: "Period of hospitalization (if any)",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F6": {
                      id: "MQ1-SQ1-F6",
                      title: "Any Other information",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F7": {
                      id: "MQ1-SQ1-F7",
                      title: "Disease name",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F8": {
                      id: "MQ1-SQ1-F8",
                      title: "Date of Diagnosis",
                      field_type: "DATEPICKER",
                      value: { value: "", warning: false },
                    },
                  },
                },
              },
            },
          },
        },
      },
      MQ06: {
        main_question: {
          id: "MQ06",
          icon_class: "tobaco",
          title:
            "Has any of the Proposed to be Insured have been suffering/suffered from Covid-19 disease?If   yes, confirm if any complications arise due to covid-19.",
          description: "",
          status: false,
          member_data: {
            adult_one: {
              keyName: "adult_one",
              name: "",
              image_class: "adult",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Last Consultation Date",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Name of Surgery (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title:
                    "Details of Treatment given(hospitalization/OPD, other)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Disability",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F5": {
                  id: "MQ1-SQ1-F5",
                  title: "Period of hospitalization (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F6": {
                  id: "MQ1-SQ1-F6",
                  title: "Any Other information",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F7": {
                  id: "MQ1-SQ1-F7",
                  title: "Disease name",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F8": {
                  id: "MQ1-SQ1-F8",
                  title: "Date of Diagnosis",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
            adult_two: {
              keyName: "adult_two",
              name: "",
              image_class: "adult",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Last Consultation Date",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Name of Surgery (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title:
                    "Details of Treatment given(hospitalization/OPD, other)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Disability",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F5": {
                  id: "MQ1-SQ1-F5",
                  title: "Period of hospitalization (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F6": {
                  id: "MQ1-SQ1-F6",
                  title: "Any Other information",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F7": {
                  id: "MQ1-SQ1-F7",
                  title: "Disease name",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F8": {
                  id: "MQ1-SQ1-F8",
                  title: "Date of Diagnosis",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
            child_one: {
              keyName: "child_one",
              name: "",
              image_class: "child",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Last Consultation Date",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Name of Surgery (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title:
                    "Details of Treatment given(hospitalization/OPD, other)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Disability",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F5": {
                  id: "MQ1-SQ1-F5",
                  title: "Period of hospitalization (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F6": {
                  id: "MQ1-SQ1-F6",
                  title: "Any Other information",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F7": {
                  id: "MQ1-SQ1-F7",
                  title: "Disease name",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F8": {
                  id: "MQ1-SQ1-F8",
                  title: "Date of Diagnosis",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
            child_two: {
              keyName: "child_two",
              name: "",
              image_class: "child",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Last Consultation Date",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Name of Surgery (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title:
                    "Details of Treatment given(hospitalization/OPD, other)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Disability",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F5": {
                  id: "MQ1-SQ1-F5",
                  title: "Period of hospitalization (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F6": {
                  id: "MQ1-SQ1-F6",
                  title: "Any Other information",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F7": {
                  id: "MQ1-SQ1-F7",
                  title: "Disease name",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F8": {
                  id: "MQ1-SQ1-F8",
                  title: "Date of Diagnosis",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
            child_three: {
              keyName: "child_three",
              name: "",
              image_class: "child",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Last Consultation Date",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Name of Surgery (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title:
                    "Details of Treatment given(hospitalization/OPD, other)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Disability",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F5": {
                  id: "MQ1-SQ1-F5",
                  title: "Period of hospitalization (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F6": {
                  id: "MQ1-SQ1-F6",
                  title: "Any Other information",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F7": {
                  id: "MQ1-SQ1-F7",
                  title: "Disease name",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F8": {
                  id: "MQ1-SQ1-F8",
                  title: "Date of Diagnosis",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
            child_four: {
              keyName: "child_four",
              name: "",
              image_class: "child",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Last Consultation Date",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Name of Surgery (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title:
                    "Details of Treatment given(hospitalization/OPD, other)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Disability",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F5": {
                  id: "MQ1-SQ1-F5",
                  title: "Period of hospitalization (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F6": {
                  id: "MQ1-SQ1-F6",
                  title: "Any Other information",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F7": {
                  id: "MQ1-SQ1-F7",
                  title: "Disease name",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F8": {
                  id: "MQ1-SQ1-F8",
                  title: "Date of Diagnosis",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
          },
        },
      },
      MQ07: {
        main_question: {
          id: "MQ07",
          icon_class: "tobaco",
          title:
            "Do you consume any of the following substances?(if yes, please mention the quantity)",
          description: "",
          status: false,
          sub_question: {
            "MQ1-SQ1": {
              id: "MQ1-SQ1",
              icon_class: "",
              status: false,
              title:
                "Alcohol [30ml ( number of pegs) of hard liquor/ pints of beer/ glass of wines]     per Week.",
              description: "",
              member_data: {
                adult_one: {
                  keyName: "adult_one",
                  name: "",
                  image_class: "adult",
                  selection_status: false,
                  field_data: {
                    "MQ1-SQ1-F1": {
                      id: "MQ1-SQ1-F1",
                      title: "Week.",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F2": {
                      id: "MQ1-SQ1-F2",
                      title: "quantity",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                  },
                },
                adult_two: {
                  keyName: "adult_two",
                  name: "",
                  image_class: "adult",
                  selection_status: false,
                  field_data: {
                    "MQ1-SQ1-F1": {
                      id: "MQ1-SQ1-F1",
                      title:
                        "Alcohol [30ml ( number of pegs) of hard liquor/ pints of beer/ glass of wines]     per Week.",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F2": {
                      id: "MQ1-SQ1-F2",
                      title:
                        "Smoking (Number of Cigarette/bidi sticks)  per Week",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F3": {
                      id: "MQ1-SQ1-F3",
                      title:
                        "Pan Masala/Gutkha (Number of small Pouches)  per Week",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                  },
                },
                child_one: {
                  keyName: "child_one",
                  name: "",
                  image_class: "child",
                  selection_status: false,
                  field_data: {
                    "MQ1-SQ1-F1": {
                      id: "MQ1-SQ1-F1",
                      title:
                        "Alcohol [30ml ( number of pegs) of hard liquor/ pints of beer/ glass of wines]     per Week.",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F2": {
                      id: "MQ1-SQ1-F2",
                      title:
                        "Smoking (Number of Cigarette/bidi sticks)  per Week",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F3": {
                      id: "MQ1-SQ1-F3",
                      title:
                        "Pan Masala/Gutkha (Number of small Pouches)  per Week",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                  },
                },
                child_two: {
                  keyName: "child_two",
                  name: "",
                  image_class: "child",
                  selection_status: false,
                  field_data: {
                    "MQ1-SQ1-F1": {
                      id: "MQ1-SQ1-F1",
                      title:
                        "Alcohol [30ml ( number of pegs) of hard liquor/ pints of beer/ glass of wines]     per Week.",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F2": {
                      id: "MQ1-SQ1-F2",
                      title:
                        "Smoking (Number of Cigarette/bidi sticks)  per Week",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F3": {
                      id: "MQ1-SQ1-F3",
                      title:
                        "Pan Masala/Gutkha (Number of small Pouches)  per Week",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                  },
                },
                child_three: {
                  keyName: "child_three",
                  name: "",
                  image_class: "child",
                  selection_status: false,
                  field_data: {
                    "MQ1-SQ1-F1": {
                      id: "MQ1-SQ1-F1",
                      title:
                        "Alcohol [30ml ( number of pegs) of hard liquor/ pints of beer/ glass of wines]     per Week.",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F2": {
                      id: "MQ1-SQ1-F2",
                      title:
                        "Smoking (Number of Cigarette/bidi sticks)  per Week",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F3": {
                      id: "MQ1-SQ1-F3",
                      title:
                        "Pan Masala/Gutkha (Number of small Pouches)  per Week",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                  },
                },
                child_four: {
                  keyName: "child_four",
                  name: "",
                  image_class: "child",
                  selection_status: false,
                  field_data: {
                    "MQ1-SQ1-F1": {
                      id: "MQ1-SQ1-F1",
                      title:
                        "Alcohol [30ml ( number of pegs) of hard liquor/ pints of beer/ glass of wines]     per Week.",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F2": {
                      id: "MQ1-SQ1-F2",
                      title:
                        "Smoking (Number of Cigarette/bidi sticks)  per Week",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F3": {
                      id: "MQ1-SQ1-F3",
                      title:
                        "Pan Masala/Gutkha (Number of small Pouches)  per Week",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                  },
                },
              },
            },
            "MQ1-SQ2": {
              id: "MQ1-SQ2",
              icon_class: "",
              status: false,
              title: "Smoking (Number of Cigarette/bidi sticks)  per Week",
              description: "",
              member_data: {
                adult_one: {
                  keyName: "adult_one",
                  name: "",
                  image_class: "adult",
                  selection_status: false,
                  field_data: {
                    "MQ1-SQ1-F1": {
                      id: "MQ1-SQ1-F1",
                      title: "Week.",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F2": {
                      id: "MQ1-SQ1-F2",
                      title: "quantity",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                  },
                },
                adult_two: {
                  keyName: "adult_two",
                  name: "",
                  image_class: "adult",
                  selection_status: false,
                  field_data: {
                    "MQ1-SQ1-F1": {
                      id: "MQ1-SQ1-F1",
                      title:
                        "Alcohol [30ml ( number of pegs) of hard liquor/ pints of beer/ glass of wines]     per Week.",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F2": {
                      id: "MQ1-SQ1-F2",
                      title:
                        "Smoking (Number of Cigarette/bidi sticks)  per Week",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F3": {
                      id: "MQ1-SQ1-F3",
                      title:
                        "Pan Masala/Gutkha (Number of small Pouches)  per Week",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                  },
                },
                child_one: {
                  keyName: "child_one",
                  name: "",
                  image_class: "child",
                  selection_status: false,
                  field_data: {
                    "MQ1-SQ1-F1": {
                      id: "MQ1-SQ1-F1",
                      title:
                        "Alcohol [30ml ( number of pegs) of hard liquor/ pints of beer/ glass of wines]     per Week.",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F2": {
                      id: "MQ1-SQ1-F2",
                      title:
                        "Smoking (Number of Cigarette/bidi sticks)  per Week",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F3": {
                      id: "MQ1-SQ1-F3",
                      title:
                        "Pan Masala/Gutkha (Number of small Pouches)  per Week",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                  },
                },
                child_two: {
                  keyName: "child_two",
                  name: "",
                  image_class: "child",
                  selection_status: false,
                  field_data: {
                    "MQ1-SQ1-F1": {
                      id: "MQ1-SQ1-F1",
                      title:
                        "Alcohol [30ml ( number of pegs) of hard liquor/ pints of beer/ glass of wines]     per Week.",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F2": {
                      id: "MQ1-SQ1-F2",
                      title:
                        "Smoking (Number of Cigarette/bidi sticks)  per Week",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F3": {
                      id: "MQ1-SQ1-F3",
                      title:
                        "Pan Masala/Gutkha (Number of small Pouches)  per Week",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                  },
                },
                child_three: {
                  keyName: "child_three",
                  name: "",
                  image_class: "child",
                  selection_status: false,
                  field_data: {
                    "MQ1-SQ1-F1": {
                      id: "MQ1-SQ1-F1",
                      title:
                        "Alcohol [30ml ( number of pegs) of hard liquor/ pints of beer/ glass of wines]     per Week.",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F2": {
                      id: "MQ1-SQ1-F2",
                      title:
                        "Smoking (Number of Cigarette/bidi sticks)  per Week",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F3": {
                      id: "MQ1-SQ1-F3",
                      title:
                        "Pan Masala/Gutkha (Number of small Pouches)  per Week",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                  },
                },
                child_four: {
                  keyName: "child_four",
                  name: "",
                  image_class: "child",
                  selection_status: false,
                  field_data: {
                    "MQ1-SQ1-F1": {
                      id: "MQ1-SQ1-F1",
                      title:
                        "Alcohol [30ml ( number of pegs) of hard liquor/ pints of beer/ glass of wines]     per Week.",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F2": {
                      id: "MQ1-SQ1-F2",
                      title:
                        "Smoking (Number of Cigarette/bidi sticks)  per Week",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F3": {
                      id: "MQ1-SQ1-F3",
                      title:
                        "Pan Masala/Gutkha (Number of small Pouches)  per Week",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                  },
                },
              },
            },
            "MQ1-SQ3": {
              id: "MQ1-SQ3",
              icon_class: "",
              status: false,
              title: "Pan Masala/Gutkha (Number of small Pouches)  per Week",
              description: "",
              member_data: {
                adult_one: {
                  keyName: "adult_one",
                  name: "",
                  image_class: "adult",
                  selection_status: false,
                  field_data: {
                    "MQ1-SQ1-F1": {
                      id: "MQ1-SQ1-F1",
                      title: "Week.",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F2": {
                      id: "MQ1-SQ1-F2",
                      title: "quantity",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                  },
                },
                adult_two: {
                  keyName: "adult_two",
                  name: "",
                  image_class: "adult",
                  selection_status: false,
                  field_data: {
                    "MQ1-SQ1-F1": {
                      id: "MQ1-SQ1-F1",
                      title:
                        "Alcohol [30ml ( number of pegs) of hard liquor/ pints of beer/ glass of wines]     per Week.",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F2": {
                      id: "MQ1-SQ1-F2",
                      title:
                        "Smoking (Number of Cigarette/bidi sticks)  per Week",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F3": {
                      id: "MQ1-SQ1-F3",
                      title:
                        "Pan Masala/Gutkha (Number of small Pouches)  per Week",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                  },
                },
                child_one: {
                  keyName: "child_one",
                  name: "",
                  image_class: "child",
                  selection_status: false,
                  field_data: {
                    "MQ1-SQ1-F1": {
                      id: "MQ1-SQ1-F1",
                      title:
                        "Alcohol [30ml ( number of pegs) of hard liquor/ pints of beer/ glass of wines]     per Week.",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F2": {
                      id: "MQ1-SQ1-F2",
                      title:
                        "Smoking (Number of Cigarette/bidi sticks)  per Week",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F3": {
                      id: "MQ1-SQ1-F3",
                      title:
                        "Pan Masala/Gutkha (Number of small Pouches)  per Week",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                  },
                },
                child_two: {
                  keyName: "child_two",
                  name: "",
                  image_class: "child",
                  selection_status: false,
                  field_data: {
                    "MQ1-SQ1-F1": {
                      id: "MQ1-SQ1-F1",
                      title:
                        "Alcohol [30ml ( number of pegs) of hard liquor/ pints of beer/ glass of wines]     per Week.",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F2": {
                      id: "MQ1-SQ1-F2",
                      title:
                        "Smoking (Number of Cigarette/bidi sticks)  per Week",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F3": {
                      id: "MQ1-SQ1-F3",
                      title:
                        "Pan Masala/Gutkha (Number of small Pouches)  per Week",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                  },
                },
                child_three: {
                  keyName: "child_three",
                  name: "",
                  image_class: "child",
                  selection_status: false,
                  field_data: {
                    "MQ1-SQ1-F1": {
                      id: "MQ1-SQ1-F1",
                      title:
                        "Alcohol [30ml ( number of pegs) of hard liquor/ pints of beer/ glass of wines]     per Week.",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F2": {
                      id: "MQ1-SQ1-F2",
                      title:
                        "Smoking (Number of Cigarette/bidi sticks)  per Week",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F3": {
                      id: "MQ1-SQ1-F3",
                      title:
                        "Pan Masala/Gutkha (Number of small Pouches)  per Week",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                  },
                },
                child_four: {
                  keyName: "child_four",
                  name: "",
                  image_class: "child",
                  selection_status: false,
                  field_data: {
                    "MQ1-SQ1-F1": {
                      id: "MQ1-SQ1-F1",
                      title:
                        "Alcohol [30ml ( number of pegs) of hard liquor/ pints of beer/ glass of wines]     per Week.",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F2": {
                      id: "MQ1-SQ1-F2",
                      title:
                        "Smoking (Number of Cigarette/bidi sticks)  per Week",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F3": {
                      id: "MQ1-SQ1-F3",
                      title:
                        "Pan Masala/Gutkha (Number of small Pouches)  per Week",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                  },
                },
              },
            },
          },
        },
      },
      MQ08: {
        main_question: {
          id: "MQ08",
          icon_class: "tobaco",
          title: "Any Other substance (Name & Quantity)  per Week",
          description: "",
          status: false,
          member_data: {
            adult_one: {
              keyName: "adult_one",
              name: "",
              image_class: "adult",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Name.",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "quantity",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
              },
            },
            adult_two: {
              keyName: "adult_two",
              name: "",
              image_class: "adult",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Name.",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "quantity",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
              },
            },
            child_one: {
              keyName: "child_one",
              name: "",
              image_class: "child",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Name.",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "quantity",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
              },
            },
            child_two: {
              keyName: "child_two",
              name: "",
              image_class: "child",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Name.",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "quantity",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
              },
            },
            child_three: {
              keyName: "child_three",
              name: "",
              image_class: "child",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Name.",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "quantity",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
              },
            },
            child_four: {
              keyName: "child_four",
              name: "",
              image_class: "child",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Name.",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "quantity",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
              },
            },
          },
        },
      },
      MQ09: {
        main_question: {
          id: "MQ09",
          icon_class: "tobaco",
          title:
            "Hypertension / High Blood Pressure(BP)/ High Cholesterol/Any other Lipid disorders",
          description: "",
          status: false,
          member_data: {
            adult_one: {
              keyName: "adult_one",
              name: "",
              image_class: "adult",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Last Consultation Date",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Name of Surgery (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title:
                    "Details of Treatment given(hospitalization/OPD, other)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Disability",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F5": {
                  id: "MQ1-SQ1-F5",
                  title: "Period of hospitalization (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F6": {
                  id: "MQ1-SQ1-F6",
                  title: "Any Other information",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F7": {
                  id: "MQ1-SQ1-F7",
                  title: "Disease name",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F8": {
                  id: "MQ1-SQ1-F8",
                  title: "Date of Diagnosis",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
            adult_two: {
              keyName: "adult_two",
              name: "",
              image_class: "adult",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Last Consultation Date",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Name of Surgery (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title:
                    "Details of Treatment given(hospitalization/OPD, other)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Disability",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F5": {
                  id: "MQ1-SQ1-F5",
                  title: "Period of hospitalization (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F6": {
                  id: "MQ1-SQ1-F6",
                  title: "Any Other information",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F7": {
                  id: "MQ1-SQ1-F7",
                  title: "Disease name",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F8": {
                  id: "MQ1-SQ1-F8",
                  title: "Date of Diagnosis",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
            child_one: {
              keyName: "child_one",
              name: "",
              image_class: "child",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Last Consultation Date",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Name of Surgery (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title:
                    "Details of Treatment given(hospitalization/OPD, other)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Disability",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F5": {
                  id: "MQ1-SQ1-F5",
                  title: "Period of hospitalization (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F6": {
                  id: "MQ1-SQ1-F6",
                  title: "Any Other information",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F7": {
                  id: "MQ1-SQ1-F7",
                  title: "Disease name",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F8": {
                  id: "MQ1-SQ1-F8",
                  title: "Date of Diagnosis",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
            child_two: {
              keyName: "child_two",
              name: "",
              image_class: "child",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Last Consultation Date",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Name of Surgery (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title:
                    "Details of Treatment given(hospitalization/OPD, other)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Disability",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F5": {
                  id: "MQ1-SQ1-F5",
                  title: "Period of hospitalization (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F6": {
                  id: "MQ1-SQ1-F6",
                  title: "Any Other information",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F7": {
                  id: "MQ1-SQ1-F7",
                  title: "Disease name",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F8": {
                  id: "MQ1-SQ1-F8",
                  title: "Date of Diagnosis",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
            child_three: {
              keyName: "child_three",
              name: "",
              image_class: "child",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Last Consultation Date",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Name of Surgery (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title:
                    "Details of Treatment given(hospitalization/OPD, other)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Disability",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F5": {
                  id: "MQ1-SQ1-F5",
                  title: "Period of hospitalization (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F6": {
                  id: "MQ1-SQ1-F6",
                  title: "Any Other information",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F7": {
                  id: "MQ1-SQ1-F7",
                  title: "Disease name",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F8": {
                  id: "MQ1-SQ1-F8",
                  title: "Date of Diagnosis",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
            child_four: {
              keyName: "child_four",
              name: "",
              image_class: "child",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Last Consultation Date",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Name of Surgery (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title:
                    "Details of Treatment given(hospitalization/OPD, other)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Disability",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F5": {
                  id: "MQ1-SQ1-F5",
                  title: "Period of hospitalization (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F6": {
                  id: "MQ1-SQ1-F6",
                  title: "Any Other information",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F7": {
                  id: "MQ1-SQ1-F7",
                  title: "Disease name",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F8": {
                  id: "MQ1-SQ1-F8",
                  title: "Date of Diagnosis",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
          },
        },
      },
      MQ10: {
        main_question: {
          id: "MQ10",
          icon_class: "tobaco",
          title:
            "Asthma / Tuberculosis (TB) / COPD/ Pleural effusion / Bronchitis / Emphysema or any other disease of Lungs, Pleura and airway or Respiratory disease?              ",
          description: "",
          status: false,
          member_data: {
            adult_one: {
              keyName: "adult_one",
              name: "",
              image_class: "adult",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Last Consultation Date",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Name of Surgery (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title:
                    "Details of Treatment given(hospitalization/OPD, other)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Disability",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F5": {
                  id: "MQ1-SQ1-F5",
                  title: "Period of hospitalization (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F6": {
                  id: "MQ1-SQ1-F6",
                  title: "Any Other information",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F7": {
                  id: "MQ1-SQ1-F7",
                  title: "Disease name",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F8": {
                  id: "MQ1-SQ1-F8",
                  title: "Date of Diagnosis",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
            adult_two: {
              keyName: "adult_two",
              name: "",
              image_class: "adult",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Last Consultation Date",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Name of Surgery (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title:
                    "Details of Treatment given(hospitalization/OPD, other)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Disability",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F5": {
                  id: "MQ1-SQ1-F5",
                  title: "Period of hospitalization (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F6": {
                  id: "MQ1-SQ1-F6",
                  title: "Any Other information",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F7": {
                  id: "MQ1-SQ1-F7",
                  title: "Disease name",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F8": {
                  id: "MQ1-SQ1-F8",
                  title: "Date of Diagnosis",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
            child_one: {
              keyName: "child_one",
              name: "",
              image_class: "child",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Last Consultation Date",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Name of Surgery (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title:
                    "Details of Treatment given(hospitalization/OPD, other)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Disability",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F5": {
                  id: "MQ1-SQ1-F5",
                  title: "Period of hospitalization (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F6": {
                  id: "MQ1-SQ1-F6",
                  title: "Any Other information",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F7": {
                  id: "MQ1-SQ1-F7",
                  title: "Disease name",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F8": {
                  id: "MQ1-SQ1-F8",
                  title: "Date of Diagnosis",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
            child_two: {
              keyName: "child_two",
              name: "",
              image_class: "child",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Last Consultation Date",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Name of Surgery (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title:
                    "Details of Treatment given(hospitalization/OPD, other)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Disability",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F5": {
                  id: "MQ1-SQ1-F5",
                  title: "Period of hospitalization (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F6": {
                  id: "MQ1-SQ1-F6",
                  title: "Any Other information",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F7": {
                  id: "MQ1-SQ1-F7",
                  title: "Disease name",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F8": {
                  id: "MQ1-SQ1-F8",
                  title: "Date of Diagnosis",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
            child_three: {
              keyName: "child_three",
              name: "",
              image_class: "child",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Last Consultation Date",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Name of Surgery (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title:
                    "Details of Treatment given(hospitalization/OPD, other)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Disability",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F5": {
                  id: "MQ1-SQ1-F5",
                  title: "Period of hospitalization (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F6": {
                  id: "MQ1-SQ1-F6",
                  title: "Any Other information",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F7": {
                  id: "MQ1-SQ1-F7",
                  title: "Disease name",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F8": {
                  id: "MQ1-SQ1-F8",
                  title: "Date of Diagnosis",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
            child_four: {
              keyName: "child_four",
              name: "",
              image_class: "child",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Last Consultation Date",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Name of Surgery (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title:
                    "Details of Treatment given(hospitalization/OPD, other)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Disability",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F5": {
                  id: "MQ1-SQ1-F5",
                  title: "Period of hospitalization (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F6": {
                  id: "MQ1-SQ1-F6",
                  title: "Any Other information",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F7": {
                  id: "MQ1-SQ1-F7",
                  title: "Disease name",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F8": {
                  id: "MQ1-SQ1-F8",
                  title: "Date of Diagnosis",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
          },
        },
      },
      MQ11: {
        main_question: {
          id: "MQ11",
          icon_class: "tobaco",
          title:
            "Thyroid disease/ Cushing's disease/ Parathyroid Disease/ Addison's disease / Pituitary tumor/ disease or any other disorder of Endocrine system?",
          description: "",
          status: false,
          member_data: {
            adult_one: {
              keyName: "adult_one",
              name: "",
              image_class: "adult",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Last Consultation Date",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Name of Surgery (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title:
                    "Details of Treatment given(hospitalization/OPD, other)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Disability",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F5": {
                  id: "MQ1-SQ1-F5",
                  title: "Period of hospitalization (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F6": {
                  id: "MQ1-SQ1-F6",
                  title: "Any Other information",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F7": {
                  id: "MQ1-SQ1-F7",
                  title: "Disease name",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F8": {
                  id: "MQ1-SQ1-F8",
                  title: "Date of Diagnosis",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
            adult_two: {
              keyName: "adult_two",
              name: "",
              image_class: "adult",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Last Consultation Date",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Name of Surgery (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title:
                    "Details of Treatment given(hospitalization/OPD, other)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Disability",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F5": {
                  id: "MQ1-SQ1-F5",
                  title: "Period of hospitalization (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F6": {
                  id: "MQ1-SQ1-F6",
                  title: "Any Other information",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F7": {
                  id: "MQ1-SQ1-F7",
                  title: "Disease name",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F8": {
                  id: "MQ1-SQ1-F8",
                  title: "Date of Diagnosis",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
            child_one: {
              keyName: "child_one",
              name: "",
              image_class: "child",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Last Consultation Date",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Name of Surgery (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title:
                    "Details of Treatment given(hospitalization/OPD, other)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Disability",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F5": {
                  id: "MQ1-SQ1-F5",
                  title: "Period of hospitalization (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F6": {
                  id: "MQ1-SQ1-F6",
                  title: "Any Other information",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F7": {
                  id: "MQ1-SQ1-F7",
                  title: "Disease name",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F8": {
                  id: "MQ1-SQ1-F8",
                  title: "Date of Diagnosis",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
            child_two: {
              keyName: "child_two",
              name: "",
              image_class: "child",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Last Consultation Date",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Name of Surgery (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title:
                    "Details of Treatment given(hospitalization/OPD, other)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Disability",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F5": {
                  id: "MQ1-SQ1-F5",
                  title: "Period of hospitalization (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F6": {
                  id: "MQ1-SQ1-F6",
                  title: "Any Other information",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F7": {
                  id: "MQ1-SQ1-F7",
                  title: "Disease name",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F8": {
                  id: "MQ1-SQ1-F8",
                  title: "Date of Diagnosis",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
            child_three: {
              keyName: "child_three",
              name: "",
              image_class: "child",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Last Consultation Date",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Name of Surgery (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title:
                    "Details of Treatment given(hospitalization/OPD, other)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Disability",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F5": {
                  id: "MQ1-SQ1-F5",
                  title: "Period of hospitalization (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F6": {
                  id: "MQ1-SQ1-F6",
                  title: "Any Other information",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F7": {
                  id: "MQ1-SQ1-F7",
                  title: "Disease name",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F8": {
                  id: "MQ1-SQ1-F8",
                  title: "Date of Diagnosis",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
            child_four: {
              keyName: "child_four",
              name: "",
              image_class: "child",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Last Consultation Date",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Name of Surgery (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title:
                    "Details of Treatment given(hospitalization/OPD, other)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Disability",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F5": {
                  id: "MQ1-SQ1-F5",
                  title: "Period of hospitalization (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F6": {
                  id: "MQ1-SQ1-F6",
                  title: "Any Other information",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F7": {
                  id: "MQ1-SQ1-F7",
                  title: "Disease name",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F8": {
                  id: "MQ1-SQ1-F8",
                  title: "Date of Diagnosis",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
          },
        },
      },
      MQ12: {
        main_question: {
          id: "MQ12",
          icon_class: "tobaco",
          title:
            "Diabetes Mellitus / High Blood Sugar / Diabetes on Insulin or medication",
          description: "",
          status: false,
          member_data: {
            adult_one: {
              keyName: "adult_one",
              name: "",
              image_class: "adult",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Last Consultation Date",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Name of Surgery (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title:
                    "Details of Treatment given(hospitalization/OPD, other)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Disability",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F5": {
                  id: "MQ1-SQ1-F5",
                  title: "Period of hospitalization (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F6": {
                  id: "MQ1-SQ1-F6",
                  title: "Any Other information",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F7": {
                  id: "MQ1-SQ1-F7",
                  title: "Disease name",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F8": {
                  id: "MQ1-SQ1-F8",
                  title: "Date of Diagnosis",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
            adult_two: {
              keyName: "adult_two",
              name: "",
              image_class: "adult",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Last Consultation Date",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Name of Surgery (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title:
                    "Details of Treatment given(hospitalization/OPD, other)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Disability",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F5": {
                  id: "MQ1-SQ1-F5",
                  title: "Period of hospitalization (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F6": {
                  id: "MQ1-SQ1-F6",
                  title: "Any Other information",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F7": {
                  id: "MQ1-SQ1-F7",
                  title: "Disease name",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F8": {
                  id: "MQ1-SQ1-F8",
                  title: "Date of Diagnosis",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
            child_one: {
              keyName: "child_one",
              name: "",
              image_class: "child",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Last Consultation Date",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Name of Surgery (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title:
                    "Details of Treatment given(hospitalization/OPD, other)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Disability",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F5": {
                  id: "MQ1-SQ1-F5",
                  title: "Period of hospitalization (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F6": {
                  id: "MQ1-SQ1-F6",
                  title: "Any Other information",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F7": {
                  id: "MQ1-SQ1-F7",
                  title: "Disease name",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F8": {
                  id: "MQ1-SQ1-F8",
                  title: "Date of Diagnosis",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
            child_two: {
              keyName: "child_two",
              name: "",
              image_class: "child",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Last Consultation Date",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Name of Surgery (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title:
                    "Details of Treatment given(hospitalization/OPD, other)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Disability",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F5": {
                  id: "MQ1-SQ1-F5",
                  title: "Period of hospitalization (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F6": {
                  id: "MQ1-SQ1-F6",
                  title: "Any Other information",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F7": {
                  id: "MQ1-SQ1-F7",
                  title: "Disease name",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F8": {
                  id: "MQ1-SQ1-F8",
                  title: "Date of Diagnosis",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
            child_three: {
              keyName: "child_three",
              name: "",
              image_class: "child",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Last Consultation Date",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Name of Surgery (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title:
                    "Details of Treatment given(hospitalization/OPD, other)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Disability",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F5": {
                  id: "MQ1-SQ1-F5",
                  title: "Period of hospitalization (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F6": {
                  id: "MQ1-SQ1-F6",
                  title: "Any Other information",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F7": {
                  id: "MQ1-SQ1-F7",
                  title: "Disease name",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F8": {
                  id: "MQ1-SQ1-F8",
                  title: "Date of Diagnosis",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
            child_four: {
              keyName: "child_four",
              name: "",
              image_class: "child",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Last Consultation Date",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Name of Surgery (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title:
                    "Details of Treatment given(hospitalization/OPD, other)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Disability",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F5": {
                  id: "MQ1-SQ1-F5",
                  title: "Period of hospitalization (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F6": {
                  id: "MQ1-SQ1-F6",
                  title: "Any Other information",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F7": {
                  id: "MQ1-SQ1-F7",
                  title: "Disease name",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F8": {
                  id: "MQ1-SQ1-F8",
                  title: "Date of Diagnosis",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
          },
        },
      },
      MQ13: {
        main_question: {
          id: "MQ13",
          icon_class: "tobaco",
          title:
            "Motor Neuron Disease/ Muscular dystrophies/ Myasthenia Gravis/ Demyelinating disease or any other disease of Neuromuscular system (muscles and/or nervous system)",
          description: "",
          status: false,
          member_data: {
            adult_one: {
              keyName: "adult_one",
              name: "",
              image_class: "adult",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Last Consultation Date",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Name of Surgery (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title:
                    "Details of Treatment given(hospitalization/OPD, other)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Disability",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F5": {
                  id: "MQ1-SQ1-F5",
                  title: "Period of hospitalization (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F6": {
                  id: "MQ1-SQ1-F6",
                  title: "Any Other information",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F7": {
                  id: "MQ1-SQ1-F7",
                  title: "Disease name",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F8": {
                  id: "MQ1-SQ1-F8",
                  title: "Date of Diagnosis",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
            adult_two: {
              keyName: "adult_two",
              name: "",
              image_class: "adult",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Last Consultation Date",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Name of Surgery (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title:
                    "Details of Treatment given(hospitalization/OPD, other)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Disability",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F5": {
                  id: "MQ1-SQ1-F5",
                  title: "Period of hospitalization (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F6": {
                  id: "MQ1-SQ1-F6",
                  title: "Any Other information",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F7": {
                  id: "MQ1-SQ1-F7",
                  title: "Disease name",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F8": {
                  id: "MQ1-SQ1-F8",
                  title: "Date of Diagnosis",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
            child_one: {
              keyName: "child_one",
              name: "",
              image_class: "child",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Last Consultation Date",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Name of Surgery (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title:
                    "Details of Treatment given(hospitalization/OPD, other)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Disability",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F5": {
                  id: "MQ1-SQ1-F5",
                  title: "Period of hospitalization (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F6": {
                  id: "MQ1-SQ1-F6",
                  title: "Any Other information",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F7": {
                  id: "MQ1-SQ1-F7",
                  title: "Disease name",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F8": {
                  id: "MQ1-SQ1-F8",
                  title: "Date of Diagnosis",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
            child_two: {
              keyName: "child_two",
              name: "",
              image_class: "child",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Last Consultation Date",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Name of Surgery (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title:
                    "Details of Treatment given(hospitalization/OPD, other)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Disability",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F5": {
                  id: "MQ1-SQ1-F5",
                  title: "Period of hospitalization (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F6": {
                  id: "MQ1-SQ1-F6",
                  title: "Any Other information",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F7": {
                  id: "MQ1-SQ1-F7",
                  title: "Disease name",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F8": {
                  id: "MQ1-SQ1-F8",
                  title: "Date of Diagnosis",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
            child_three: {
              keyName: "child_three",
              name: "",
              image_class: "child",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Last Consultation Date",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Name of Surgery (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title:
                    "Details of Treatment given(hospitalization/OPD, other)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Disability",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F5": {
                  id: "MQ1-SQ1-F5",
                  title: "Period of hospitalization (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F6": {
                  id: "MQ1-SQ1-F6",
                  title: "Any Other information",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F7": {
                  id: "MQ1-SQ1-F7",
                  title: "Disease name",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F8": {
                  id: "MQ1-SQ1-F8",
                  title: "Date of Diagnosis",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
            child_four: {
              keyName: "child_four",
              name: "",
              image_class: "child",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Last Consultation Date",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Name of Surgery (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title:
                    "Details of Treatment given(hospitalization/OPD, other)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Disability",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F5": {
                  id: "MQ1-SQ1-F5",
                  title: "Period of hospitalization (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F6": {
                  id: "MQ1-SQ1-F6",
                  title: "Any Other information",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F7": {
                  id: "MQ1-SQ1-F7",
                  title: "Disease name",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F8": {
                  id: "MQ1-SQ1-F8",
                  title: "Date of Diagnosis",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
          },
        },
      },
      MQ14: {
        main_question: {
          id: "MQ14",
          icon_class: "tobaco",
          title:
            "Stroke/Paralysis/Transient Ischemic Attack/Multiple Sclerosis/Epilepsy/Mental-Psychiatric illness/ Parkinsonism/Alzheimer's/Depression /Dementia or any other disease of Brain and Nervous System?              ",
          description: "",
          status: false,
          member_data: {
            adult_one: {
              keyName: "adult_one",
              name: "",
              image_class: "adult",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Last Consultation Date",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Name of Surgery (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title:
                    "Details of Treatment given(hospitalization/OPD, other)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Disability",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F5": {
                  id: "MQ1-SQ1-F5",
                  title: "Period of hospitalization (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F6": {
                  id: "MQ1-SQ1-F6",
                  title: "Any Other information",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F7": {
                  id: "MQ1-SQ1-F7",
                  title: "Disease name",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F8": {
                  id: "MQ1-SQ1-F8",
                  title: "Date of Diagnosis",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
            adult_two: {
              keyName: "adult_two",
              name: "",
              image_class: "adult",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Last Consultation Date",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Name of Surgery (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title:
                    "Details of Treatment given(hospitalization/OPD, other)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Disability",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F5": {
                  id: "MQ1-SQ1-F5",
                  title: "Period of hospitalization (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F6": {
                  id: "MQ1-SQ1-F6",
                  title: "Any Other information",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F7": {
                  id: "MQ1-SQ1-F7",
                  title: "Disease name",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F8": {
                  id: "MQ1-SQ1-F8",
                  title: "Date of Diagnosis",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
            child_one: {
              keyName: "child_one",
              name: "",
              image_class: "child",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Last Consultation Date",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Name of Surgery (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title:
                    "Details of Treatment given(hospitalization/OPD, other)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Disability",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F5": {
                  id: "MQ1-SQ1-F5",
                  title: "Period of hospitalization (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F6": {
                  id: "MQ1-SQ1-F6",
                  title: "Any Other information",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F7": {
                  id: "MQ1-SQ1-F7",
                  title: "Disease name",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F8": {
                  id: "MQ1-SQ1-F8",
                  title: "Date of Diagnosis",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
            child_two: {
              keyName: "child_two",
              name: "",
              image_class: "child",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Last Consultation Date",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Name of Surgery (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title:
                    "Details of Treatment given(hospitalization/OPD, other)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Disability",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F5": {
                  id: "MQ1-SQ1-F5",
                  title: "Period of hospitalization (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F6": {
                  id: "MQ1-SQ1-F6",
                  title: "Any Other information",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F7": {
                  id: "MQ1-SQ1-F7",
                  title: "Disease name",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F8": {
                  id: "MQ1-SQ1-F8",
                  title: "Date of Diagnosis",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
            child_three: {
              keyName: "child_three",
              name: "",
              image_class: "child",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Last Consultation Date",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Name of Surgery (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title:
                    "Details of Treatment given(hospitalization/OPD, other)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Disability",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F5": {
                  id: "MQ1-SQ1-F5",
                  title: "Period of hospitalization (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F6": {
                  id: "MQ1-SQ1-F6",
                  title: "Any Other information",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F7": {
                  id: "MQ1-SQ1-F7",
                  title: "Disease name",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F8": {
                  id: "MQ1-SQ1-F8",
                  title: "Date of Diagnosis",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
            child_four: {
              keyName: "child_four",
              name: "",
              image_class: "child",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Last Consultation Date",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Name of Surgery (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title:
                    "Details of Treatment given(hospitalization/OPD, other)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Disability",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F5": {
                  id: "MQ1-SQ1-F5",
                  title: "Period of hospitalization (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F6": {
                  id: "MQ1-SQ1-F6",
                  title: "Any Other information",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F7": {
                  id: "MQ1-SQ1-F7",
                  title: "Disease name",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F8": {
                  id: "MQ1-SQ1-F8",
                  title: "Date of Diagnosis",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
          },
        },
      },
      MQ15: {
        main_question: {
          id: "MQ15",
          icon_class: "tobaco",
          title:
            "Cirrhosis / Hepatitis / Wilson's disease / Pancreatitis / Liver disease / Crohn's disease / Ulcerative Colitis /Inflammatory Bowel Diseases/ Piles or any other disease of Mouth, Esophagus, Liver, Gall bladder, Stomach or Intestines or any other part of Digestive System?",
          description: "",
          status: false,
          member_data: {
            adult_one: {
              keyName: "adult_one",
              name: "",
              image_class: "adult",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Last Consultation Date",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Name of Surgery (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title:
                    "Details of Treatment given(hospitalization/OPD, other)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Disability",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F5": {
                  id: "MQ1-SQ1-F5",
                  title: "Period of hospitalization (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F6": {
                  id: "MQ1-SQ1-F6",
                  title: "Any Other information",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F7": {
                  id: "MQ1-SQ1-F7",
                  title: "Disease name",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F8": {
                  id: "MQ1-SQ1-F8",
                  title: "Date of Diagnosis",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
            adult_two: {
              keyName: "adult_two",
              name: "",
              image_class: "adult",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Last Consultation Date",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Name of Surgery (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title:
                    "Details of Treatment given(hospitalization/OPD, other)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Disability",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F5": {
                  id: "MQ1-SQ1-F5",
                  title: "Period of hospitalization (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F6": {
                  id: "MQ1-SQ1-F6",
                  title: "Any Other information",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F7": {
                  id: "MQ1-SQ1-F7",
                  title: "Disease name",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F8": {
                  id: "MQ1-SQ1-F8",
                  title: "Date of Diagnosis",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
            child_one: {
              keyName: "child_one",
              name: "",
              image_class: "child",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Last Consultation Date",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Name of Surgery (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title:
                    "Details of Treatment given(hospitalization/OPD, other)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Disability",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F5": {
                  id: "MQ1-SQ1-F5",
                  title: "Period of hospitalization (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F6": {
                  id: "MQ1-SQ1-F6",
                  title: "Any Other information",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F7": {
                  id: "MQ1-SQ1-F7",
                  title: "Disease name",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F8": {
                  id: "MQ1-SQ1-F8",
                  title: "Date of Diagnosis",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
            child_two: {
              keyName: "child_two",
              name: "",
              image_class: "child",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Last Consultation Date",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Name of Surgery (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title:
                    "Details of Treatment given(hospitalization/OPD, other)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Disability",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F5": {
                  id: "MQ1-SQ1-F5",
                  title: "Period of hospitalization (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F6": {
                  id: "MQ1-SQ1-F6",
                  title: "Any Other information",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F7": {
                  id: "MQ1-SQ1-F7",
                  title: "Disease name",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F8": {
                  id: "MQ1-SQ1-F8",
                  title: "Date of Diagnosis",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
            child_three: {
              keyName: "child_three",
              name: "",
              image_class: "child",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Last Consultation Date",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Name of Surgery (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title:
                    "Details of Treatment given(hospitalization/OPD, other)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Disability",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F5": {
                  id: "MQ1-SQ1-F5",
                  title: "Period of hospitalization (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F6": {
                  id: "MQ1-SQ1-F6",
                  title: "Any Other information",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F7": {
                  id: "MQ1-SQ1-F7",
                  title: "Disease name",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F8": {
                  id: "MQ1-SQ1-F8",
                  title: "Date of Diagnosis",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
            child_four: {
              keyName: "child_four",
              name: "",
              image_class: "child",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Last Consultation Date",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Name of Surgery (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title:
                    "Details of Treatment given(hospitalization/OPD, other)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Disability",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F5": {
                  id: "MQ1-SQ1-F5",
                  title: "Period of hospitalization (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F6": {
                  id: "MQ1-SQ1-F6",
                  title: "Any Other information",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F7": {
                  id: "MQ1-SQ1-F7",
                  title: "Disease name",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F8": {
                  id: "MQ1-SQ1-F8",
                  title: "Date of Diagnosis",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
          },
        },
      },
      MQ16: {
        main_question: {
          id: "MQ16",
          icon_class: "tobaco",
          title:
            "Kidney Stones/ Renal Failure/ Dialysis/ Chronic Kidney Disease/ Prostate Disease or any other disease of Kidney, Urinary Tract or reproductive organs?",
          description: "",
          status: false,
          member_data: {
            adult_one: {
              keyName: "adult_one",
              name: "",
              image_class: "adult",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Last Consultation Date",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Name of Surgery (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title:
                    "Details of Treatment given(hospitalization/OPD, other)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Disability",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F5": {
                  id: "MQ1-SQ1-F5",
                  title: "Period of hospitalization (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F6": {
                  id: "MQ1-SQ1-F6",
                  title: "Any Other information",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F7": {
                  id: "MQ1-SQ1-F7",
                  title: "Disease name",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F8": {
                  id: "MQ1-SQ1-F8",
                  title: "Date of Diagnosis",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
            adult_two: {
              keyName: "adult_two",
              name: "",
              image_class: "adult",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Last Consultation Date",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Name of Surgery (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title:
                    "Details of Treatment given(hospitalization/OPD, other)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Disability",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F5": {
                  id: "MQ1-SQ1-F5",
                  title: "Period of hospitalization (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F6": {
                  id: "MQ1-SQ1-F6",
                  title: "Any Other information",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F7": {
                  id: "MQ1-SQ1-F7",
                  title: "Disease name",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F8": {
                  id: "MQ1-SQ1-F8",
                  title: "Date of Diagnosis",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
            child_one: {
              keyName: "child_one",
              name: "",
              image_class: "child",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Last Consultation Date",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Name of Surgery (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title:
                    "Details of Treatment given(hospitalization/OPD, other)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Disability",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F5": {
                  id: "MQ1-SQ1-F5",
                  title: "Period of hospitalization (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F6": {
                  id: "MQ1-SQ1-F6",
                  title: "Any Other information",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F7": {
                  id: "MQ1-SQ1-F7",
                  title: "Disease name",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F8": {
                  id: "MQ1-SQ1-F8",
                  title: "Date of Diagnosis",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
            child_two: {
              keyName: "child_two",
              name: "",
              image_class: "child",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Last Consultation Date",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Name of Surgery (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title:
                    "Details of Treatment given(hospitalization/OPD, other)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Disability",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F5": {
                  id: "MQ1-SQ1-F5",
                  title: "Period of hospitalization (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F6": {
                  id: "MQ1-SQ1-F6",
                  title: "Any Other information",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F7": {
                  id: "MQ1-SQ1-F7",
                  title: "Disease name",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F8": {
                  id: "MQ1-SQ1-F8",
                  title: "Date of Diagnosis",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
            child_three: {
              keyName: "child_three",
              name: "",
              image_class: "child",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Last Consultation Date",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Name of Surgery (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title:
                    "Details of Treatment given(hospitalization/OPD, other)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Disability",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F5": {
                  id: "MQ1-SQ1-F5",
                  title: "Period of hospitalization (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F6": {
                  id: "MQ1-SQ1-F6",
                  title: "Any Other information",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F7": {
                  id: "MQ1-SQ1-F7",
                  title: "Disease name",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F8": {
                  id: "MQ1-SQ1-F8",
                  title: "Date of Diagnosis",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
            child_four: {
              keyName: "child_four",
              name: "",
              image_class: "child",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Last Consultation Date",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Name of Surgery (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title:
                    "Details of Treatment given(hospitalization/OPD, other)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Disability",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F5": {
                  id: "MQ1-SQ1-F5",
                  title: "Period of hospitalization (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F6": {
                  id: "MQ1-SQ1-F6",
                  title: "Any Other information",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F7": {
                  id: "MQ1-SQ1-F7",
                  title: "Disease name",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F8": {
                  id: "MQ1-SQ1-F8",
                  title: "Date of Diagnosis",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
          },
        },
      },
      MQ17: {
        main_question: {
          id: "MQ17",
          icon_class: "tobaco",
          title:
            "Do you have Previous/ Current policy or proposal applied for life, health, hospital daily cash or critical illness or Cancer or personal accident insurance?              ",
          description: "",
          status: false,
          member_data: {
            adult_one: {
              keyName: "adult_one",
              name: "",
              image_class: "adult",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title:
                    "Do You want to consider this Health policy  for Portability",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Insurer Name",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title: "Claim in previous policy",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
              },
            },
            adult_two: {
              keyName: "adult_two",
              name: "",
              image_class: "adult",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title:
                    "Do You want to consider this Health policy  for Portability",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Insurer Name",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title: "Claim in previous policy",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
              },
            },
            child_one: {
              keyName: "child_one",
              name: "",
              image_class: "child",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title:
                    "Do You want to consider this Health policy  for Portability",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Insurer Name",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title: "Claim in previous policy",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
              },
            },
            child_two: {
              keyName: "child_two",
              name: "",
              image_class: "child",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title:
                    "Do You want to consider this Health policy  for Portability",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Insurer Name",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title: "Claim in previous policy",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
              },
            },
            child_three: {
              keyName: "child_three",
              name: "",
              image_class: "child",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title:
                    "Do You want to consider this Health policy  for Portability",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Insurer Name",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title: "Claim in previous policy",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
              },
            },
            child_four: {
              keyName: "child_four",
              name: "",
              image_class: "child",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title:
                    "Do You want to consider this Health policy  for Portability",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Insurer Name",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title: "Claim in previous policy",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
              },
            },
          },
        },
      },
      MQ18: {
        main_question: {
          id: "MQ18",
          icon_class: "tobaco",
          title:
            "Was any proposal/policy declined/ deferred/ withdrawn / accepted with modified terms/ cancelled, if “Yes” please provide details in additional information",
          description: "",
          status: false,
          member_data: {
            adult_one: {
              keyName: "adult_one",
              name: "",
              image_class: "adult",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Last Consultation Date",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Name of Surgery (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title:
                    "Details of Treatment given(hospitalization/OPD, other)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Disability",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F5": {
                  id: "MQ1-SQ1-F5",
                  title: "Period of hospitalization (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F6": {
                  id: "MQ1-SQ1-F6",
                  title: "Any Other information",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F7": {
                  id: "MQ1-SQ1-F7",
                  title: "Disease name",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F8": {
                  id: "MQ1-SQ1-F8",
                  title: "Date of Diagnosis",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F9": {
                  id: "MQ1-SQ1-F9",
                  title: "Claim in previous policy",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
              },
            },
            adult_two: {
              keyName: "adult_two",
              name: "",
              image_class: "adult",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Last Consultation Date",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Name of Surgery (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title:
                    "Details of Treatment given(hospitalization/OPD, other)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Disability",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F5": {
                  id: "MQ1-SQ1-F5",
                  title: "Period of hospitalization (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F6": {
                  id: "MQ1-SQ1-F6",
                  title: "Any Other information",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F7": {
                  id: "MQ1-SQ1-F7",
                  title: "Disease name",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F8": {
                  id: "MQ1-SQ1-F8",
                  title: "Date of Diagnosis",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F9": {
                  id: "MQ1-SQ1-F9",
                  title: "Claim in previous policy",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
              },
            },
            child_one: {
              keyName: "child_one",
              name: "",
              image_class: "child",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Last Consultation Date",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Name of Surgery (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title:
                    "Details of Treatment given(hospitalization/OPD, other)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Disability",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F5": {
                  id: "MQ1-SQ1-F5",
                  title: "Period of hospitalization (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F6": {
                  id: "MQ1-SQ1-F6",
                  title: "Any Other information",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F7": {
                  id: "MQ1-SQ1-F7",
                  title: "Disease name",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F8": {
                  id: "MQ1-SQ1-F8",
                  title: "Date of Diagnosis",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F9": {
                  id: "MQ1-SQ1-F9",
                  title: "Claim in previous policy",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
              },
            },
            child_two: {
              keyName: "child_two",
              name: "",
              image_class: "child",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Last Consultation Date",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Name of Surgery (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title:
                    "Details of Treatment given(hospitalization/OPD, other)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Disability",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F5": {
                  id: "MQ1-SQ1-F5",
                  title: "Period of hospitalization (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F6": {
                  id: "MQ1-SQ1-F6",
                  title: "Any Other information",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F7": {
                  id: "MQ1-SQ1-F7",
                  title: "Disease name",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F8": {
                  id: "MQ1-SQ1-F8",
                  title: "Date of Diagnosis",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F9": {
                  id: "MQ1-SQ1-F9",
                  title: "Claim in previous policy",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
              },
            },
            child_three: {
              keyName: "child_three",
              name: "",
              image_class: "child",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Last Consultation Date",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Name of Surgery (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title:
                    "Details of Treatment given(hospitalization/OPD, other)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Disability",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F5": {
                  id: "MQ1-SQ1-F5",
                  title: "Period of hospitalization (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F6": {
                  id: "MQ1-SQ1-F6",
                  title: "Any Other information",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F7": {
                  id: "MQ1-SQ1-F7",
                  title: "Disease name",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F8": {
                  id: "MQ1-SQ1-F8",
                  title: "Date of Diagnosis",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F9": {
                  id: "MQ1-SQ1-F9",
                  title: "Claim in previous policy",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
              },
            },
            child_four: {
              keyName: "child_four",
              name: "",
              image_class: "child",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Last Consultation Date",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Name of Surgery (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title:
                    "Details of Treatment given(hospitalization/OPD, other)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Disability",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F5": {
                  id: "MQ1-SQ1-F5",
                  title: "Period of hospitalization (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F6": {
                  id: "MQ1-SQ1-F6",
                  title: "Any Other information",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F7": {
                  id: "MQ1-SQ1-F7",
                  title: "Disease name",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F8": {
                  id: "MQ1-SQ1-F8",
                  title: "Date of Diagnosis",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F9": {
                  id: "MQ1-SQ1-F9",
                  title: "Claim in previous policy",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
              },
            },
          },
        },
      },
      MQ19: {
        main_question: {
          id: "MQ19",
          icon_class: "tobaco",
          title:
            "Disease of the musculoskeletal system / Or thopedic disorders/Degeneration, Fracture or dislocation of bones or joints/ avascular necrosis of joints or any other disorder related to it?",
          description: "",
          status: false,
          member_data: {
            adult_one: {
              keyName: "adult_one",
              name: "",
              image_class: "adult",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Last Consultation Date",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Name of Surgery (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title:
                    "Details of Treatment given(hospitalization/OPD, other)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Disability",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F5": {
                  id: "MQ1-SQ1-F5",
                  title: "Period of hospitalization (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F6": {
                  id: "MQ1-SQ1-F6",
                  title: "Any Other information",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F7": {
                  id: "MQ1-SQ1-F7",
                  title: "Disease name",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F8": {
                  id: "MQ1-SQ1-F8",
                  title: "Date of Diagnosis",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
            adult_two: {
              keyName: "adult_two",
              name: "",
              image_class: "adult",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Last Consultation Date",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Name of Surgery (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title:
                    "Details of Treatment given(hospitalization/OPD, other)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Disability",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F5": {
                  id: "MQ1-SQ1-F5",
                  title: "Period of hospitalization (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F6": {
                  id: "MQ1-SQ1-F6",
                  title: "Any Other information",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F7": {
                  id: "MQ1-SQ1-F7",
                  title: "Disease name",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F8": {
                  id: "MQ1-SQ1-F8",
                  title: "Date of Diagnosis",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
            child_one: {
              keyName: "child_one",
              name: "",
              image_class: "child",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Last Consultation Date",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Name of Surgery (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title:
                    "Details of Treatment given(hospitalization/OPD, other)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Disability",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F5": {
                  id: "MQ1-SQ1-F5",
                  title: "Period of hospitalization (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F6": {
                  id: "MQ1-SQ1-F6",
                  title: "Any Other information",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F7": {
                  id: "MQ1-SQ1-F7",
                  title: "Disease name",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F8": {
                  id: "MQ1-SQ1-F8",
                  title: "Date of Diagnosis",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
            child_two: {
              keyName: "child_two",
              name: "",
              image_class: "child",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Last Consultation Date",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Name of Surgery (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title:
                    "Details of Treatment given(hospitalization/OPD, other)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Disability",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F5": {
                  id: "MQ1-SQ1-F5",
                  title: "Period of hospitalization (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F6": {
                  id: "MQ1-SQ1-F6",
                  title: "Any Other information",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F7": {
                  id: "MQ1-SQ1-F7",
                  title: "Disease name",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F8": {
                  id: "MQ1-SQ1-F8",
                  title: "Date of Diagnosis",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
            child_three: {
              keyName: "child_three",
              name: "",
              image_class: "child",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Last Consultation Date",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Name of Surgery (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title:
                    "Details of Treatment given(hospitalization/OPD, other)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Disability",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F5": {
                  id: "MQ1-SQ1-F5",
                  title: "Period of hospitalization (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F6": {
                  id: "MQ1-SQ1-F6",
                  title: "Any Other information",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F7": {
                  id: "MQ1-SQ1-F7",
                  title: "Disease name",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F8": {
                  id: "MQ1-SQ1-F8",
                  title: "Date of Diagnosis",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
            child_four: {
              keyName: "child_four",
              name: "",
              image_class: "child",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Last Consultation Date",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Name of Surgery (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title:
                    "Details of Treatment given(hospitalization/OPD, other)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Disability",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F5": {
                  id: "MQ1-SQ1-F5",
                  title: "Period of hospitalization (if any)",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F6": {
                  id: "MQ1-SQ1-F6",
                  title: "Any Other information",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F7": {
                  id: "MQ1-SQ1-F7",
                  title: "Disease name",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F8": {
                  id: "MQ1-SQ1-F8",
                  title: "Date of Diagnosis",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
          },
        },
      },
    };
  };
