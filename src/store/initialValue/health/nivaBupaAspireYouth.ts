import { TDropdown } from "@/store/types/Common/TDropdown";
import { TNivaBupaMedicalQuestion } from "@/store/types/Health/HealthQuotation/TNivaBupaMedicalQuestion";

const CURRENT_STATUS: TDropdown[] = [
  { label: "Complete", value: "Complete" },
  { label: "Partial", value: "Partial" },
  { label: "Recovery", value: "Recovery" },
  { label: "Ongoing treatment", value: "Ongoing treatment" },
];

export const NIVA_BUPA_ASPIRE_YOUTH_INITIAL_VALUE =
  (): TNivaBupaMedicalQuestion => {
    return {
      MQ01: {
        main_question: {
          id: "MQ01",
          icon_class: "tobaco",
          title: "",
          description: "Are You Suffering from any of the following diseases?",
          status: false,
          sub_question: {
            "MQ1-SQ1": {
              id: "MQ1-SQ1",
              icon_class: "",
              status: false,
              title: "",
              description: "Cancer/Leukemia/Malignant Tumour",
            },
            "MQ2-SQ2": {
              id: "MQ2-SQ2",
              icon_class: "",
              status: false,
              title: "",
              description:
                "Cardiac Ailments (Heart Attack, By-Pass Surgery etc)",
            },
            "MQ3-SQ3": {
              id: "MQ3-SQ3",
              icon_class: "",
              status: false,
              title: "",
              description:
                "Major organ failure (Kidney, Liver, Heart, Lungs, etc.)",
            },
            "MQ4-SQ4": {
              id: "MQ4-SQ4",
              icon_class: "",
              status: false,
              title: "",
              description: "Neurological disorder/Stroke/Paralysis",
            },
            "MQ5-SQ5": {
              id: "MQ5-SQ5",
              icon_class: "",
              status: false,
              title: "",
              description:
                "Chronic Obstructive Pulmonary Disease (COPD) / Progressive Lungs Disease",
            },
            "MQ6-SQ6": {
              id: "MQ6-SQ6",
              icon_class: "",
              status: false,
              title: "",
              description:
                "Hepatitis B or C, Chronic liver disease, Crohn's disease, Ulcerative colitis",
            },
            "MQ7-SQ7": {
              id: "MQ7-SQ7",
              icon_class: "",
              status: false,
              title: "",
              description: "Any anaemia other than iron deficiency anaemia",
            },
            "MQ8-SQ8": {
              id: "MQ8-SQ8",
              icon_class: "",
              status: false,
              title: "",
              description: "Type 1 Diabetes",
            },
          },
        },
      },
      MQ02: {
        main_question: {
          id: "MQ02",
          icon_class: "tobaco",
          title: "",
          description: " Do you have Diabetes?",
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
                  title: "Diagnosis and or Surgery Name?",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Details of surgery?",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title: "Current health status?",
                  field_type: "DROPDOWN",
                  dropdown_data: CURRENT_STATUS,
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
                  title: "Diagnosis and or Surgery Name?",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Details of surgery?",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title: "Current health status?",
                  field_type: "DROPDOWN",
                  dropdown_data: CURRENT_STATUS,
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
                  title: "Diagnosis and or Surgery Name?",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Details of surgery?",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title: "Current health status?",
                  field_type: "DROPDOWN",
                  dropdown_data: CURRENT_STATUS,
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
                  title: "Diagnosis and or Surgery Name?",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Details of surgery?",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title: "Current health status?",
                  field_type: "DROPDOWN",
                  dropdown_data: CURRENT_STATUS,
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
                  title: "Diagnosis and or Surgery Name?",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Details of surgery?",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title: "Current health status?",
                  field_type: "DROPDOWN",
                  dropdown_data: CURRENT_STATUS,
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
                  title: "Diagnosis and or Surgery Name?",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Details of surgery?",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title: "Current health status?",
                  field_type: "DROPDOWN",
                  dropdown_data: CURRENT_STATUS,
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
          title: "",
          description: " Do you have Hypertension?",
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
                  title: "Diagnosis and or Surgery Name?",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Details of surgery?",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title: "Current health status?",
                  field_type: "DROPDOWN",
                  dropdown_data: CURRENT_STATUS,
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
                  title: "Diagnosis and or Surgery Name?",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Details of surgery?",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title: "Current health status?",
                  field_type: "DROPDOWN",
                  dropdown_data: CURRENT_STATUS,
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
                  title: "Diagnosis and or Surgery Name?",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Details of surgery?",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title: "Current health status?",
                  field_type: "DROPDOWN",
                  dropdown_data: CURRENT_STATUS,
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
                  title: "Diagnosis and or Surgery Name?",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Details of surgery?",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title: "Current health status?",
                  field_type: "DROPDOWN",
                  dropdown_data: CURRENT_STATUS,
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
                  title: "Diagnosis and or Surgery Name?",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Details of surgery?",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title: "Current health status?",
                  field_type: "DROPDOWN",
                  dropdown_data: CURRENT_STATUS,
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
                  title: "Diagnosis and or Surgery Name?",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Details of surgery?",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title: "Current health status?",
                  field_type: "DROPDOWN",
                  dropdown_data: CURRENT_STATUS,
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
          title: "",
          description:
            "Ever been diagnosed with a disease that needed treatment for more than a week?",
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
                  title: "Diagnosis and or Surgery Name?",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Details of surgery?",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title: "Current health status?",
                  field_type: "DROPDOWN",
                  dropdown_data: CURRENT_STATUS,
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
                  title: "Diagnosis and or Surgery Name?",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Details of surgery?",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title: "Current health status?",
                  field_type: "DROPDOWN",
                  dropdown_data: CURRENT_STATUS,
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
                  title: "Diagnosis and or Surgery Name?",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Details of surgery?",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title: "Current health status?",
                  field_type: "DROPDOWN",
                  dropdown_data: CURRENT_STATUS,
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
                  title: "Diagnosis and or Surgery Name?",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Details of surgery?",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title: "Current health status?",
                  field_type: "DROPDOWN",
                  dropdown_data: CURRENT_STATUS,
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
                  title: "Diagnosis and or Surgery Name?",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Details of surgery?",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title: "Current health status?",
                  field_type: "DROPDOWN",
                  dropdown_data: CURRENT_STATUS,
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
                  title: "Diagnosis and or Surgery Name?",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Details of surgery?",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title: "Current health status?",
                  field_type: "DROPDOWN",
                  dropdown_data: CURRENT_STATUS,
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
          title: "",
          description: "Ever underwent a surgery? Or advised one?",
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
                  title: "Diagnosis and or Surgery Name?",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Details of surgery?",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title: "Current health status?",
                  field_type: "DROPDOWN",
                  dropdown_data: CURRENT_STATUS,
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
                  title: "Diagnosis and or Surgery Name?",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Details of surgery?",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title: "Current health status?",
                  field_type: "DROPDOWN",
                  dropdown_data: CURRENT_STATUS,
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
                  title: "Diagnosis and or Surgery Name?",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Details of surgery?",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title: "Current health status?",
                  field_type: "DROPDOWN",
                  dropdown_data: CURRENT_STATUS,
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
                  title: "Diagnosis and or Surgery Name?",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Details of surgery?",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title: "Current health status?",
                  field_type: "DROPDOWN",
                  dropdown_data: CURRENT_STATUS,
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
                  title: "Diagnosis and or Surgery Name?",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Details of surgery?",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title: "Current health status?",
                  field_type: "DROPDOWN",
                  dropdown_data: CURRENT_STATUS,
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
                  title: "Diagnosis and or Surgery Name?",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Details of surgery?",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title: "Current health status?",
                  field_type: "DROPDOWN",
                  dropdown_data: CURRENT_STATUS,
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
          title: "",
          description:
            "Currently Under any follow up or awaiting any treatment?",
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
                  title: "Diagnosis and or Surgery Name?",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Details of surgery?",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title: "Current health status?",
                  field_type: "DROPDOWN",
                  dropdown_data: CURRENT_STATUS,
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
                  title: "Diagnosis and or Surgery Name?",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Details of surgery?",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title: "Current health status?",
                  field_type: "DROPDOWN",
                  dropdown_data: CURRENT_STATUS,
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
                  title: "Diagnosis and or Surgery Name?",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Details of surgery?",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title: "Current health status?",
                  field_type: "DROPDOWN",
                  dropdown_data: CURRENT_STATUS,
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
                  title: "Diagnosis and or Surgery Name?",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Details of surgery?",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title: "Current health status?",
                  field_type: "DROPDOWN",
                  dropdown_data: CURRENT_STATUS,
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
                  title: "Diagnosis and or Surgery Name?",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Details of surgery?",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title: "Current health status?",
                  field_type: "DROPDOWN",
                  dropdown_data: CURRENT_STATUS,
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
                  title: "Diagnosis and or Surgery Name?",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Details of surgery?",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title: "Current health status?",
                  field_type: "DROPDOWN",
                  dropdown_data: CURRENT_STATUS,
                },
              },
            },
          },
        },
      },
    };
  };
