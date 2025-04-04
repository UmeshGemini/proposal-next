import { TGoDigitMedicalQuestion } from "@/store/types/Health/HealthQuotation/TGodigitMedicalQuestion";

export const GO_DIGIT_MEDICAL_QUESTION_INITIAL_VALUE =
  (): TGoDigitMedicalQuestion => {
    return {
      MQ01: {
        main_question: {
          id: "MQ01",
          icon_class: "tobaco",
          title: "Pre-Existing Diseases",
          description:
            "Do you have any existing condition or disease for which they are being treated and/or and evaluated currently or in the past or have been diagnosed with? Other than common cold or viral fever?",
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
                    "What are Your current and past medical conditions or disease?",
                  field_type: "MILTIPLE_DROPDOWN",
                  value: { value: [], warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title:
                    "Have you been infected with Covid-19 in the last 15 days?",
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
                    "What are Your current and past medical conditions or disease?",
                  field_type: "MILTIPLE_DROPDOWN",
                  value: { value: [], warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title:
                    "Have you been infected with Covid-19 in the last 15 days?",
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
                    "What are Your current and past medical conditions or disease?",
                  field_type: "MILTIPLE_DROPDOWN",
                  value: { value: [], warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title:
                    "Have you been infected with Covid-19 in the last 15 days?",
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
                    "What are Your current and past medical conditions or disease?",
                  field_type: "MILTIPLE_DROPDOWN",
                  value: { value: [], warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title:
                    "Have you been infected with Covid-19 in the last 15 days?",
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
                    "What are Your current and past medical conditions or disease?",
                  field_type: "MILTIPLE_DROPDOWN",
                  value: { value: [], warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title:
                    "Have you been infected with Covid-19 in the last 15 days?",
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
                    "What are Your current and past medical conditions or disease?",
                  field_type: "MILTIPLE_DROPDOWN",
                  value: { value: [], warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title:
                    "Have you been infected with Covid-19 in the last 15 days?",
                  field_type: "TEXTFIELD",
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
          title: "Hospitalised",
          description: "",
          status: false,
          sub_question: {
            "MQ1-SQ1": {
              id: "MQ1-SQ1",
              icon_class: "",
              status: false,
              title: "Do you have Hyperlipidemia?",
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
                      title: "Any complications with high lipids",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F2": {
                      id: "MQ1-SQ1-F2",
                      title: "On medication for High lipids",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F3": {
                      id: "MQ1-SQ1-F3",
                      title: "  When was it diagnosed",
                      field_type: "DROPDOWN",
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
                      title: "Any complications with high lipids",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F2": {
                      id: "MQ1-SQ1-F2",
                      title: "On medication for High lipids",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F3": {
                      id: "MQ1-SQ1-F3",
                      title: "  When was it diagnosed",
                      field_type: "DROPDOWN",
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
                      title: "Any complications with high lipids",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F2": {
                      id: "MQ1-SQ1-F2",
                      title: "On medication for High lipids",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F3": {
                      id: "MQ1-SQ1-F3",
                      title: "  When was it diagnosed",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                  },
                },
                child_two: {
                  keyName: "child_two",
                  name: "",
                  image_class: "child",
                  field_data: {
                    "MQ1-SQ1-F1": {
                      id: "MQ1-SQ1-F1",
                      title: "Any complications with high lipids",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F2": {
                      id: "MQ1-SQ1-F2",
                      title: "On medication for High lipids",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F3": {
                      id: "MQ1-SQ1-F3",
                      title: "  When was it diagnosed",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                  },
                  selection_status: false,
                },
                child_three: {
                  keyName: "child_three",
                  name: "",

                  image_class: "child",
                  selection_status: false,
                  field_data: {
                    "MQ1-SQ1-F1": {
                      id: "MQ1-SQ1-F1",
                      title: "Any complications with high lipids",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F2": {
                      id: "MQ1-SQ1-F2",
                      title: "On medication for High lipids",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F3": {
                      id: "MQ1-SQ1-F3",
                      title: "  When was it diagnosed",
                      field_type: "DROPDOWN",
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
                      title: "Any complications with high lipids",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F2": {
                      id: "MQ1-SQ1-F2",
                      title: "On medication for High lipids",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F3": {
                      id: "MQ1-SQ1-F3",
                      title: "  When was it diagnosed",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                  },
                },
              },
            },
            "MQ2-SQ2": {
              id: "MQ2-SQ2",
              icon_class: "",
              status: false,
              title: "Do you have Diabetes?",
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
                      title: "Type of Diabetes",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F2": {
                      id: "MQ1-SQ1-F2",
                      title: "What was FBS value?",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F3": {
                      id: "MQ1-SQ1-F3",
                      title: "Current Medication",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F4": {
                      id: "MQ1-SQ1-F4",
                      title: "When was it diagnosed?",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F5": {
                      id: "MQ1-SQ1-F5",
                      title: "When was your last Blood sugar tests done",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F6": {
                      id: "MQ1-SQ1-F6",
                      title: "Were you hospitalized due to Diabetes?",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F7": {
                      id: "MQ1-SQ1-F7",
                      title: "Do you have records of hospitalization, if any?",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F8": {
                      id: "MQ1-SQ1-F8",
                      title: "Any complications for Diabetes",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F9": {
                      id: "MQ1-SQ1-F9",
                      title: "Do you have records of complications, if any?",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F10": {
                      id: "MQ1-SQ1-F10",
                      title: "What was HbA1c value??",
                      field_type: "DROPDOWN",
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
                      title: "Type of Diabetes",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F2": {
                      id: "MQ1-SQ1-F2",
                      title: "What was FBS value?",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F3": {
                      id: "MQ1-SQ1-F3",
                      title: "Current Medication",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F4": {
                      id: "MQ1-SQ1-F4",
                      title: "When was it diagnosed?",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F5": {
                      id: "MQ1-SQ1-F5",
                      title: "When was your last Blood sugar tests done",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F6": {
                      id: "MQ1-SQ1-F6",
                      title: "Were you hospitalized due to Diabetes?",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F7": {
                      id: "MQ1-SQ1-F7",
                      title: "Do you have records of hospitalization, if any?",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F8": {
                      id: "MQ1-SQ1-F8",
                      title: "Any complications for Diabetes",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F9": {
                      id: "MQ1-SQ1-F9",
                      title: "Do you have records of complications, if any?",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F10": {
                      id: "MQ1-SQ1-F10",
                      title: "What was HbA1c value??",
                      field_type: "DROPDOWN",
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
                      title: "Type of Diabetes",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F2": {
                      id: "MQ1-SQ1-F2",
                      title: "What was FBS value?",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F3": {
                      id: "MQ1-SQ1-F3",
                      title: "Current Medication",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F4": {
                      id: "MQ1-SQ1-F4",
                      title: "When was it diagnosed?",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F5": {
                      id: "MQ1-SQ1-F5",
                      title: "When was your last Blood sugar tests done",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F6": {
                      id: "MQ1-SQ1-F6",
                      title: "Were you hospitalized due to Diabetes?",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F7": {
                      id: "MQ1-SQ1-F7",
                      title: "Do you have records of hospitalization, if any?",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F8": {
                      id: "MQ1-SQ1-F8",
                      title: "Any complications for Diabetes",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F9": {
                      id: "MQ1-SQ1-F9",
                      title: "Do you have records of complications, if any?",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F10": {
                      id: "MQ1-SQ1-F10",
                      title: "What was HbA1c value??",
                      field_type: "DROPDOWN",
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
                      title: "Type of Diabetes",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F2": {
                      id: "MQ1-SQ1-F2",
                      title: "What was FBS value?",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F3": {
                      id: "MQ1-SQ1-F3",
                      title: "Current Medication",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F4": {
                      id: "MQ1-SQ1-F4",
                      title: "When was it diagnosed?",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F5": {
                      id: "MQ1-SQ1-F5",
                      title: "When was your last Blood sugar tests done",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F6": {
                      id: "MQ1-SQ1-F6",
                      title: "Were you hospitalized due to Diabetes?",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F7": {
                      id: "MQ1-SQ1-F7",
                      title: "Do you have records of hospitalization, if any?",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F8": {
                      id: "MQ1-SQ1-F8",
                      title: "Any complications for Diabetes",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F9": {
                      id: "MQ1-SQ1-F9",
                      title: "Do you have records of complications, if any?",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F10": {
                      id: "MQ1-SQ1-F10",
                      title: "What was HbA1c value??",
                      field_type: "DROPDOWN",
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
                      title: "Type of Diabetes",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F2": {
                      id: "MQ1-SQ1-F2",
                      title: "What was FBS value?",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F3": {
                      id: "MQ1-SQ1-F3",
                      title: "Current Medication",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F4": {
                      id: "MQ1-SQ1-F4",
                      title: "When was it diagnosed?",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F5": {
                      id: "MQ1-SQ1-F5",
                      title: "When was your last Blood sugar tests done",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F6": {
                      id: "MQ1-SQ1-F6",
                      title: "Were you hospitalized due to Diabetes?",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F7": {
                      id: "MQ1-SQ1-F7",
                      title: "Do you have records of hospitalization, if any?",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F8": {
                      id: "MQ1-SQ1-F8",
                      title: "Any complications for Diabetes",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F9": {
                      id: "MQ1-SQ1-F9",
                      title: "Do you have records of complications, if any?",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F10": {
                      id: "MQ1-SQ1-F10",
                      title: "What was HbA1c value??",
                      field_type: "DROPDOWN",
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
                      title: "Type of Diabetes",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F2": {
                      id: "MQ1-SQ1-F2",
                      title: "What was FBS value?",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F3": {
                      id: "MQ1-SQ1-F3",
                      title: "Current Medication",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F4": {
                      id: "MQ1-SQ1-F4",
                      title: "When was it diagnosed?",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F5": {
                      id: "MQ1-SQ1-F5",
                      title: "When was your last Blood sugar tests done",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F6": {
                      id: "MQ1-SQ1-F6",
                      title: "Were you hospitalized due to Diabetes?",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F7": {
                      id: "MQ1-SQ1-F7",
                      title: "Do you have records of hospitalization, if any?",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F8": {
                      id: "MQ1-SQ1-F8",
                      title: "Any complications for Diabetes",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F9": {
                      id: "MQ1-SQ1-F9",
                      title: "Do you have records of complications, if any?",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F10": {
                      id: "MQ1-SQ1-F10",
                      title: "What was HbA1c value??",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                  },
                },
              },
            },
            "MQ3-SQ3": {
              id: "MQ3-SQ3",
              icon_class: "",
              status: false,
              title: "Do you have Asthma?",
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
                      title: "When was it diagnosed?",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F2": {
                      id: "MQ1-SQ1-F2",
                      title: "Current Medication",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F3": {
                      id: "MQ1-SQ1-F3",
                      title:
                        "How many times a year have you suffered with Asthma",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F4": {
                      id: "MQ1-SQ1-F4",
                      title: "Were you hospitalized due to Asthma?",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F5": {
                      id: "MQ1-SQ1-F5",
                      title: "Do you have records of hospitalization, if any?",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F6": {
                      id: "MQ1-SQ1-F6",
                      title: "Any complications due to Asthma?",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F7": {
                      id: "MQ1-SQ1-F7",
                      title: "Do you have records of complications, if any?",
                      field_type: "DROPDOWN",
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
                      title: "When was it diagnosed?",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F2": {
                      id: "MQ1-SQ1-F2",
                      title: "Current Medication",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F3": {
                      id: "MQ1-SQ1-F3",
                      title:
                        "How many times a year have you suffered with Asthma",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F4": {
                      id: "MQ1-SQ1-F4",
                      title: "Were you hospitalized due to Asthma?",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F5": {
                      id: "MQ1-SQ1-F5",
                      title: "Do you have records of hospitalization, if any?",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F6": {
                      id: "MQ1-SQ1-F6",
                      title: "Any complications due to Asthma?",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F7": {
                      id: "MQ1-SQ1-F7",
                      title: "Do you have records of complications, if any?",
                      field_type: "DROPDOWN",
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
                      title: "When was it diagnosed?",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F2": {
                      id: "MQ1-SQ1-F2",
                      title: "Current Medication",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F3": {
                      id: "MQ1-SQ1-F3",
                      title:
                        "How many times a year have you suffered with Asthma",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F4": {
                      id: "MQ1-SQ1-F4",
                      title: "Were you hospitalized due to Asthma?",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F5": {
                      id: "MQ1-SQ1-F5",
                      title: "Do you have records of hospitalization, if any?",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F6": {
                      id: "MQ1-SQ1-F6",
                      title: "Any complications due to Asthma?",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F7": {
                      id: "MQ1-SQ1-F7",
                      title: "Do you have records of complications, if any?",
                      field_type: "DROPDOWN",
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
                      title: "When was it diagnosed?",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F2": {
                      id: "MQ1-SQ1-F2",
                      title: "Current Medication",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F3": {
                      id: "MQ1-SQ1-F3",
                      title:
                        "How many times a year have you suffered with Asthma",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F4": {
                      id: "MQ1-SQ1-F4",
                      title: "Were you hospitalized due to Asthma?",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F5": {
                      id: "MQ1-SQ1-F5",
                      title: "Do you have records of hospitalization, if any?",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F6": {
                      id: "MQ1-SQ1-F6",
                      title: "Any complications due to Asthma?",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F7": {
                      id: "MQ1-SQ1-F7",
                      title: "Do you have records of complications, if any?",
                      field_type: "DROPDOWN",
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
                      title: "When was it diagnosed?",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F2": {
                      id: "MQ1-SQ1-F2",
                      title: "Current Medication",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F3": {
                      id: "MQ1-SQ1-F3",
                      title:
                        "How many times a year have you suffered with Asthma",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F4": {
                      id: "MQ1-SQ1-F4",
                      title: "Were you hospitalized due to Asthma?",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F5": {
                      id: "MQ1-SQ1-F5",
                      title: "Do you have records of hospitalization, if any?",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F6": {
                      id: "MQ1-SQ1-F6",
                      title: "Any complications due to Asthma?",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F7": {
                      id: "MQ1-SQ1-F7",
                      title: "Do you have records of complications, if any?",
                      field_type: "DROPDOWN",
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
                      title: "When was it diagnosed?",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F2": {
                      id: "MQ1-SQ1-F2",
                      title: "Current Medication",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F3": {
                      id: "MQ1-SQ1-F3",
                      title:
                        "How many times a year have you suffered with Asthma",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F4": {
                      id: "MQ1-SQ1-F4",
                      title: "Were you hospitalized due to Asthma?",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F5": {
                      id: "MQ1-SQ1-F5",
                      title: "Do you have records of hospitalization, if any?",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F6": {
                      id: "MQ1-SQ1-F6",
                      title: "Any complications due to Asthma?",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F7": {
                      id: "MQ1-SQ1-F7",
                      title: "Do you have records of complications, if any?",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                  },
                },
              },
            },
            "MQ4-SQ4": {
              id: "MQ4-SQ4",
              icon_class: "",
              status: false,
              title: "Do you have Thyroid?",
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
                      title: "Type of Thyroid dysfunction?",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F2": {
                      id: "MQ1-SQ1-F2",
                      title: "Current Medication",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F3": {
                      id: "MQ1-SQ1-F3",
                      title: "When was it diagnosed?",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F4": {
                      id: "MQ1-SQ1-F4",
                      title: "Any associated complications",
                      field_type: "DROPDOWN",
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
                      title: "Type of Thyroid dysfunction?",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F2": {
                      id: "MQ1-SQ1-F2",
                      title: "Current Medication",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F3": {
                      id: "MQ1-SQ1-F3",
                      title: "When was it diagnosed?",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F4": {
                      id: "MQ1-SQ1-F4",
                      title: "Any associated complications",
                      field_type: "DROPDOWN",
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
                      title: "Type of Thyroid dysfunction?",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F2": {
                      id: "MQ1-SQ1-F2",
                      title: "Current Medication",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F3": {
                      id: "MQ1-SQ1-F3",
                      title: "When was it diagnosed?",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F4": {
                      id: "MQ1-SQ1-F4",
                      title: "Any associated complications",
                      field_type: "DROPDOWN",
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
                      title: "Type of Thyroid dysfunction?",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F2": {
                      id: "MQ1-SQ1-F2",
                      title: "Current Medication",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F3": {
                      id: "MQ1-SQ1-F3",
                      title: "When was it diagnosed?",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F4": {
                      id: "MQ1-SQ1-F4",
                      title: "Any associated complications",
                      field_type: "DROPDOWN",
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
                      title: "Type of Thyroid dysfunction?",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F2": {
                      id: "MQ1-SQ1-F2",
                      title: "Current Medication",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F3": {
                      id: "MQ1-SQ1-F3",
                      title: "When was it diagnosed?",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F4": {
                      id: "MQ1-SQ1-F4",
                      title: "Any associated complications",
                      field_type: "DROPDOWN",
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
                      title: "Type of Thyroid dysfunction?",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F2": {
                      id: "MQ1-SQ1-F2",
                      title: "Current Medication",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F3": {
                      id: "MQ1-SQ1-F3",
                      title: "When was it diagnosed?",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F4": {
                      id: "MQ1-SQ1-F4",
                      title: "Any associated complications",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                  },
                },
              },
            },
            "MQ5-SQ5": {
              id: "MQ5-SQ5",
              icon_class: "",
              status: false,
              title: "Do you have Hypertension?",
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
                      title: "When was it diagnosed?",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F2": {
                      id: "MQ1-SQ1-F2",
                      title: "No. of tablets",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F3": {
                      id: "MQ1-SQ1-F3",
                      title: "Systolic Reading",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F4": {
                      id: "MQ1-SQ1-F4",
                      title: "Diastolic Reading",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F5": {
                      id: "MQ1-SQ1-F5",
                      title:
                        "Any complications related to Hypertension (related to nerves, eyes, heart or kidney)",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F6": {
                      id: "MQ1-SQ1-F6",
                      title: "Do you have records of complications, if any?",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F7": {
                      id: "MQ1-SQ1-F7",
                      title: "Were you hospitalized due to Hypertension?",
                      field_type: "DROPDOWN",
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
                      title: "When was it diagnosed?",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F2": {
                      id: "MQ1-SQ1-F2",
                      title: "No. of tablets",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F3": {
                      id: "MQ1-SQ1-F3",
                      title: "Systolic Reading",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F4": {
                      id: "MQ1-SQ1-F4",
                      title: "Diastolic Reading",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F5": {
                      id: "MQ1-SQ1-F5",
                      title:
                        "Any complications related to Hypertension (related to nerves, eyes, heart or kidney)",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F6": {
                      id: "MQ1-SQ1-F6",
                      title: "Do you have records of complications, if any?",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F7": {
                      id: "MQ1-SQ1-F7",
                      title: "Were you hospitalized due to Hypertension?",
                      field_type: "DROPDOWN",
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
                      title: "When was it diagnosed?",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F2": {
                      id: "MQ1-SQ1-F2",
                      title: "No. of tablets",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F3": {
                      id: "MQ1-SQ1-F3",
                      title: "Systolic Reading",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F4": {
                      id: "MQ1-SQ1-F4",
                      title: "Diastolic Reading",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F5": {
                      id: "MQ1-SQ1-F5",
                      title:
                        "Any complications related to Hypertension (related to nerves, eyes, heart or kidney)",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F6": {
                      id: "MQ1-SQ1-F6",
                      title: "Do you have records of complications, if any?",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F7": {
                      id: "MQ1-SQ1-F7",
                      title: "Were you hospitalized due to Hypertension?",
                      field_type: "DROPDOWN",
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
                      title: "When was it diagnosed?",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F2": {
                      id: "MQ1-SQ1-F2",
                      title: "No. of tablets",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F3": {
                      id: "MQ1-SQ1-F3",
                      title: "Systolic Reading",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F4": {
                      id: "MQ1-SQ1-F4",
                      title: "Diastolic Reading",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F5": {
                      id: "MQ1-SQ1-F5",
                      title:
                        "Any complications related to Hypertension (related to nerves, eyes, heart or kidney)",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F6": {
                      id: "MQ1-SQ1-F6",
                      title: "Do you have records of complications, if any?",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F7": {
                      id: "MQ1-SQ1-F7",
                      title: "Were you hospitalized due to Hypertension?",
                      field_type: "DROPDOWN",
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
                      title: "When was it diagnosed?",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F2": {
                      id: "MQ1-SQ1-F2",
                      title: "No. of tablets",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F3": {
                      id: "MQ1-SQ1-F3",
                      title: "Systolic Reading",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F4": {
                      id: "MQ1-SQ1-F4",
                      title: "Diastolic Reading",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F5": {
                      id: "MQ1-SQ1-F5",
                      title:
                        "Any complications related to Hypertension (related to nerves, eyes, heart or kidney)",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F6": {
                      id: "MQ1-SQ1-F6",
                      title: "Do you have records of complications, if any?",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F7": {
                      id: "MQ1-SQ1-F7",
                      title: "Were you hospitalized due to Hypertension?",
                      field_type: "DROPDOWN",
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
                      title: "When was it diagnosed?",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F2": {
                      id: "MQ1-SQ1-F2",
                      title: "No. of tablets",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F3": {
                      id: "MQ1-SQ1-F3",
                      title: "Systolic Reading",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F4": {
                      id: "MQ1-SQ1-F4",
                      title: "Diastolic Reading",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F5": {
                      id: "MQ1-SQ1-F5",
                      title:
                        "Any complications related to Hypertension (related to nerves, eyes, heart or kidney)",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F6": {
                      id: "MQ1-SQ1-F6",
                      title: "Do you have records of complications, if any?",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F7": {
                      id: "MQ1-SQ1-F7",
                      title: "Were you hospitalized due to Hypertension?",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                  },
                },
              },
            },
            "MQ6-SQ6": {
              id: "MQ6-SQ6",
              icon_class: "",
              status: false,
              title: "Do you  have any Gynaecological problem ?",
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
                      title: "what is the name of your condition?",
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
                      title: "what is the name of your condition?",
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
                      title: "what is the name of your condition?",
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
                      title: "what is the name of your condition?",
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
                      title: "what is the name of your condition?",
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
                      title: "what is the name of your condition?",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                  },
                },
              },
            },
            "MQ7-SQ7": {
              id: "MQ7-SQ7",
              icon_class: "",
              status: false,
              title: "Is any member going through any medications currently",
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
                      title: "Name of the medicines taken?",
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
                      title: "Name of the medicines taken?",
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
                      title: "Name of the medicines taken?",
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
                      title: "Name of the medicines taken?",
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
                      title: "Name of the medicines taken?",
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
                      title: "Name of the medicines taken?",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                  },
                },
              },
            },
            "MQ8-SQ8": {
              id: "MQ8-SQ8",
              icon_class: "",
              status: false,
              title:
                "Do you face any symptoms like chest pain, fatigue, weight loss, dizziness, joint pain, change in bowel habit, difficulty in breathing, pain in abdomen, bleeding/pain while passing stools etc?",
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
                      title: "Details of your undiagnosed symptoms?",
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
                      title: "Details of your undiagnosed symptoms?",
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
                      title: "Details of your undiagnosed symptoms?",
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
                      title: "Details of your undiagnosed symptoms?",
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
                      title: "Details of your undiagnosed symptoms?",
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
                      title: "Details of your undiagnosed symptoms?",
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
      MQ03: {
        main_question: {
          id: "MQ03",
          icon_class: "tobaco",
          title: "Intoxication Declaration",
          description:
            "Select `Yes` if any insured member Smokes, consumes Tobacco in any form, or drinks Alcohol?",
          status: false,
          sub_question: {
            "MQ1-SQ1": {
              id: "MQ1-SQ1",
              icon_class: "",
              status: false,
              title: "Do you consume alcohol?",
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
                      title: "How often do you consume alchohol?",
                      field_type: "DROPDOWN",
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
                      title: "How often do you consume alchohol?",
                      field_type: "DROPDOWN",
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
                      title: "How often do you consume alchohol?",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                  },
                },
                child_two: {
                  keyName: "child_two",
                  name: "",
                  image_class: "child",
                  field_data: {
                    "MQ1-SQ1-F1": {
                      id: "MQ1-SQ1-F1",
                      title: "How often do you consume alchohol?",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                  },
                  selection_status: false,
                },
                child_three: {
                  keyName: "child_three",
                  name: "",

                  image_class: "child",
                  selection_status: false,
                  field_data: {
                    "MQ1-SQ1-F1": {
                      id: "MQ1-SQ1-F1",
                      title: "How often do you consume alchohol?",
                      field_type: "DROPDOWN",
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
                      title: "How often do you consume alchohol?",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                  },
                },
              },
            },
            "MQ2-SQ2": {
              id: "MQ2-SQ2",
              icon_class: "",
              status: false,
              title: "Do you consume tobacco?",
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
                      title: "In which form do you consumes tobacco?",
                      field_type: "DROPDOWN",
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
                      title: "In which form do you consumes tobacco?",
                      field_type: "DROPDOWN",
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
                      title: "In which form do you consumes tobacco?",
                      field_type: "DROPDOWN",
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
                      title: "In which form do you consumes tobacco?",
                      field_type: "DROPDOWN",
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
                      title: "In which form do you consumes tobacco?",
                      field_type: "DROPDOWN",
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
                      title: "In which form do you consumes tobacco?",
                      field_type: "DROPDOWN",
                      value: { value: "", warning: false },
                    },
                  },
                },
              },
            },
          },
        },
      },
    };
  };
