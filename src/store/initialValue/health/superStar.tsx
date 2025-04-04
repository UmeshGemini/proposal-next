import { TStarMedicalQuestion } from "@/store/types/Health/HealthQuotation/TStarMedicalQuestion";

export const SUPER_STAR_QUESTION_INITIAL_VALUE = (): TStarMedicalQuestion => {
  return {
    MQ01: {
      main_question: {
        id: "MQ01",
        icon_class: "tobaco",
        title: "ANY HEALTH DISEASE",
        description: "",
        status: false,
        sub_question: {
          "MQ1-SQ1": {
            id: "MQ1-SQ1",
            icon_class: "",
            status: false,
            title: "DIABETES",
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
                    title: "Duration of Diabetes",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F2": {
                    id: "MQ1-SQ1-F2",
                    title: "Type of Diabetes",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F3": {
                    id: "MQ1-SQ1-F3",
                    title: "DIABETES DIAGNOSIS",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F4": {
                    id: "MQ1-SQ1-F4",
                    title: "DIABETES HBA1C",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F5": {
                    id: "MQ1-SQ1-F5",
                    title: "Was your age between 30 to 65 years ?",
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
                    title: "Duration of Diabetes",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F2": {
                    id: "MQ1-SQ1-F2",
                    title: "Type of Diabetes",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F3": {
                    id: "MQ1-SQ1-F3",
                    title: "DIABETES DIAGNOSIS",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F4": {
                    id: "MQ1-SQ1-F4",
                    title: "DIABETES HBA1C",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F5": {
                    id: "MQ1-SQ1-F5",
                    title: "Was your age between 30 to 65 years ?",
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
                    title: "Duration of Diabetes",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F2": {
                    id: "MQ1-SQ1-F2",
                    title: "Type of Diabetes",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F3": {
                    id: "MQ1-SQ1-F3",
                    title: "DIABETES DIAGNOSIS",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F4": {
                    id: "MQ1-SQ1-F4",
                    title: "DIABETES HBA1C",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F5": {
                    id: "MQ1-SQ1-F5",
                    title: "Was your age between 30 to 65 years ?",
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
                    title: "Duration of Diabetes",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F2": {
                    id: "MQ1-SQ1-F2",
                    title: "Type of Diabetes",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F3": {
                    id: "MQ1-SQ1-F3",
                    title: "DIABETES DIAGNOSIS",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F4": {
                    id: "MQ1-SQ1-F4",
                    title: "DIABETES HBA1C",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F5": {
                    id: "MQ1-SQ1-F5",
                    title: "Was your age between 30 to 65 years ?",
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
                    title: "Duration of Diabetes",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F2": {
                    id: "MQ1-SQ1-F2",
                    title: "Type of Diabetes",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F3": {
                    id: "MQ1-SQ1-F3",
                    title: "DIABETES DIAGNOSIS",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F4": {
                    id: "MQ1-SQ1-F4",
                    title: "DIABETES HBA1C",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F5": {
                    id: "MQ1-SQ1-F5",
                    title: "Was your age between 30 to 65 years ?",
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
                    title: "Duration of Diabetes",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F2": {
                    id: "MQ1-SQ1-F2",
                    title: "Type of Diabetes",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F3": {
                    id: "MQ1-SQ1-F3",
                    title: "DIABETES DIAGNOSIS",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F4": {
                    id: "MQ1-SQ1-F4",
                    title: "DIABETES HBA1C",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F5": {
                    id: "MQ1-SQ1-F5",
                    title: "Was your age between 30 to 65 years ?",
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
            title: "HYPERTENTION",
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
                    title: "HYPERTENSION DURATION",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F2": {
                    id: "MQ1-SQ1-F2",
                    title: "HYPERTENSION DIAGNOSIS",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F3": {
                    id: "MQ1-SQ1-F3",
                    title: "Was your age between 30 to 65 years ?",
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
                    title: "HYPERTENSION DURATION",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F2": {
                    id: "MQ1-SQ1-F2",
                    title: "HYPERTENSION DIAGNOSIS",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F3": {
                    id: "MQ1-SQ1-F3",
                    title: "Was your age between 30 to 65 years ?",
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
                    title: "HYPERTENSION DURATION",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F2": {
                    id: "MQ1-SQ1-F2",
                    title: "HYPERTENSION DIAGNOSIS",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F3": {
                    id: "MQ1-SQ1-F3",
                    title: "Was your age between 30 to 65 years ?",
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
                    title: "HYPERTENSION DURATION",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F2": {
                    id: "MQ1-SQ1-F2",
                    title: "HYPERTENSION DIAGNOSIS",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F3": {
                    id: "MQ1-SQ1-F3",
                    title: "Was your age between 30 to 65 years ?",
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
                    title: "HYPERTENSION DURATION",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F2": {
                    id: "MQ1-SQ1-F2",
                    title: "HYPERTENSION DIAGNOSIS",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F3": {
                    id: "MQ1-SQ1-F3",
                    title: "Was your age between 30 to 65 years ?",
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
                    title: "HYPERTENSION DURATION",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F2": {
                    id: "MQ1-SQ1-F2",
                    title: "HYPERTENSION DIAGNOSIS",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F3": {
                    id: "MQ1-SQ1-F3",
                    title: "Was your age between 30 to 65 years ?",
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
            title: "ASTHMA",
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
                    title: "ASTHMA DURATION",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F2": {
                    id: "MQ1-SQ1-F2",
                    title: "Symptoms",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F3": {
                    id: "MQ1-SQ1-F3",
                    title: "ASTHMA DRUGS USE",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F4": {
                    id: "MQ1-SQ1-F4",
                    title: "ASTHMA HOSPITALIZATION",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F5": {
                    id: "MQ1-SQ1-F5",
                    title: "ASTHMA RESPIRATORY CARDIAC FAILURE",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F6": {
                    id: "MQ1-SQ1-F6",
                    title: "ASTHMA PULMONARY TEST",
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
                    title: "ASTHMA DURATION",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F2": {
                    id: "MQ1-SQ1-F2",
                    title: "Symptoms",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F3": {
                    id: "MQ1-SQ1-F3",
                    title: "ASTHMA DRUGS USE",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F4": {
                    id: "MQ1-SQ1-F4",
                    title: "ASTHMA HOSPITALIZATION",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F5": {
                    id: "MQ1-SQ1-F5",
                    title: "ASTHMA RESPIRATORY CARDIAC FAILURE",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F6": {
                    id: "MQ1-SQ1-F6",
                    title: "ASTHMA PULMONARY TEST",
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
                    title: "ASTHMA DURATION",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F2": {
                    id: "MQ1-SQ1-F2",
                    title: "Symptoms",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F3": {
                    id: "MQ1-SQ1-F3",
                    title: "ASTHMA DRUGS USE",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F4": {
                    id: "MQ1-SQ1-F4",
                    title: "ASTHMA HOSPITALIZATION",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F5": {
                    id: "MQ1-SQ1-F5",
                    title: "ASTHMA RESPIRATORY CARDIAC FAILURE",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F6": {
                    id: "MQ1-SQ1-F6",
                    title: "ASTHMA PULMONARY TEST",
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
                    title: "ASTHMA DURATION",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F2": {
                    id: "MQ1-SQ1-F2",
                    title: "Symptoms",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F3": {
                    id: "MQ1-SQ1-F3",
                    title: "ASTHMA DRUGS USE",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F4": {
                    id: "MQ1-SQ1-F4",
                    title: "ASTHMA HOSPITALIZATION",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F5": {
                    id: "MQ1-SQ1-F5",
                    title: "ASTHMA RESPIRATORY CARDIAC FAILURE",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F6": {
                    id: "MQ1-SQ1-F6",
                    title: "ASTHMA PULMONARY TEST",
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
                    title: "ASTHMA DURATION",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F2": {
                    id: "MQ1-SQ1-F2",
                    title: "Symptoms",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F3": {
                    id: "MQ1-SQ1-F3",
                    title: "ASTHMA DRUGS USE",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F4": {
                    id: "MQ1-SQ1-F4",
                    title: "ASTHMA HOSPITALIZATION",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F5": {
                    id: "MQ1-SQ1-F5",
                    title: "ASTHMA RESPIRATORY CARDIAC FAILURE",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F6": {
                    id: "MQ1-SQ1-F6",
                    title: "ASTHMA PULMONARY TEST",
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
                    title: "ASTHMA DURATION",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F2": {
                    id: "MQ1-SQ1-F2",
                    title: "Symptoms",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F3": {
                    id: "MQ1-SQ1-F3",
                    title: "ASTHMA DRUGS USE",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F4": {
                    id: "MQ1-SQ1-F4",
                    title: "ASTHMA HOSPITALIZATION",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F5": {
                    id: "MQ1-SQ1-F5",
                    title: "ASTHMA RESPIRATORY CARDIAC FAILURE",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F6": {
                    id: "MQ1-SQ1-F6",
                    title: "ASTHMA PULMONARY TEST",
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
            title: "CAD",
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
                    title: "Date of Cardiac Intervention",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F2": {
                    id: "MQ1-SQ1-F2",
                    title: "Have you undergone CAG (Coronary Angiography)",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F3": {
                    id: "MQ1-SQ1-F3",
                    title: "Have you undergone PTCA (Angioplasty)",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F4": {
                    id: "MQ1-SQ1-F4",
                    title:
                      "Have you undergone CABG (Coronary Artery Bypass Grafting) Surgery",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F5": {
                    id: "MQ1-SQ1-F5",
                    title:
                      "Any Diagnosis/treatment/ Hospitalization related to Retina, Brain or Neuro, Kidney related conditions.",
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
                    title: "Date of Cardiac Intervention",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F2": {
                    id: "MQ1-SQ1-F2",
                    title: "Have you undergone CAG (Coronary Angiography)",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F3": {
                    id: "MQ1-SQ1-F3",
                    title: "Have you undergone PTCA (Angioplasty)",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F4": {
                    id: "MQ1-SQ1-F4",
                    title:
                      "Have you undergone CABG (Coronary Artery Bypass Grafting) Surgery",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F5": {
                    id: "MQ1-SQ1-F5",
                    title:
                      "Any Diagnosis/treatment/ Hospitalization related to Retina, Brain or Neuro, Kidney related conditions.",
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
                    title: "Date of Cardiac Intervention",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F2": {
                    id: "MQ1-SQ1-F2",
                    title: "Have you undergone CAG (Coronary Angiography)",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F3": {
                    id: "MQ1-SQ1-F3",
                    title: "Have you undergone PTCA (Angioplasty)",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F4": {
                    id: "MQ1-SQ1-F4",
                    title:
                      "Have you undergone CABG (Coronary Artery Bypass Grafting) Surgery",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F5": {
                    id: "MQ1-SQ1-F5",
                    title:
                      "Any Diagnosis/treatment/ Hospitalization related to Retina, Brain or Neuro, Kidney related conditions.",
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
                    title: "Date of Cardiac Intervention",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F2": {
                    id: "MQ1-SQ1-F2",
                    title: "Have you undergone CAG (Coronary Angiography)",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F3": {
                    id: "MQ1-SQ1-F3",
                    title: "Have you undergone PTCA (Angioplasty)",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F4": {
                    id: "MQ1-SQ1-F4",
                    title:
                      "Have you undergone CABG (Coronary Artery Bypass Grafting) Surgery",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F5": {
                    id: "MQ1-SQ1-F5",
                    title:
                      "Any Diagnosis/treatment/ Hospitalization related to Retina, Brain or Neuro, Kidney related conditions.",
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
                    title: "Date of Cardiac Intervention",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F2": {
                    id: "MQ1-SQ1-F2",
                    title: "Have you undergone CAG (Coronary Angiography)",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F3": {
                    id: "MQ1-SQ1-F3",
                    title: "Have you undergone PTCA (Angioplasty)",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F4": {
                    id: "MQ1-SQ1-F4",
                    title:
                      "Have you undergone CABG (Coronary Artery Bypass Grafting) Surgery",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F5": {
                    id: "MQ1-SQ1-F5",
                    title:
                      "Any Diagnosis/treatment/ Hospitalization related to Retina, Brain or Neuro, Kidney related conditions.",
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
                    title: "Date of Cardiac Intervention",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F2": {
                    id: "MQ1-SQ1-F2",
                    title: "Have you undergone CAG (Coronary Angiography)",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F3": {
                    id: "MQ1-SQ1-F3",
                    title: "Have you undergone PTCA (Angioplasty)",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F4": {
                    id: "MQ1-SQ1-F4",
                    title:
                      "Have you undergone CABG (Coronary Artery Bypass Grafting) Surgery",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F5": {
                    id: "MQ1-SQ1-F5",
                    title:
                      "Any Diagnosis/treatment/ Hospitalization related to Retina, Brain or Neuro, Kidney related conditions.",
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
            title: "BMI",
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
                    title: "BMI DIAGNOSIS",
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
                    title: "BMI DIAGNOSIS",
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
                    title: "BMI DIAGNOSIS",
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
                    title: "BMI DIAGNOSIS",
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
                    title: "BMI DIAGNOSIS",
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
                    title: "BMI DIAGNOSIS",
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
            title: "HYPERLIPIDAEMIA",
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
                    title: "Duration since detection",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F2": {
                    id: "MQ1-SQ1-F2",
                    title: "Number of oral medicines",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F3": {
                    id: "MQ1-SQ1-F3",
                    title: "Cholesterol level",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F4": {
                    id: "MQ1-SQ1-F4",
                    title: "HYPERLIPIDAEMIA DIAGNOSIS",
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
                    title: "Duration since detection",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F2": {
                    id: "MQ1-SQ1-F2",
                    title: "Number of oral medicines",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F3": {
                    id: "MQ1-SQ1-F3",
                    title: "Cholesterol level",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F4": {
                    id: "MQ1-SQ1-F4",
                    title: "HYPERLIPIDAEMIA DIAGNOSIS",
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
                    title: "Duration since detection",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F2": {
                    id: "MQ1-SQ1-F2",
                    title: "Number of oral medicines",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F3": {
                    id: "MQ1-SQ1-F3",
                    title: "Cholesterol level",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F4": {
                    id: "MQ1-SQ1-F4",
                    title: "HYPERLIPIDAEMIA DIAGNOSIS",
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
                    title: "Duration since detection",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F2": {
                    id: "MQ1-SQ1-F2",
                    title: "Number of oral medicines",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F3": {
                    id: "MQ1-SQ1-F3",
                    title: "Cholesterol level",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F4": {
                    id: "MQ1-SQ1-F4",
                    title: "HYPERLIPIDAEMIA DIAGNOSIS",
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
                    title: "Duration since detection",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F2": {
                    id: "MQ1-SQ1-F2",
                    title: "Number of oral medicines",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F3": {
                    id: "MQ1-SQ1-F3",
                    title: "Cholesterol level",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F4": {
                    id: "MQ1-SQ1-F4",
                    title: "HYPERLIPIDAEMIA DIAGNOSIS",
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
                    title: "Duration since detection",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F2": {
                    id: "MQ1-SQ1-F2",
                    title: "Number of oral medicines",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F3": {
                    id: "MQ1-SQ1-F3",
                    title: "Cholesterol level",
                    field_type: "DROPDOWN",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F4": {
                    id: "MQ1-SQ1-F4",
                    title: "HYPERLIPIDAEMIA DIAGNOSIS",
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
    MQ02: {
      main_question: {
        id: "MQ02",
        icon_class: "tobaco",
        title: "OTHER HEALTH QUESTION",
        description: "",
        status: false,
        sub_question: {
          "MQ1-SQ1": {
            id: "MQ1-SQ1",
            icon_class: "",
            status: false,
            title: "STROKE",
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
                    title: "CHECK STROKE DISEASE",
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
                    title: "CHECK STROKE DISEASE",
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
                    title: "CHECK STROKE DISEASE",
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
                    title: "CHECK STROKE DISEASE",
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
                    title: "CHECK STROKE DISEASE",
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
                    title: "CHECK STROKE DISEASE",
                    field_type: "DATEPICKER",
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
            title: "RESPIRATORY",
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
                    title: "CHECK RESPIRATORY INFECTION",
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
                    title: "CHECK RESPIRATORY INFECTION",
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
                    title: "CHECK RESPIRATORY INFECTION",
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
                    title: "CHECK RESPIRATORY INFECTION",
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
                    title: "CHECK RESPIRATORY INFECTION",
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
                    title: "CHECK RESPIRATORY INFECTION",
                    field_type: "DATEPICKER",
                    value: { value: "", warning: false },
                  },
                },
              },
            },
          },
          "MQ3-SQ3": {
            id: "MQ3-SQ3",
            icon_class: "",
            title: "BONE INJURY",
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
                    title: "CHECK BONE INJURY",
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
                    title: "CHECK BONE INJURY",
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
                    title: "CHECK BONE INJURY",
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
                    title: "CHECK BONE INJURY",
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
                    title: "CHECK BONE INJURY",
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
                    title: "CHECK BONE INJURY",
                    field_type: "DATEPICKER",
                    value: { value: "", warning: false },
                  },
                },
              },
            },
          },
          "MQ4-SQ4": {
            id: "MQ4-SQ4",
            icon_class: "",
            title: "CANCER",
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
                    title: "CHECK_CANCER",
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
                    title: "CHECK_CANCER",
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
                    title: "CHECK_CANCER",
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
                    title: "CHECK_CANCER",
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
                    title: "CHECK_CANCER",
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
                    title: "CHECK_CANCER",
                    field_type: "DATEPICKER",
                    value: { value: "", warning: false },
                  },
                },
              },
            },
          },
          "MQ5-SQ5": {
            id: "MQ5-SQ5",
            icon_class: "",
            title: "GYNECOLOGY",
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
                    title: "CHECK GYNECOLOGICAL DISORDER",
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
                    title: "CHECK GYNECOLOGICAL DISORDER",
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
                    title: "CHECK GYNECOLOGICAL DISORDER",
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
                    title: "CHECK GYNECOLOGICAL DISORDER",
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
                    title: "CHECK GYNECOLOGICAL DISORDER",
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
                    title: "CHECK GYNECOLOGICAL DISORDER",
                    field_type: "DATEPICKER",
                    value: { value: "", warning: false },
                  },
                },
              },
            },
          },
          "MQ6-SQ6": {
            id: "MQ6-SQ6",
            icon_class: "",
            title: "FERTILITY",
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
                    title: "CHECK FERTILITY",
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
                    title: "CHECK FERTILITY",
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
                    title: "CHECK FERTILITY",
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
                    title: "CHECK FERTILITY",
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
                    title: "CHECK FERTILITY",
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
                    title: "CHECK FERTILITY",
                    field_type: "DATEPICKER",
                    value: { value: "", warning: false },
                  },
                },
              },
            },
          },
          "MQ7-SQ7": {
            id: "MQ7-SQ7",
            icon_class: "",
            title: "URINARY",
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
                    title: "CHECK URINARY DISEASE",
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
                    title: "CHECK URINARY DISEASE",
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
                    title: "CHECK URINARY DISEASE",
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
                    title: "CHECK URINARY DISEASE",
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
                    title: "CHECK URINARY DISEASE",
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
                    title: "CHECK URINARY DISEASE",
                    field_type: "DATEPICKER",
                    value: { value: "", warning: false },
                  },
                },
              },
            },
          },
          "MQ8-SQ8": {
            id: "MQ8-SQ8",
            icon_class: "",
            title: "GENITAL",
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
                    title: "CHECK GENITAL DISEASE",
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
                    title: "CHECK GENITAL DISEASE",
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
                    title: "CHECK GENITAL DISEASE",
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
                    title: "CHECK GENITAL DISEASE",
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
                    title: "CHECK GENITAL DISEASE",
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
                    title: "CHECK GENITAL DISEASE",
                    field_type: "DATEPICKER",
                    value: { value: "", warning: false },
                  },
                },
              },
            },
          },
          "MQ9-SQ9": {
            id: "MQ9-SQ9",
            icon_class: "",
            title: "ENT",
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
                    title: "CHECK ENT DISEASE",
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
                    title: "CHECK ENT DISEASE",
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
                    title: "CHECK ENT DISEASE",
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
                    title: "CHECK ENT DISEASE",
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
                    title: "CHECK ENT DISEASE",
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
                    title: "CHECK ENT DISEASE",
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
    MQ03: {
      main_question: {
        id: "MQ03",
        icon_class: "tobaco",
        title: "INSURANCE",
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
                title: "CHECK INSURANCE",
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
                title: "CHECK INSURANCE",
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
                title: "CHECK INSURANCE",
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
                title: "CHECK INSURANCE",
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
                title: "CHECK INSURANCE",
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
                title: "CHECK INSURANCE",
                field_type: "TEXTFIELD",
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
        title: "INSURANCE COMPLICATION",
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
                title: "CHECK INSURANCE COMPLICATION",
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
                title: "CHECK INSURANCE COMPLICATION",
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
                title: "CHECK INSURANCE COMPLICATION",
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
                title: "CHECK INSURANCE COMPLICATION",
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
                title: "CHECK INSURANCE COMPLICATION",
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
                title: "CHECK INSURANCE COMPLICATION",
                field_type: "TEXTFIELD",
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
        title: "MEDICAL INS",
        description: "",
        status: false,
        member_data: {
          adult_one: {
            keyName: "adult_one",
            name: "",
            image_class: "adult",
            selection_status: false,
            field_data: {},
          },
          adult_two: {
            keyName: "adult_two",
            name: "",
            image_class: "adult",
            selection_status: false,
            field_data: {},
          },
          child_one: {
            keyName: "child_one",
            name: "",
            image_class: "child",
            selection_status: false,
            field_data: {},
          },
          child_two: {
            keyName: "child_two",
            name: "",
            image_class: "child",
            selection_status: false,
            field_data: {},
          },
          child_three: {
            keyName: "child_three",
            name: "",
            image_class: "child",
            selection_status: false,
            field_data: {},
          },
          child_four: {
            keyName: "child_four",
            name: "",
            image_class: "child",
            selection_status: false,
            field_data: {},
          },
        },
      },
    },
    MQ06: {
      main_question: {
        id: "MQ06",
        icon_class: "tobaco",
        title: "MEDICINES",
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
                title: "PRESCRIBED ILLNESS",
                field_type: "TEXTFIELD",
                value: { value: "", warning: false },
              },
              "MQ1-SQ1-F2": {
                id: "MQ1-SQ1-F2",
                title: "DRUG DETAILS PRESCRIBED",
                field_type: "TEXTFIELD",
                value: { value: "", warning: false },
              },
              "MQ1-SQ1-F3": {
                id: "MQ1-SQ1-F3",
                title: "DRUG PERIOD DETAILS",
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
                title: "PRESCRIBED ILLNESS",
                field_type: "TEXTFIELD",
                value: { value: "", warning: false },
              },
              "MQ1-SQ1-F2": {
                id: "MQ1-SQ1-F2",
                title: "DRUG DETAILS PRESCRIBED",
                field_type: "TEXTFIELD",
                value: { value: "", warning: false },
              },
              "MQ1-SQ1-F3": {
                id: "MQ1-SQ1-F3",
                title: "DRUG PERIOD DETAILS",
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
                title: "PRESCRIBED ILLNESS",
                field_type: "TEXTFIELD",
                value: { value: "", warning: false },
              },
              "MQ1-SQ1-F2": {
                id: "MQ1-SQ1-F2",
                title: "DRUG DETAILS PRESCRIBED",
                field_type: "TEXTFIELD",
                value: { value: "", warning: false },
              },
              "MQ1-SQ1-F3": {
                id: "MQ1-SQ1-F3",
                title: "DRUG PERIOD DETAILS",
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
                title: "PRESCRIBED ILLNESS",
                field_type: "TEXTFIELD",
                value: { value: "", warning: false },
              },
              "MQ1-SQ1-F2": {
                id: "MQ1-SQ1-F2",
                title: "DRUG DETAILS PRESCRIBED",
                field_type: "TEXTFIELD",
                value: { value: "", warning: false },
              },
              "MQ1-SQ1-F3": {
                id: "MQ1-SQ1-F3",
                title: "DRUG PERIOD DETAILS",
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
                title: "PRESCRIBED ILLNESS",
                field_type: "TEXTFIELD",
                value: { value: "", warning: false },
              },
              "MQ1-SQ1-F2": {
                id: "MQ1-SQ1-F2",
                title: "DRUG DETAILS PRESCRIBED",
                field_type: "TEXTFIELD",
                value: { value: "", warning: false },
              },
              "MQ1-SQ1-F3": {
                id: "MQ1-SQ1-F3",
                title: "DRUG PERIOD DETAILS",
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
                title: "PRESCRIBED ILLNESS",
                field_type: "TEXTFIELD",
                value: { value: "", warning: false },
              },
              "MQ1-SQ1-F2": {
                id: "MQ1-SQ1-F2",
                title: "DRUG DETAILS PRESCRIBED",
                field_type: "TEXTFIELD",
                value: { value: "", warning: false },
              },
              "MQ1-SQ1-F3": {
                id: "MQ1-SQ1-F3",
                title: "DRUG PERIOD DETAILS",
                field_type: "TEXTFIELD",
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
        title: "SURGERY",
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
                title: "CHECK SURGERY",
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
                title: "CHECK SURGERY",
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
                title: "CHECK SURGERY",
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
                title: "CHECK SURGERY",
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
                title: "CHECK SURGERY",
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
                title: "CHECK SURGERY",
                field_type: "TEXTFIELD",
                value: { value: "", warning: false },
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
        title: "DISABILITY",
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
                title: "CHECK DISABILITY",
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
                title: "CHECK DISABILITY",
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
                title: "CHECK DISABILITY",
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
                title: "CHECK DISABILITY",
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
                title: "CHECK DISABILITY",
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
                title: "CHECK DISABILITY",
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
        title: "TOBACCO",
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
                title: "CHEW TOBACCO",
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
                title: "CHEW TOBACCO",
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
                title: "CHEW TOBACCO",
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
                title: "CHEW TOBACCO",
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
                title: "CHEW TOBACCO",
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
                title: "CHEW TOBACCO",
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
        title: "SMOKE",
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
                title: "SMOKE",
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
                title: "SMOKE",
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
                title: "SMOKE",
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
                title: "SMOKE",
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
                title: "SMOKE",
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
                title: "SMOKE",
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
        title: "ALCOHOL",
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
                title: "CONSUME ALCOHOL",
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
                title: "CONSUME ALCOHOL",
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
                title: "CONSUME ALCOHOL",
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
                title: "CONSUME ALCOHOL",
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
                title: "CONSUME ALCOHOL",
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
                title: "CONSUME ALCOHOL",
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
        title: "HIV",
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
                title: "CHECK HIV",
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
                title: "CHECK HIV",
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
                title: "CHECK HIV",
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
                title: "CHECK HIV",
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
                title: "CHECK HIV",
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
                title: "CHECK HIV",
                field_type: "TEXTFIELD",
                value: { value: "", warning: false },
              },
            },
          },
        },
      },
    },
  };
};
